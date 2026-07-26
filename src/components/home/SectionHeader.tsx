import type {FC} from 'react';

const SectionHeader: FC<{
  kicker: string;
  title: string;
  id?: string;
}> = ({kicker, title, id}) => {
  return (
    <div className="mb-10 text-center" id={id}>
      <p className="m-0 text-sm font-semibold uppercase tracking-widest text-primary-900 dark:text-primary-300">
        {kicker}
      </p>
      <h2 className="m-0 mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;
