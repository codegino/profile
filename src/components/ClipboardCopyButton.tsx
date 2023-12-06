'use client';
import {useEffect, useState} from 'react';
import {FaCheck as CheckIcon} from '@react-icons/all-files/fa/FaCheck';
import {FaCopy as CopyIcon} from '@react-icons/all-files/fa/FaCopy';

async function copyToClipboard(value: string) {
  try {
    if ('clipboard' in navigator) {
      await navigator.clipboard.writeText(value);
      return true;
    }

    const element = document.createElement('textarea');
    element.value = value;
    document.body.append(element);
    element.select();
    document.execCommand('copy');
    element.remove();

    return true;
  } catch {
    return false;
  }
}

interface ClipboardCopyButtonProps {
  value: string;
}

enum State {
  Idle = 'idle',
  Copy = 'copy',
  Copied = 'copied',
}

function ClipboardCopyButton({value}: ClipboardCopyButtonProps) {
  const [state, setState] = useState<State>(State.Idle);

  useEffect(() => {
    async function transition() {
      switch (state) {
        case State.Copy: {
          await copyToClipboard(value);
          setState(State.Copied);
          break;
        }
        case State.Copied: {
          setTimeout(() => {
            setState(State.Idle);
          }, 2000);
          break;
        }
        default:
          break;
      }
    }
    void transition();
  }, [state, value]);

  return (
    <button
      className="border-none flex items-center bg-transparent text-neutral-700 dark:text-neutral-300"
      onClick={() => setState(State.Copy)}
    >
      <span className="inline-block mr-2">
        {state === State.Copied ? 'Copied' : 'Copy'}
      </span>
      {state === State.Copied ? (
        <CheckIcon
          className="text-primary-500 dark:text-primary-300"
          size={20}
        />
      ) : (
        <CopyIcon
          className="text-neutral-800 dark:text-neutral-300"
          size={18}
        />
      )}
    </button>
  );
}

export default ClipboardCopyButton;
