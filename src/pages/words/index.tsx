import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import Head from 'next/head';
import ContentLoader from 'react-content-loader';
import {commonMetaTags} from '../../frontend-utils/meta-tags';
import {
  DictionaryApiResponse,
  WordFromBackend,
  WordType,
} from '../../models/Vocabulary';
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
    fetchMoreData(page =>
      fetch(`${window.location.origin}/api/words?page=${page}`),
    );
  }, [fetchMoreData]);

  useEffect(() => {
    if (page === 0) {
      handleFetchMoreWords();
    }
  }, [handleFetchMoreWords, page]);

  return (
    <>
      <Head>
        <title>Carlo Gino Catapang Words</title>
        {commonMetaTags('/words')}
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
    <ContentLoader viewBox="1 1 200 100">
      <rect x="0" y="15" rx="3" ry="3" width="80" height="15" />
      <rect x="0" y="35" rx="3" ry="3" width="100" height="12" />
      <rect x="0" y="55" rx="3" ry="3" width="90" height="14" />
      <rect x="10" y="72" rx="3" ry="3" width="250" height="12" />
      <rect x="10" y="88" rx="3" ry="3" width="250" height="12" />
    </ContentLoader>
  </WordContainer>
);

const Word = ({word}: {word: WordFromBackend}) => {
  const [showDefinition, setShowDefinition] = useState(false);
  const [definitions, setDefinitions] = useState<string[]>([]);

  useEffect(() => {
    if (showDefinition) {
      fetchDefinition(word.word, word.type).then(res => {
        if (res) {
          setDefinitions(res?.shortdef);
        }
      });
    }
  }, [showDefinition, word.word, word.type]);

  return (
    <WordContainer>
      <h2>
        {word.word} | <span className="type">({word.type})</span>
      </h2>
      <p className="date">{word.date}</p>

      <section>
        <h3>Sentences</h3>
        <ul>
          {word.sentences.map((sentence, index) => (
            <li key={index}>{sentence}</li>
          ))}
        </ul>
      </section>

      {!showDefinition && (
        <button onClick={() => setShowDefinition(true)}>Define</button>
      )}

      {showDefinition && (
        <section className="definition">
          <h3>Definition</h3>
          <ul>
            {definitions.map((definition, index) => (
              <li key={index}>
                <i>{definition}</i>
              </li>
            ))}
          </ul>
        </section>
      )}
    </WordContainer>
  );
};

const WordContainer = styled.article`
  width: 100%;
  min-width: 30rem;
  display: flex;
  overflow: auto;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  border: 1px solid var(--color-dark);
  box-shadow: 1px 1px 2px 0px var(--color-dark);
  border-radius: 0.5rem;
  padding: var(--padding-small);
  margin-bottom: var(--margin-small);

  ${mediaQuery(350, 'width: 35rem;')}

  ${mediaQuery(450, 'width: 40rem;')}

  ${mediaQuery(650, 'width: 50rem;')}

  .date {
    color: var(--color-dark);
    font-size: 0.85em !important;
    margin-bottom: var(--margin-small);
    font-style: italic;
  }

  h3 {
    .type {
      font-weight: normal;
      font-size: 0.8em;
    }
  }

  > section > ul {
    margin: var(--margin-very-small) 0;
  }

  > .definition {
    margin-top: var(--margin-very-small);
  }
`;

const Container = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  min-height: 80vh;
  padding-bottom: var(--padding-small);
`;

async function fetchDefinition(word: string, type: WordType) {
  const definition: DictionaryApiResponse = await fetch(
    `${window.location.origin}/api/define?word=${word}&type=${type}`,
  ).then(res => res.json());

  return definition;
}
