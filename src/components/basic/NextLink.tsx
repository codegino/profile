import React, {FC} from 'react';
import Link, {LinkProps} from 'next/link';

type NextLinkProps = LinkProps & React.HTMLProps<HTMLButtonElement>;

const NextLink: FC<NextLinkProps> = ({
  href,
  target,
  className,
  children,
  'aria-label': ariaLabel,
  title,
  rel,
  ...rest
}) => (
  <Link href={href} {...rest}>
    <a
      href={href}
      className={className}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      title={title ? title : ariaLabel}
    >
      {children}
    </a>
  </Link>
);

export default NextLink;
