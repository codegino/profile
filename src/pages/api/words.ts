import type {NextApiRequest, NextApiResponse} from 'next';
import type {WordFromBackend} from '../../models/Vocabulary';
import {formatDate} from '../../utils/date-formatter';
import {supabase} from '../../utils/supabaseClient';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<WordsResponse | {message: string}>,
) {
  const result = await fetchWords(+req.query.page);

  res.status(200).json({
    ...result,
    data: result.data.map(word => ({
      ...word,
      date: formatDate(new Date(word.date)),
    })),
  });
}

const getPagination = (page: number, size: number) => {
  const limit = size ? +size : 3;
  const from = page ? page * limit : 0;
  const to = page ? from + size - 1 : size - 1;

  return {from, to};
};

const WORDS_PAGE_SIZE = 5;

export const fetchWords = async (page: number, pageSize = WORDS_PAGE_SIZE) => {
  const {from, to} = getPagination(page, pageSize);

  let {data} = await supabase
    .from<WordFromBackend>('words')
    .select('*')
    .order('date', {ascending: false})
    .range(from, to);

  return {
    data: data ?? [],
    count: data?.length ?? 0,
    page,
  };
};

type WordsResponse = {
  data: WordFromBackend[];
  page: number;
  count: number;
};
