import type {FunctionComponent} from 'react';

export const Experience: FunctionComponent<{
  hasConnector?: boolean;
  children: React.ReactNode;
}> = ({children, hasConnector = false}) => {
  return (
    <div className="relative flex items-center flex-col z-1 mb-8 text-center max-w-6xl">
      <div
        className={`'connector ${
          hasConnector ? 'connector' : 'connector--hidden'
        }`}
      >
        &nbsp;
      </div>
      <div className="py-1 px-4 h-full w-full">{children}</div>
    </div>
  );
};
