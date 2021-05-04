import styled, { css } from 'styled-components';

export const Container = styled.header`
  display: flex;
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.primary};
  position: fixed;
  top: 0;
  z-index: 99;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 80%;
  width: 100%;
  margin: 0 auto;

  img {
    width: 75px;
    height: 30px;
  }

  a {
    display: flex;
    place-items: center;
    place-content: center;
    transform: skew(-20deg);
    height: 100%;
    width: 15rem;
    overflow: hidden;
    position: relative;

    p {
      transition: all 0.4s ease-in-out;
    }

    &:before {
      transition: all 0.4s ease-in-out;

      content: 'Agora!';
      position: absolute;
      width: 100%;
      text-align: center;
      left: 100%;
      color: red;
    }

    &:hover {
      p {
        transform: translateX(-150%);
        opacity: 0;
      }

      &:before {
        left: 0;
        opacity: 1;
      }
    }

    ${({ theme }) => css`
      background: ${theme.colors.white};
      color: ${theme.colors.primary};
      font-size: ${theme.fontSizes.medium16};
    `}
  }
`;
