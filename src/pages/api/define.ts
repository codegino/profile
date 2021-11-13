import type {NextApiRequest, NextApiResponse} from 'next';
import {DictionaryApiResponse} from '../../models/Vocabulary';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DictionaryApiResponse | {message: string}>,
) {
  const {word, type} = req.query;

  if (!word || !type) {
    res.status(400).json({message: 'Missing query params'});
  }

  const definitions: DictionaryApiResponse[] = await fetch(
    `https://dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${process.env.DICTIONARY_API_KEY}`,
  ).then(res => res.json());

  const definition = definitions.find(definition => definition.fl === type);

  if (definition) {
    res.status(200).json(definition);
  } else {
    res.status(404).json({message: 'Definition not found'});
  }
}
