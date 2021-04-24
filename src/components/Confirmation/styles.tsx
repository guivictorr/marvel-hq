import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  z-index: 9999;
  background: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: ${({ theme }) => theme.colors.white};
    margin-top: 5px;
  }

  img {
    width: 60px;
    height: 60px;
  }
`;

export default Container;
