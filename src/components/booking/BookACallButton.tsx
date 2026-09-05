'use client';
import {FaCalendarAlt} from '@react-icons/all-files/fa/FaCalendarAlt';
import {FaTimes} from '@react-icons/all-files/fa/FaTimes';
import {FC, useCallback, useEffect, useRef, useState} from 'react';

const EMBED_ORIGIN = 'https://www.calendarjet.com';
const EMBED_URL = `${EMBED_ORIGIN}/embed/carlogino/15-minute-meeting`;

const buildEmbedUrl = () => {
  const url = new URL(EMBED_URL);
  url.searchParams.set('parent_url', window.location.href);
  if (window.location.origin && window.location.origin !== 'null') {
    url.searchParams.set('parent_origin', window.location.origin);
  }
  return url.toString();
};

const BookACallButton: FC<{
  label: string;
  title: string;
  closeLabel: string;
  className?: string;
}> = ({label, title, closeLabel, className = ''}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  // The iframe is only created on first open so the third party is never loaded on page view.
  const [embedUrl, setEmbedUrl] = useState<string | null>(null);

  const close = useCallback(() => dialogRef.current?.close(), []);

  const open = () => {
    setEmbedUrl(current => current ?? buildEmbedUrl());
    dialogRef.current?.showModal();
    document.body.style.overflow = 'hidden';
  };

  useEffect(() => {
    const dialog = dialogRef.current;

    const onMessage = (event: MessageEvent) => {
      if (event.origin !== EMBED_ORIGIN) return;
      if (event.data?.type === 'calendarjet:close') {
        close();
      }
    };

    // Backdrop click-to-close. Registered natively rather than as a JSX handler:
    // a <dialog> is not an interactive element, and its backdrop is not a
    // separate node, so this is the only correct place to express it.
    const onDialogClick = (event: MouseEvent) => {
      if (event.target === dialog) {
        close();
      }
    };

    window.addEventListener('message', onMessage);
    dialog?.addEventListener('click', onDialogClick);
    return () => {
      window.removeEventListener('message', onMessage);
      dialog?.removeEventListener('click', onDialogClick);
    };
  }, [close]);

  return (
    <>
      <button type="button" onClick={open} title={label} className={className}>
        <FaCalendarAlt aria-hidden />
        {label}
      </button>
      <dialog
        ref={dialogRef}
        aria-label={title}
        onClose={() => {
          document.body.style.overflow = '';
        }}
        className="size-full max-h-full max-w-full bg-neutral-900 p-0 backdrop:bg-black/70 backdrop:backdrop-blur-xs sm:h-[90vh] sm:max-h-[800px] sm:w-[90vw] sm:max-w-4xl sm:rounded-2xl"
      >
        <div className="relative size-full">
          <button
            type="button"
            onClick={close}
            aria-label={closeLabel}
            title={closeLabel}
            className="absolute right-4 top-4 z-10 flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-200 hover:bg-white/20"
          >
            <FaTimes aria-hidden />
          </button>
          {embedUrl ? (
            <iframe
              src={embedUrl}
              title={title}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="size-full border-none"
            />
          ) : null}
        </div>
      </dialog>
    </>
  );
};

export default BookACallButton;
