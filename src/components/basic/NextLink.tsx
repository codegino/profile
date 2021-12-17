import type {FunctionComponent, HTMLProps} from 'react';
import Link from 'next/link';
import type {LinkProps} from 'next/link';

type NextLinkProps = LinkProps & HTMLProps<HTMLButtonElement>;

const NextLink: FunctionComponent<NextLinkProps> = ({
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
