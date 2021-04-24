import styled from 'styled-components';

const Container = styled.ul`
  margin: 50px 0;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  list-style: none;

  span {
    align-self: center;
    font-size: ${({ theme }) => theme.fontSizes.large24};
    font-weight: 700;
    margin-left: 40px;
  }

  li {
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    overflow: hidden;
    transition: all 0.4s ease-in-out;

    &:hover {
      transform: translateY(-10px);
    }

    & + li {
      margin-left: 20px;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export default Container;
