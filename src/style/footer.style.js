import styled from "styled-components";

const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  width: 100%;
  a {
    color: ${({ theme }) => theme.colors.text};
  }
`;
export { Footer };
