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
import {supabase} from '../../utils/supabaseClient';

export default function WordsPage({
  words,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
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
  const definitions: DictionaryApiResponse[] = await fetch(
    `https://dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${process.env.NEXT_PUBLIC_DICTIONARY_API_KEY}`,
  ).then(res => res.json());

  return definitions.find(definition => definition.fl === type);
}

export const getServerSideProps = async () => {
  let result = await supabase
    .from<WordFromBackend>('words')
    .select('*')
    .order('date', {ascending: false});

  const words = result.data ?? [];

  return {
    props: {
      words: words.map(word => ({
        ...word,
        date: formatDate(new Date(word.date)),
      })),
    },
  };
};
