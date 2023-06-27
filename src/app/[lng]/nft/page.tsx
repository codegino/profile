// import {createClient} from 'contentful';
import Image from 'next/legacy/image';
import NextLink from '../../../components/basic/NextLink';
import nfts from '../../../data/eth-nft.json';

import {newCommonMetaTags} from '../../../frontend-utils/meta-tags';

export const dynamic = 'force-static';

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
          <div key={name} className="flex flex-col items-center mb-10">
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
              <h2 className="text-2xl text-primary-dark mb-4 underline-on-hover">
                {name}
              </h2>
            </NextLink>
            <div className="max-w-[400px] md:max-w-[800px] mb-4 text-center">
              {details}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {owned.map(({id, img, name: itemName}) => (
                <div key={id} className="flex flex-col items-center">
                  <Image
                    src={img}
                    height={390}
                    width={390}
                    layout="fixed"
                    placeholder="blur"
                    blurDataURL="/assets/nft-placeholder.png"
                    alt={`Collection #${id}`}
                  />

                  <NextLink
                    href={`https://opensea.io/assets/${contractAddress}/${id}`}
                    aria-label={`Collection #${id}`}
                    title={`Collection #${id}`}
                    target="_blank"
                    className="text-primary-dark underline-on-hover"
                  >
                    <div className="text-xl mt-1">{itemName}</div>
                  </NextLink>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mb-10">
        <h3>Check all of my collections</h3>
        <p className="text-xl">
          <NextLink
            href="https://opensea.io/02CG"
            aria-label="OpenSea"
            title="OpenSea"
            className="text-primary-dark underline-on-hover"
          >
            <span className="text-xl">OpenSea</span>
          </NextLink>
        </p>
        <p className="text-xl">
          <NextLink
            href="https://nametag.org/u/0xCG"
            aria-label="Nametag"
            title="Nametag"
            className="text-primary-dark underline-on-hover"
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
