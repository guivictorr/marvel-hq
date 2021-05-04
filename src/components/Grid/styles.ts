import styled, { css } from 'styled-components';

type GridProps = {
  columns?: number | string;
};

const Grid = styled.section<GridProps>`
  margin-top: 50px;
  display: grid;

  gap: 35px;
  width: 100%;

  ${({ columns = 'auto-fill' }) => css`
    grid-template-columns: repeat(${columns}, minmax(220px, 1fr));
  `}
`;

export default Grid;
