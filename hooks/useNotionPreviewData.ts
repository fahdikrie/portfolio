import { useContext } from 'react';

import { NotionPreviewContext } from 'hocs/providers/NotionPreviewProvider';

const useNotionPreviewData = () => {
  const context = useContext(NotionPreviewContext);

  if (context === undefined) {
    throw new Error('Context must be used within a Provider');
  }

  return context;
};

export default useNotionPreviewData;
