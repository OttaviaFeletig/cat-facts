import styled from "styled-components";

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  // padding: 20px 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  // position: absolute;
  // bottom: 0;
  width: 100%;
  a {
    color: ${({ theme }) => theme.colors.text};
  }
`;
