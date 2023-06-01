import styled from "styled-components";
import type { ButtonProps } from ".";
export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  width: 150px;
  height: 50px;
  border: none;
  font-size: 17px;
  font-weight: 100;
  border-radius: 50vh;
  :nth-child(3):hover {
    background-color: #fff;
  }
  ${({ bgColor }) => bgColor && `background-color: ${bgColor};`}
  color : ${({ color }) => color || "#333"};
  ${({ pointer }) => pointer && `cursor: pointer;`}
  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: inherit;
    width: 150px;
    height: 50px;
  }
`;
