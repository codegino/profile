import {evaluate, type EvaluateOptions} from '@mdx-js/mdx';

import * as runtime from 'react/jsx-runtime';

export interface MDXProps
  extends Omit<
    EvaluateOptions,
    'Fragment' | 'jsx' | 'jsxDEV' | 'jsxs' | 'development'
  > {
  source: Parameters<typeof evaluate>[0];
}
export async function MDX(props: MDXProps) {
  const {source, ...rest} = props;
  const {default: MDXContent} = await evaluate(source, {
    ...rest,
    ...(runtime as Pick<EvaluateOptions, 'Fragment' | 'jsx' | 'jsxs'>),
  });

  return <MDXContent />;
}
