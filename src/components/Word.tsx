import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import type {
  DictionaryApiResponse,
  WordFromBackend,
} from '../models/Vocabulary';
import {mediaQuery} from '../utils/media-query';

const Word = ({word}: {word: WordFromBackend}) => {
  const [showDefinition, setShowDefinition] = useState(false);
  const [definitions, setDefinitions] = useState<string[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [pronunciation, setPronunciation] =
    useState<{hw: string; pr: string}>();

  useEffect(() => {
    if (showDefinition) {
      setIsFetching(true);
      fetch(`/api/define?word=${word.word}&type=${word.type}`)
        .then(res => res.json())
        .then((res: DictionaryApiResponse) => {
          if (res) {
            setDefinitions(res?.shortdef);
            setPronunciation({
              pr: res?.hwi.prs[0].mw,
              hw: res?.hwi.hw,
            });
          }
        })
        .finally(() => setIsFetching(false));
    }
  }, [showDefinition, word.word, word.type]);

  return (
    <article className="w-full min-w-min shadow-md">
      <h2 className="mb-0">
        {word.word} | <span className="font-normal text-xl">({word.type})</span>
      </h2>
      {pronunciation && (
        <p>
          {pronunciation.hw} <b>|</b> \ {pronunciation.pr} \
        </p>
      )}
      <p className="text-dark text-xl my-4 italic">{word.date}</p>
      <section>
        <h3>Sentences</h3>
        <ul className="my-2">
          {word.sentences.map((sentence, index) => (
            <li key={index}>{sentence}</li>
          ))}
        </ul>
      </section>
      {!showDefinition && (
        <button onClick={() => setShowDefinition(true)}>Define</button>
      )}
      {showDefinition && (
        <section className="mt-2">
          <h3>Definition</h3>
          <ul className="my-2">
            {definitions.map((definition, index) => (
              <li key={index}>
                <i>{definition}</i>
              </li>
            ))}
          </ul>
        </section>
      )}
      {isFetching && <p>Fetching...</p>}
    </article>
  );
};

export default Word;
