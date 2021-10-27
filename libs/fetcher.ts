import useSWR from 'swr';

const fetcher = (url: string): Promise<Object> =>
  fetch(url).then((res) => res.json());

const withSwr = <T>(path: string) => {
  if (!path) throw new Error('Path is required');

  const { data, error } = useSWR(path, fetcher) as unknown as {
    data: T;
    error: boolean;
  };

  return { data, error };
};

export default withSwr;
