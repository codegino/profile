import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import Head from 'next/head';
import ContentLoader from 'react-content-loader';
import Word, {WordContainer} from '../../components/Word';
import {commonMetaTags} from '../../frontend-utils/meta-tags';
import type {WordFromBackend} from '../../models/Vocabulary';
import {mediaQuery} from '../../utils/media-query';

const WORDS_PAGE_SIZE = 5;

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

  const fetchMoreData = React.useCallback(
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

  const handleFetchMoreWords = React.useCallback(() => {
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
        <title>
          New English words I learned | Carlo Gino Catapang | Code Gino
        </title>
        {commonMetaTags('Words Page', '/words')}
      </Head>
      <Container>
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
        {!isDone && <button onClick={handleFetchMoreWords}>Fetch More</button>}
      </Container>
    </>
  );
}

const WordContentLoader = () => (
  <WordContainer>
    <StyledContentLoader viewBox="1 1 175 95">
      <rect x="0" y="10" rx="3" ry="3" width="80" height="12" />
      <rect x="0" y="30" rx="3" ry="3" width="100" height="9" />
      <rect x="0" y="48" rx="3" ry="3" width="90" height="12" />
      <rect className="sentence" x="10" y="65" rx="3" ry="3" height="10" />
      <rect x="0" y="80" rx="3" ry="3" width="60" height="13" />
    </StyledContentLoader>
  </WordContainer>
);

const StyledContentLoader = styled(ContentLoader)`
  height: 175px;

  ${mediaQuery(600, `height: 150px`)}

  .sentence {
    width: 150px;

    ${mediaQuery(600, `width: 2500px`)}
  }
`;

const Container = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  min-height: 80vh;
  padding-bottom: var(--spacing-small);
`;
