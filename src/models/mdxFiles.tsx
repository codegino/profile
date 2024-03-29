interface IMdxMetadata {
  title: string;
  author: string;
  date: string;
  dateUpdated: string;
  slug: string;
  order: number;
  description: string;
  bannerId: string;
  hideBanner: boolean;
  bannerDescription: string;
  tags: string[];
  keywords: string[];
  published: boolean;
}

export type IBlogMetadata = IMdxMetadata;

export type INovelMetadata = IMdxMetadata & {narrationId: string};
