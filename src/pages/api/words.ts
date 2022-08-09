import {createClient} from 'contentful';
import type {NextApiRequest, NextApiResponse} from 'next';
import type {WordFromBackend} from '../../models/Vocabulary';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<WordsResponse | {message: string}>,
) {
  const result = await fetchWords(+(req.query?.page ?? ''));

  res.status(200).json({
    ...result,
    data: result.data,
  });
}

const WORDS_PAGE_SIZE = 10;
export const fetchWords = async (page: number, pageSize = WORDS_PAGE_SIZE) => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  });

  const entries = await client.getEntries<WordFromBackend>({
    content_type: 'words',
    skip: page * pageSize,
    limit: pageSize,
    order: '-fields.date',
  });

  return {
    data:
      entries.items.map(word => ({
        ...word.fields,
        id: word.sys.id,
      })) ?? [],
    count: entries.items.length ?? 0,
    page,
  };
};

type WordsResponse = {
  data: WordFromBackend[];
  page: number;
  count: number;
};
