import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background: #F23558;
  
  width: 100%;
  height: 100%;;
`;

export const Text = styled(Link)`
  text-align: center;
  margin-top: 1.5rem;
  color: #fff;
  font-size: 20px;
  text-decoration: underline;
  cursor: pointer;
`;
