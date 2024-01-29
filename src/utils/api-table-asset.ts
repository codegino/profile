import {apitable} from './api-table';

export async function getBlogAssetUrlFromApiTable(slug: string) {
  const datasheet = apitable.datasheet('dst6CrAr5RB5rPooCl');
  const a = await datasheet.records.query({
    filterByFormula: `{slug} = "${slug}"`,
  });

  return a.data?.records[0].fields as {
    slug: string;
    url: string;
  };
}

export const getBlogAssetRecords = async () => {
  const datasheet = apitable.datasheet('dst6CrAr5RB5rPooCl');
  const blogsAssets = await datasheet.records.query();

  return (
    blogsAssets.data?.records.reduce(
      (acc, curr) => {
        const {url, slug} = curr.fields as {url: string; slug: string};
        acc[slug] = curr.fields.url as string;
        return acc;
      },
      {} as Record<string, string>,
    ) ?? {}
  );
};
