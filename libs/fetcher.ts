import useSWR from 'swr';

const fetcher = (url: string): Promise<Object> =>
  fetch(url).then((res) => res.json());

const withSwr = (path: string) => {
  if (!path) throw new Error('Path is required');

  const { data, error } = useSWR(path, fetcher);

  return { data, error };
};

export default withSwr;
