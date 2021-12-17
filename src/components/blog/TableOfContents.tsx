import React, {FunctionComponent} from 'react';

const TableOfContents: FunctionComponent<{
  list: {
    label: string;
    href: string;
  }[];
}> = ({list, ...props}) => {
  return (
    <section {...props}>
      <h2>Table of Contents</h2>
      <ul>
        {list.map(({label, href}) => {
          return (
            <li key={href} className="py-0.5">
              <a
                className="underline-on-hover underline--dark text-primary-dark text-lg font-semibold"
                aria-label={label}
                title={label}
                href={href}
                target="_self"
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default TableOfContents;
