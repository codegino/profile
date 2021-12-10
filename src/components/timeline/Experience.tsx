import React from 'react';
import {keyframes} from '@emotion/react';

export const Experience: React.FC<{hasConnector?: boolean}> = ({
  children,
  hasConnector = false,
}) => {
  return (
    <section className="relative flex items-center flex-col z-1 mb-8 text-center max-w-6xl">
      <div
        className={`'connector ${
          hasConnector ? 'connector--visible' : 'connector--hidden'
        }`}
      >
        &nbsp;
        <style jsx>{`
          .connector--visible {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--color-primary);
            width: 0.25rem;
            height: 2.5rem;
            position: absolute;
            top: -2.25rem;
            animation: ${appear} 1s;
          }

          ::before {
            content: '';
            width: 0.75rem;
            height: 0.75rem;
            position: absolute;
            background-color: var(--color-primary);
            border-radius: 50%;
            z-index: 1;
          }

          .connector--hidden {
            display: none;
          }
        `}</style>
      </div>
      <div className="py-1 px-4 h-full w-full">{children}</div>
    </section>
  );
};

const appear = keyframes`
  0% {opacity: 0;}
  70%  {opacity: 0;}
  90%  {opacity: 0.1;}
  100% {opacity: 1;}
`;
