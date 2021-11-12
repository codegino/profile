import React, {useState} from 'react';
import styled from '@emotion/styled';
import {InferGetServerSidePropsType} from 'next';
import Head from 'next/head';
import {commonMetaTags} from '../../frontend-utils/meta-tags';
import {formatDate} from '../../utils/date-formatter';
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
      <Container>
        {words.map(word => (
          <Word key={word.word} word={word} />
        ))}
      </Container>
    </>
  );
}

const Word = ({word}: {word: MyVocabulary}) => {
  const [showDefinition, setShowDefinition] = useState(false);

  return (
    <WordContainer>
      <h3>
        {word.word} ({word.type})
      </h3>
      <aside>
        <i>{word.date}</i>
      </aside>

      {showDefinition && (
        <>
          <h4>Definition</h4>
          <ul>
            {word.short_def.map((definition, index) => (
              <li key={index}>
                <i>{definition}</i>
              </li>
            ))}
          </ul>
        </>
      )}

      <h4>Sentences</h4>
      <ul>
        {word.sentences.map((sentence, index) => (
          <li key={index}>{sentence}</li>
        ))}
      </ul>

      {!showDefinition && (
        <button onClick={() => setShowDefinition(true)}>Define</button>
      )}
    </WordContainer>
  );
};

const WordContainer = styled.section`
  padding: var(--padding-small);

  > ul {
    margin: var(--margin-very-small) 0;
  }
`;

const Container = styled.article`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  min-height: 80vh;
  padding: var(--padding-medium) 0;
`;

type MyVocabulary = {
  word: string;
  short_def: string[];
  sentences: string[];
  type: WordType;
  date: string;
};

type WordType = 'noun' | 'verb' | 'adjective' | 'adverb';

type DictionaryApiResponse = {
  meta: {
    id: string;
    uuid: string;
    sort: string;
    src: string;
    section: string;
    stems: string[];
    offensive: boolean;
  };
  hom: number;
  fl: WordType;
  date: string;
  shortdef: string[];
};

async function fetchDefinition(word: string, type: WordType) {
  const definitions: DictionaryApiResponse[] = await fetch(
    `https://dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${process.env.DICTIONARY_API_KEY}`,
  ).then(res => res.json());

  return definitions.find(definition => definition.fl === type);
}

type WordFromBackend = {
  id: string;
  sentences: string[];
  date: string;
  type: WordType;
};

export const getServerSideProps = async () => {
  let result = await supabase
    .from<WordFromBackend>('words')
    .select('*')
    .order('date', {ascending: false});

  const wordsFromDB = result.data ?? [];

  const definitions = await Promise.all(
    wordsFromDB.map(async word => {
      const def = await fetchDefinition(word.id, word.type);

      return def;
    }) ?? [],
  );

  const words = definitions
    .filter(definition => definition)
    .map((definition, index): MyVocabulary => {
      return {
        word: wordsFromDB[index].id,
        short_def: definition?.shortdef ?? [],
        sentences: wordsFromDB[index].sentences,
        type: definition?.fl ?? 'noun',
        date: formatDate(new Date(wordsFromDB[index].date)),
      };
    });

  return {
    props: {words},
  };
};
