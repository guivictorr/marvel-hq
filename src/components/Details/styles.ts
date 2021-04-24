import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 9999;
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 70%;
  padding: 15px 20px;
  border-radius: 8px;
  box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.05);
  background: ${({ theme }) => theme.colors.white};
  position: relative;
  overflow-y: auto;

  @media (max-width: 1100px) {
    width: 80%;
  }

  button {
    position: absolute;
    right: 20px;
    top: 15px;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.primary};
    outline: transparent;
    border: none;
    font-weight: 700;
    cursor: pointer;
    font-size: ${({ theme }) => theme.fontSizes.large24};
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.2);
    }
  }

  img {
    border-radius: 6px;
    width: 100%;
    height: auto;
    margin: 15px 0;
  }

  ul + h2 {
    margin-top: 15px;
  }

  ul {
    list-style: none;
    font-size: ${({ theme }) => theme.fontSizes.medium16};

    li {
      color: ${({ theme }) => theme.colors.grey300};
    }
  }
`;
