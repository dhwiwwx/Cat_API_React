import styled, { CSSProperties } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1400px;
  height: 100vh;
  background-color: black;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 4em;
  font-weight: 100;
  color: #fff;
  overflow: 2;
`;

export const Loding = styled.div`
  width: 200px;
  height: 200px;
  color: #fff;
  text-align: center;
  line-height: 200px;
  font-size: 30px;
  font-weight: 100;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 17px;
  width: 900px;
  margin: 60px 0;
`;

export const Item = styled.li`
  flex-shrink: 0;
  width: 230px;
  height: 230px;
  list-style: none;
  border: 1px solid #fff;

  &:hover {
    transform: scale(1.07);
    transition: 0.5s;
  }
`;

export const Image = styled.img<{ objectFit?: CSSProperties["objectFit"] }>`
  width: 100%;
  height: 100%;
  ${({ objectFit }) => objectFit && `object-fit: ${objectFit};`}
`;
