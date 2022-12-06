import styled from "styled-components";
import Card from "../components/Card";
import Container from "../components/Container";
import { device } from "./device";

const CardContainer = styled(Container)`
  width: 100vw;
  min-height: calc(100vh - 190px);
  display: inline-flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin: 110px 0 20px 0;
`;

const CardStyled = styled(Card)`
  width: 200px;
  height: 100%;
  background: ${({ theme }) => theme.colors.cardBgc};
  border-radius: ${({ theme }) => theme.colors.borderRadius};
  & p {
    color: ${({ theme }) => theme.colors.text};
    margin-top: 20px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 5px;
  }
`;

const CardFull = styled(Card)`
  width: 300px;
  height: 100%;
  background: ${({ theme }) => theme.colors.cardBgc};
  border-radius: ${({ theme }) => theme.colors.borderRadius};
  margin: 10px;
  & p {
    margin-top: 50px;
    white-space: initial;
    text-align: justify;
    padding: 5px;
  }
  @media ${device.mobileXL} {
    width: 500px;
  }
`;

export { CardStyled, CardContainer, CardFull };
