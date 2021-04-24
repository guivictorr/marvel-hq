import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
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

  .mapboxgl-map {
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.grey200};
    margin-top: 15px;
  }
`;
