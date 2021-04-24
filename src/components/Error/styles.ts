import styled, { css } from 'styled-components';

type ErrorProps = {
  visible?: boolean;
};

const Error = styled.p<ErrorProps>`
  margin-top: 10px;
  ${({ theme, visible }) => css`
    color: ${theme.colors.danger};
    font-size: ${theme.fontSizes.medium16};
    font-weight: 600;
    display: ${visible ? 'block' : 'none'};
  `}
`;

export default Error;
