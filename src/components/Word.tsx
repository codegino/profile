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
    <WordContainer>
      <h2>
        {word.word} | <span className="type">({word.type})</span>
      </h2>
      {pronunciation && (
        <p>
          {pronunciation.hw} <b>|</b> \ {pronunciation.pr} \
        </p>
      )}
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
      {isFetching && <p>Fetching...</p>}
    </WordContainer>
  );
};

export const WordContainer = styled.article`
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
  padding: var(--spacing-small);
  margin-bottom: var(--spacing-small);

  ${mediaQuery(350, 'width: 35rem;')}

  ${mediaQuery(450, 'width: 40rem;')}

  ${mediaQuery(650, 'width: 50rem;')}

  .date {
    color: var(--color-foreground);
    font-size: 0.85em !important;
    margin-top: var(--spacing-small);
    margin-bottom: var(--spacing-small);
    font-style: italic;
  }

  h2 {
    margin-bottom: 0;
  }

  h3 {
    .type {
      font-weight: normal;
      font-size: 0.8em;
    }
  }

  > section > ul {
    margin: var(--spacing-very-small) 0;
  }

  > .definition {
    margin-top: var(--spacing-very-small);
  }
`;

export default Word;
