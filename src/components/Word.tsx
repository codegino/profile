import {useEffect, useState} from 'react';
import {useTranslation} from 'next-i18next';
import type {
  DictionaryApiResponse,
  WordFromBackend,
} from '../models/Vocabulary';

const Word = ({word}: {word: WordFromBackend}) => {
  const [showDefinition, setShowDefinition] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [pronunciation, setPronunciation] =
    useState<{hw: string; pr: string}>();

  const {t} = useTranslation('common');

  useEffect(() => {
    if (showDefinition) {
      setIsFetching(true);
      fetch(`/api/define?word=${word.word}&type=${word.type}`)
        .then(res => res.json())
        .then((res: DictionaryApiResponse) => {
          if (res) {
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
    <article className="w-4/5 min-w-[20rem] max-w-3xl p-4 rounded-xl shadow-sm shadow-dark mb-10 bg-lightest">
      <h2 className="mb-0">
        {word.word} | <span className="font-normal text-lg">({word.type})</span>
      </h2>
      {pronunciation && (
        <p>
          {pronunciation.hw} <b>|</b> \ {pronunciation.pr} \
        </p>
      )}
      <p className="text-dark text-xl my-2 italic">
        {t('date', {
          val: new Date(word.date),
          formatParams: {
            val: {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            },
          },
        })}
      </p>
      <section>
        <h3>Sentences</h3>
        <ul className="my-2">
          {word.sentences.map((sentence, index) => (
            <li key={index}>{sentence}</li>
          ))}
        </ul>
      </section>
      {!showDefinition && (
        <button
          onClick={() => setShowDefinition(true)}
          className="underline text-dark font-semibold underline-on-hover"
        >
          Define
        </button>
      )}
      {showDefinition && (
        <section className="mt-2">
          <h3>Definition</h3>
          <ul className="my-2">
            {word.definitions.map((definition, index) => (
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
