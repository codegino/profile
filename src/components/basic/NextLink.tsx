import type {
  AnchorHTMLAttributes,
  FC,
  HTMLAttributeReferrerPolicy,
  PropsWithChildren,
} from 'react';
import Link from 'next/link';

type NextLinkProps = PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    referrerPolicy?: HTMLAttributeReferrerPolicy | undefined;
  }
>;

function NextLink({
  href,
  target,
  className,
  children,
  'aria-label': ariaLabel,
  title,
  rel,
  ...rest
}: NextLinkProps) {
  return (
    <Link
      href={href as string}
      {...rest}
      className={className}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      title={title ? title : ariaLabel}
    >
      {children}
    </Link>
  );
}

export default NextLink;
