import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import {InferGetServerSidePropsType} from 'next';
import Head from 'next/head';
import {commonMetaTags} from '../../frontend-utils/meta-tags';
import {
  DictionaryApiResponse,
  WordFromBackend,
  WordType,
} from '../../models/Vocabulary';
import {formatDate} from '../../utils/date-formatter';
import {mediaQuery} from '../../utils/media-query';
import {fetchWords} from '../api/words';

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

  const fetchMoreData = (
    fetchFunction: (
      _currentPage: number,
      _pageSize: number,
    ) => Promise<Response>,
  ) => {
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
      });
  };

  return {
    fetchMoreData,
    page,
    data,
    isDone,
  };
}

export default function WordsPage({
  words: defaultWords,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const {
    data: words,
    fetchMoreData,
    isDone,
  } = usePagination({
    currentPage: 1,
    defaultValues: defaultWords,
  });

  const handleFetchMoreWords = () => {
    fetchMoreData(page =>
      fetch(`${window.location.origin}/api/words?page=${page}`),
    );
  };

  return (
    <>
      <Head>
        <title>Carlo Gino Catapang Words</title>
        {commonMetaTags('/words')}
      </Head>
      <h1>English words I learned</h1>
      <Container>
        {words.map(word => (
          <Word key={word.id} word={word} />
        ))}

        {!isDone && <button onClick={handleFetchMoreWords}>Fetch More</button>}
      </Container>
    </>
  );
}

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
      <h3>
        {word.word} | <span className="type">({word.type})</span>
      </h3>
      <p className="date">{word.date}</p>

      <section>
        <h4>Sentences</h4>
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
          <h4>Definition</h4>
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

const WordContainer = styled.section`
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

const Container = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  min-height: 80vh;
`;

async function fetchDefinition(word: string, type: WordType) {
  const definition: DictionaryApiResponse = await fetch(
    `${window.location.origin}/api/define?word=${word}&type=${type}`,
  ).then(res => res.json());

  return definition;
}

export const getServerSideProps = async () => {
  const {data: words} = await fetchWords(0, WORDS_PAGE_SIZE);

  return {
    props: {
      words: words.map(word => ({
        ...word,
        date: formatDate(new Date(word.date)),
      })),
    },
  };
};
