import useSWR from 'swr';

const fetcher = (url: string): Promise<unknown> =>
  fetch(url).then((res) => res.json());

const withSwr = <T>(path: string) => {
  if (!path) throw new Error('Path is required');

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, error } = useSWR(path, fetcher) as unknown as {
    data: T;
    error: boolean;
  };

  return { data, error };
};

export default withSwr;
