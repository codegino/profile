import {IBlogMetadata} from '@/models/mdxFiles';
import {getBlogsMetadata} from '@/utils/mdx.utils';
import Fuse, {IFuseOptions} from 'fuse.js';
import {NextResponse} from 'next/server';

export async function GET(req: Request) {
  const metadata = await getBlogsMetadata();
  const {searchParams} = new URL(req.url);
  const search = searchParams.get('search') ?? '';

  const options: IFuseOptions<IBlogMetadata> = {
    includeScore: true,
    keys: ['title', 'description', 'tags'],
  };

  const fuse = new Fuse(metadata, options);

  const result = fuse.search(search);
  return NextResponse.json(result);
}
