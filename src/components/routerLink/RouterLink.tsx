import React, { CSSProperties, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

const RouterLink: React.FC<RouterLinkProps> = ({
  children,
  style = {},
  to,
  underlinedText = false,
}) => {
  return (
    <Link
      to={to}
      style={{
        textDecoration: underlinedText ? 'underline' : 'none',
        color: 'inherit',
        cursor: 'pointer',
        ...style,
      }}
    >
      {children}
    </Link>
  );
};

interface RouterLinkProps extends PropsWithChildren {
  to: string;
  style?: CSSProperties;
  underlinedText?: boolean;
}

export default RouterLink;
