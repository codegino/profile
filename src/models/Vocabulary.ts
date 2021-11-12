export type WordType = 'noun' | 'verb' | 'adjective' | 'adverb';

export type DictionaryApiResponse = {
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

export type WordFromBackend = {
  id: number;
  word: string;
  sentences: string[];
  date: string;
  type: WordType;
};
