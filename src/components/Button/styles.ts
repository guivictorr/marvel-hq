import styled, { css } from 'styled-components';

type ButtonStyleProps = {
  outlined?: boolean;
};

const Container = styled.button<ButtonStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  outline: transparent;
  border: none;
  border-radius: 8px;
  padding: 18px 26px;
  cursor: pointer;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.medium16};
  transition: all 0.2s ease-in-out;

  &:hover {
    filter: brightness(0.8);
  }

  ${({ outlined, theme }) =>
    outlined
      ? css`
          background: transparent;
          border: 1px solid ${theme.colors.grey300};
          color: ${theme.colors.grey300};
        `
      : css`
          background: ${theme.colors.primary};
          color: ${theme.colors.white};
        `}
`;

export default Container;
