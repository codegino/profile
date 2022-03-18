import {useCallback} from 'react';
import type {GetStaticProps, InferGetStaticPropsType} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import ContentLoader from 'react-content-loader';
import Word from '../../components/Word';
import {commonMetaTags} from '../../frontend-utils/meta-tags';
import type {WordFromBackend} from '../../models/Vocabulary';
import {usePagination} from '../../utils/pagination-hook';
import {fetchWords} from '../api/words';

const WORDS_PAGE_SIZE = 10;

export default function WordsPage({
  words: defaultValues,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const {
    data: words,
    fetchMoreData,
    isDone,
    isFetching,
  } = usePagination<WordFromBackend>({
    currentPage: 1,
    pageSize: WORDS_PAGE_SIZE,
    defaultValues,
  });

  const handleFetchMoreWords = useCallback(() => {
    fetchMoreData(page => fetch(`/api/words?page=${page}`));
  }, [fetchMoreData]);

  return (
    <>
      <Head>
        <title>Vocabulary Page | Carlo Gino Catapang | Code Gino</title>
        {commonMetaTags('Words Page', '/words')}
      </Head>
      <main className="flex items-center flex-col overflow-hidden pb-4 bg-light min-h-[90vh]">
        <h1>English words I learned</h1>

        {words.map(word => (
          <Word key={word.id} word={word} />
        ))}
        {isFetching && (
          <>
            <WordContentLoader />
            <WordContentLoader />
          </>
        )}
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

export const getStaticProps: GetStaticProps = async ({locale}) => {
  const words = await fetchWords(0).then(res => res.data);

  return {
    props: {
      words,
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
    revalidate: 1,
  };
};

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
