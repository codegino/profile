import {createContext, useContext, useState} from 'react';
import type {Dispatch, FunctionComponent, SetStateAction} from 'react';

const HeaderContext = createContext<unknown>(null);

export const HeaderProvider: FunctionComponent = ({children}) => {
  const state = useState(false);

  return (
    <HeaderContext.Provider value={state}>{children}</HeaderContext.Provider>
  );
};

export const useHeader = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useContext(HeaderContext) as [
    boolean,
    Dispatch<SetStateAction<boolean>>,
  ];

  const showSidebar = () => {
    setIsSidebarVisible(true);
  };

  const hideSidebar = () => {
    setIsSidebarVisible(false);
  };

  return {
    isSidebarVisible,
    showSidebar,
    hideSidebar,
  };
};
