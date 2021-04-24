import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.white};
  margin-top: 100px;
  border-radius: 8px;
  padding: 20px 35px;
  box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.01);

  div {
    align-self: center;
    width: 100%;
    height: 350px;
    background: blue;
    margin-top: 15px;
    border-radius: 8px;
  }
`;
