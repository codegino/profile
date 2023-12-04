import React from 'react';

const Loading = () => {
  return (
    <div className="isolate flex justify-center flex-col items-center min-h-screen w-full relative bg-zinc-100 dark:bg-zinc-900">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-primary-dark [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
        />
      </svg>
    </div>
  );
};

export default Loading;
