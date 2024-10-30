import type {FunctionComponent} from 'react';

export const Experience: FunctionComponent<{
  hasConnector?: boolean;
  children: React.ReactNode;
}> = ({children}) => {
  // Generate a random rotation between -1 and 1 degrees
  const rotation = Math.random() * 2 - 1;

  return (
    <div className="relative flex items-center flex-col z-10 mb-12 text-center max-w-6xl">
      {/* Pin */}
      <div
        className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20 w-6 h-6 rounded-full bg-gradient-to-br from-red-400 to-red-600 shadow-lg"
        style={{
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-red-300"></div>
      </div>

      {/* Sticky Note */}
      <div
        className={`bg-yellow-100 dark:bg-yellow-200 p-6 rounded shadow-lg transform hover:scale-105 transition-transform duration-200 ease-in-out w-full md:w-3/4 lg:w-2/3`}
        style={{
          transform: `rotate(${rotation}deg)`,
          boxShadow:
            '0 4px 8px rgba(0, 0, 0, 0.15), 2px 2px 5px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div className="py-1 px-4 h-full w-full relative">
          {children}
          {/* Add subtle lines to make it look more like paper */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="h-full w-full bg-gradient-to-b from-transparent to-yellow-200/10 dark:to-yellow-300/10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
