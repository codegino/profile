import {GetStaticProps} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import NextLink from '../../components/basic/NextLink';

//TODO fetch details usint ethers.js
const collections = [
  {
    name: 'Apiens',
    slug: 'apiens-main-collection',
    contract: '0xcf8896d28b905cefd5ffbddd5dbfa0eeff8d938b',
    details:
      'Apiens is the collection of meta fashion 3D young apes that started with a vision to make blockchain integrated clothes for NFTs enthusiasts back in January 2022. Apiens characters are the combination of youthfulness, fashion, and dignity that going to inspire next generation fashion.',
    owned: [
      {
        id: 795,
        img: 'https://lh3.googleusercontent.com/SUT_AxENEvAXSusoBwQc2MsMfZTR6euLecAizkCqVRj8YhtHL9bENUlGo2OxB9hkskHRS7IzgVRhTDuGQnv-7njycdy_YefGVe5V=s0',
      },
      {
        id: 796,
        img: 'https://lh3.googleusercontent.com/bsDHTZWdC1M1gwdLL2zJIj2W4LkmQifdnQA_o3m-gleO70ATMh1EYBBfYbQRiQypwjfxXk85XUhnMNfNl7mVl0mIxlgE5NMHRN_PjA=s0',
      },
      {
        id: 1962,
        img: 'https://lh3.googleusercontent.com/QXJI1qxaG_EkeVJajB1XFV8khsZAVD_ZmOmHWPKeUfqw2jrNfP2GpiFC-If4usF0LgLQB6TWCJYF2RCf19cY7RkZ2iVt9jdsMbdPIrY=s0',
      },
      {
        id: 985,
        img: 'https://lh3.googleusercontent.com/sp07MnGXwG2wGHi3p7oBuFKy3wT_GzlLnixsuvqNBtQpPg0YZ8Kw2NooErl_gyp87N0v_yk7rLaLKjpITGiHsCqrNgn9TO7cZfI1=s0',
      },
      {
        id: 986,
        img: 'https://lh3.googleusercontent.com/hX_3zaT2oDpYoX6G30JNzbzmwArR4ZmH_6r9P0RhgS2LxRi0zVrQrUN5CiWGHhaG_dwDPdmfOPiDXEtPKJjV88IH0UeNf4JkFdrvuw=s0',
      },
    ],
  },
  {
    name: 'Shinsekai',
    slug: 'shinsekaicorp',
    contract: '0x98b82d9efc577b1c3aa6578342121231db2b47b9',
    details:
      'Shinsekai is the first 3D Manga NFT collection that aims to be the pinnacle of the web3 Manga community.',
    owned: [
      {
        id: 527,
        img: 'https://lh3.googleusercontent.com/oSuDjwjxR_dVqfsMzuy-Qp3Wf7Evy3n4A6Hv21-AIdwpNGSyGoEaQ8Xr_konu3ZzzAFxYbGqdXsDpjXv_t0uHKQ0tDhFGEsvqt1psuU=s0',
      },
      {
        id: 8475,
        img: 'https://lh3.googleusercontent.com/qlnM-PAlcInA0ke7Tv1yyoIfd0kyfBQJnhsmCw6D4FuqmT7H4g2BXfGNcA9xyS5Y9bd4uNqKF9YEqa21i4ghVJ7QDssNrQ6GamknRQ=s0',
      },
      {
        id: 6753,
        img: 'https://lh3.googleusercontent.com/CnoyvtX0ViXn4koZvI8sPmhXV27HJmmHr7LkcO-KqDLRqQf6kUY9AgV80JiMSSTYWEu9d5sL3mvkukIL36u4hfpA76TGa3lE9PUI6g=s0',
      },
    ],
  },
  {
    name: 'Bionic Apes',
    slug: 'bionicapesnft',
    contract: '0x266fbcf5d358c4d48474834b1c70dfb73a48efab',
    details:
      '5,555 unique Bionic Apes are the first robotic ape species on the blockchain. Surviving the Robopacolypse and gracefully willing to be held by their new owners.',
    owned: [
      {
        id: 356,
        img: 'https://lh3.googleusercontent.com/4f9uM8MQIik5vBEs9pvH5QmzEqTLe698V8ixaUWUwxu46Scyl0J9E1m6s-g0A5_8IlaiLeraSUMdQ0xfOWSMcRtR803Sco7Si2jbUQ=s0',
      },
      {
        id: 1746,
        img: 'https://lh3.googleusercontent.com/UiRZySqrup2l9DJlF00GEBgIAwrDCE0gSz02w9_7t2Oqe2i5jsZzo-abp2gowFOFgwQNYsJcHmK8NjJQLi7i5BG0ue-KsUuqS6PrkvI=s0',
      },
    ],
  },
  {
    name: 'Blvck',
    slug: 'blvckgenesis',
    contract: '0x83b070e842adba2397113c4bca70c00d7df00729',
    details: `Blvck Genesis is a collection of 9,999 Blvck avatar NFTs living on the Ethereum blockchain. With hundreds of artistic elements, high fashion traits and monochrome aesthetics, each graphic is crafted by Julian O'hayon, French designer and founder of global lifestyle brand, Blvck Paris. By owning a Blvck Genesis avatar, you will immediately have membership access to exclusive events, lifestyle products and rewards. Join the Blvck movement.`,
    owned: [
      {
        id: 237,
        img: 'https://lh3.googleusercontent.com/h6COmxdJCknQ7j01OFZrUWFNfrtSbOk8tI2B6JxvUl2Xr7vXfWKB_LLb34tAK_y55oSt8ZOpDVmYX_38s2bXyCHUQOcYIDLyXjQj=s0',
      },
      {
        id: 7447,
        img: 'https://lh3.googleusercontent.com/h6COmxdJCknQ7j01OFZrUWFNfrtSbOk8tI2B6JxvUl2Xr7vXfWKB_LLb34tAK_y55oSt8ZOpDVmYX_38s2bXyCHUQOcYIDLyXjQj=s0',
      },
    ],
  },
];

export default function NFT() {
  return (
    <main>
      <h1>Checkout my NFT collections</h1>

      <div>
        {collections.map(({name, contract, owned, slug, details}) => (
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
              <div className="max-w-[400px] md:max-w-[800px] mb-4 text-center">
                {details}
              </div>
            </NextLink>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {owned.map(({id, img}) => (
                <div key={id} className="flex flex-col items-center">
                  <Image
                    src={img}
                    height={390}
                    width={390}
                    layout="fixed"
                    alt={`Collection #${id}`}
                  />

                  <NextLink
                    href={`https://opensea.io/assets/${contract}/${id}`}
                    aria-label={`Collection #${id}`}
                    title={`Collection #${id}`}
                    target="_blank"
                    className="text-primary-dark underline-on-hover"
                  >
                    <div className="text-xl mt-1">
                      {name} #{id}
                    </div>
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

export const getStaticProps: GetStaticProps = async ({locale}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
    revalidate: 1,
  };
};
