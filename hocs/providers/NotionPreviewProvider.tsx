import { createContext } from 'react';

export const NotionPreviewContext = createContext(null);

const NotionPreviewProvider = ({ children, posts }) => {
  return (
    <NotionPreviewContext.Provider value={{ posts }}>
      {children}
    </NotionPreviewContext.Provider>
  );
};

export default NotionPreviewProvider;
