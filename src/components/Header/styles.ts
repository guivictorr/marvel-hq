import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.primary};
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
`;
