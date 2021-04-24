import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';

type MyLinkProps = LinkProps & {
  children: ReactNode;
};

const LinkElement = ({ children, ...rest }: MyLinkProps) => {
  return (
    <Link {...rest}>
      <a>{children}</a>
    </Link>
  );
};

export default LinkElement;
