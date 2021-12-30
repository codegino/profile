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
  hwi: {
    hw: string;
    prs: {
      mw: string;
    }[];
  };
  hom: number;
  fl: WordType;
  date: string;
  shortdef: string[];
};

export type WordFromBackend = {
  id: string;
  word: string;
  sentences: string[];
  definitions: string[];
  date: string;
  type: WordType;
};
