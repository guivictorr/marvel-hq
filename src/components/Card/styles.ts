import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.05);
  padding: 14px 10px;
  transition: all 0.2s ease-in-out;
  background: ${({ theme }) => theme.colors.white};

  &:hover {
    transform: scale(1.025);
  }
`;

export const Content = styled.div`
  height: 100%;

  label {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    height: 100%;
    text-align: center;
  }

  input[type='checkbox']:checked + label {
    opacity: 0.5;
  }

  h1 {
    margin: 10px auto;
  }

  img {
    border-radius: 4px;
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  button {
    height: 32px;
    font-size: ${({ theme }) => theme.fontSizes.xsmall12};
  }
`;
