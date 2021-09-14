import styled from "styled-components";
import { colors } from "../styles/colors";

export const Article = styled.article`
  font-size: 0.8rem;
  & img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
  }
  & span:last-child {
    color: ${colors.primary};
  }
`;

export const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 10px;
`;
