import { memo } from 'react';
import LinkElement from '../LinkElement';
import * as H from './styles';

type HeaderProps = {
  btnVisible: boolean;
  btnRoute: string;
  btnText: string;
};

const Header = ({ btnRoute, btnText, btnVisible }: HeaderProps) => {
  return (
    <H.Container>
      <H.Content>
        <img src="/logo.svg" alt="Marvel" />
        {btnVisible && (
          <LinkElement href={btnRoute}>
            <p>{btnText}</p>
          </LinkElement>
        )}
      </H.Content>
    </H.Container>
  );
};

export default memo(Header);
