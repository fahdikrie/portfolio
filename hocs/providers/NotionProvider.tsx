import { createContext } from 'react';

export const NotionContext = createContext(null);

export function NotionProvider({ children, recordMap }) {
  return (
    <NotionContext.Provider value={{ recordMap }}>
      {children}
    </NotionContext.Provider>
  );
}
