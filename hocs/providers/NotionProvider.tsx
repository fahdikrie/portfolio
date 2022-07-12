import { createContext } from 'react';

export const NotionContext = createContext(null);

export function NotionProvider({ children, posts }) {
  return (
    <NotionContext.Provider value={{ posts }}>
      {children}
    </NotionContext.Provider>
  );
}
