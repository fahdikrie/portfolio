import { useContext } from 'react';

import { NotionContext } from 'hocs/providers/NotionProvider';

export const useNotionData = () => {
  const context = useContext(NotionContext);

  if (context === undefined) {
    throw new Error('Context must be used within a Provider');
  }

  return context;
};
