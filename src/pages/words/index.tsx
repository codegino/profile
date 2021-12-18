import {useCallback, useEffect, useState} from 'react';
import Head from 'next/head';
import ContentLoader from 'react-content-loader';
import Word from '../../components/Word';
import {commonMetaTags} from '../../frontend-utils/meta-tags';
import type {WordFromBackend} from '../../models/Vocabulary';

const WORDS_PAGE_SIZE = 10;

type PaginationProps<T> = {
  currentPage?: number;
  pageSize?: number;
  defaultValues?: T[];
};

function usePagination<T>({
  currentPage = 0,
  pageSize = WORDS_PAGE_SIZE,
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

export default function WordsPage({}) {
  const {
    data: words,
    fetchMoreData,
    isDone,
    page,
    isFetching,
  } = usePagination<WordFromBackend>({
    currentPage: 0,
  });

  const handleFetchMoreWords = useCallback(() => {
    fetchMoreData(page => fetch(`/api/words?page=${page}`));
  }, [fetchMoreData]);

  useEffect(() => {
    if (page === 0) {
      handleFetchMoreWords();
    }
  }, [handleFetchMoreWords, page]);

  return (
    <>
      <Head>
        <title>Vocabulary Page | Code Gino | Carlo Gino Catapang</title>
        {commonMetaTags('Words Page', '/words')}
      </Head>
      <main className="flex items-center flex-col overflow-hidden pb-4 bg-light min-h-[90vh]">
        <h1>English words I learned</h1>

        {words.length === 0 && isFetching && (
          <>
            <WordContentLoader />
            <WordContentLoader />
            <WordContentLoader />
            <WordContentLoader />
            <WordContentLoader />
          </>
        )}
        {words.map(word => (
          <Word key={word.id} word={word} />
        ))}
        {!isFetching && !isDone && (
          <button
            onClick={handleFetchMoreWords}
            className="underline text-dark font-semibold underline-on-hover"
          >
            Fetch More
          </button>
        )}
      </main>
    </>
  );
}

const WordContentLoader = () => (
  <article className="min-w-[20rem] w-4/5 max-w-3xl p-4 rounded-2xl shadow-sm shadow-dark mb-10 bg-lightest">
    <ContentLoader viewBox="1 1 175 95" className="h-[10rem]">
      <rect x="0" y="10" rx="3" ry="3" width="80" height="12" />
      <rect x="0" y="30" rx="3" ry="3" width="100" height="10" />
      <rect x="0" y="48" rx="3" ry="3" width="90" height="12" />
      <rect className="w-36" x="10" y="65" rx="3" ry="3" height="10" />
      <rect x="0" y="80" rx="3" ry="3" width="60" height="13" />
    </ContentLoader>
  </article>
);
