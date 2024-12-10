import type {FunctionComponent} from 'react';

export const Experience: FunctionComponent<{
  hasConnector?: boolean;
  children: React.ReactNode;
}> = ({children}) => {
  // Generate a random rotation between -1 and 1 degrees
  const rotation = Math.random() * 2 - 1;

  return (
    <div className="relative z-10 mb-12 flex max-w-6xl flex-col items-center text-center">
      {/* Pin */}
      <div
        className="absolute -top-4 left-1/2 z-20 size-6 -translate-x-1/2 rounded-full bg-gradient-to-br from-red-400 to-red-600 shadow-lg"
        style={{
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        }}
      >
        <div className="absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-300"></div>
      </div>

      {/* Sticky Note */}
      <div
        className={`w-full rounded bg-yellow-100 p-6 shadow-lg transition-transform duration-200 ease-in-out hover:scale-105 dark:bg-yellow-200 md:w-3/4 lg:w-2/3`}
        style={{
          transform: `rotate(${rotation}deg)`,
          boxShadow:
            '0 4px 8px rgba(0, 0, 0, 0.15), 2px 2px 5px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div className="relative size-full px-4 py-1">
          {children}
          {/* Add subtle lines to make it look more like paper */}
          <div className="pointer-events-none absolute inset-0">
            <div className="size-full bg-gradient-to-b from-transparent to-yellow-200/10 dark:to-yellow-300/10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
