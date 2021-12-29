import {useCallback, useState} from 'react';

type PaginationProps<T> = {
  currentPage?: number;
  pageSize?: number;
  defaultValues?: T[];
};

export function usePagination<T>({
  currentPage = 0,
  pageSize = 10,
  defaultValues = [],
}: PaginationProps<T>) {
  const [data, setData] = useState<T[]>(defaultValues);
  const [page, setPage] = useState(currentPage);
  const [isDone, setIsDone] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const fetchMoreData = useCallback(
    (
      fetchFunction: (
        _currentPage: number,
        _pageSize: number,
      ) => Promise<Response>,
    ) => {
      setIsFetching(true);
      fetchFunction(page, pageSize)
        .then(res => res.json())
        .then(res => {
          if (res.count > 0) {
            setData(prev => [...prev, ...res.data]);
            setPage(prev => prev + 1);
          }

          if (res.count < pageSize) {
            setIsDone(true);
          }
        })
        .finally(() => setIsFetching(false));
    },
    [page, pageSize],
  );

  return {
    fetchMoreData,
    page,
    data,
    isFetching,
    isDone,
  };
}
