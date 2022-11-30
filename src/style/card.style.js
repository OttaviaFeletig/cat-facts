import styled from "styled-components";
import Card from "../components/Card";
import Container from "../components/Container";

const CardContainer = styled(Container)`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CardStyled = styled(Card)`
  width: 200px;
  background-color: ${({ theme }) => theme.colors.cardBgc};
  border: ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.colors.borderRadius};
  margin: 10px;
  & p {
    color: ${({ theme }) => theme.colors.cardTitle};
    margin-top: 20px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 5px;
  }
`;

const CardFull = styled(Card)`
  width: 500px;
  background-color: ${({ theme }) => theme.colors.cardBgc};
  border: ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.colors.borderRadius};
  margin: 10px;
  & p {
    margin-top: 20px;
    white-space: initial;
    text-align: justify;
    padding: 5px;
  }
`;

export { CardStyled, CardContainer, CardFull };
