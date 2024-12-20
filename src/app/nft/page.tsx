import Image from 'next/image';
import NextLink from '../../components/basic/NextLink';
import nfts from '../../data/eth-nft.json';

import {newCommonMetaTags} from '../../frontend-utils/meta-tags';

export const metadata = {
  ...newCommonMetaTags('NFT Collection', '/nft', 'nft-preview.jpg'),
  title: 'My NFT Collection | CodeGino | Carlo Gino Catapang',
};

export default async function NFT() {
  const {
    props: {collections},
  } = await getStaticProps();
  return (
    <main>
      <h1>Check out my NFT collections</h1>

      <div>
        {collections.map(({name, details, contractAddress, owned, slug}) => (
          <div key={name} className="mb-10 flex flex-col items-center">
            <span
              aria-hidden="true"
              tabIndex={-1}
              aria-label={name}
              id={name}
            />
            <NextLink
              href={`https://opensea.io/collection/${slug}`}
              aria-label={name}
              title={name}
              target="_blank"
              className="flex flex-col items-center"
            >
              <h2 className="underline-on-hover mb-4 text-2xl text-primary-900 dark:text-primary-300">
                {name}
              </h2>
            </NextLink>
            <div className="mb-4 max-w-screen-xs text-center md:max-w-[800px]">
              {details}
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {owned.map(({id, img, name: itemName}) => (
                <div key={id} className="flex flex-col items-center">
                  <Image
                    src={img}
                    height={390}
                    width={390}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="/assets/nft-placeholder.png"
                    title={`Collection #${id}`}
                    alt={`Collection #${id}`}
                  />

                  <NextLink
                    href={`https://opensea.io/assets/${contractAddress}/${id}`}
                    aria-label={`Collection #${id}`}
                    title={`${name} #${id}`}
                    target="_blank"
                    className="underline-on-hover text-primary-900 dark:text-primary-300"
                  >
                    <div className="mt-1 text-xl">{itemName}</div>
                  </NextLink>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mb-10 text-center">
        <h3>Check all of my collections</h3>
        <p className="text-xl">
          <NextLink
            href="https://opensea.io/02CG"
            aria-label="OpenSea"
            title="OpenSea"
            className="underline-on-hover text-primary-900 dark:text-primary-300"
          >
            <span className="text-xl">OpenSea</span>
          </NextLink>
        </p>
        <p className="text-xl">
          <NextLink
            href="https://nametag.org/u/0xCG"
            aria-label="Nametag"
            title="Nametag"
            className="underline-on-hover text-primary-900 dark:text-primary-300"
          >
            <span className="text-xl">Nametag</span>
          </NextLink>
        </p>
      </div>
    </main>
  );
}

const getStaticProps = async () => {
  return {
    props: {
      collections: nfts as NftCollection[],
    },
  };
};

type NftCollection = {
  name: string;
  slug: string;
  contractAddress: string;
  details: string;
  owned: {
    id: number;
    img: string;
    name: string;
  }[];
};
