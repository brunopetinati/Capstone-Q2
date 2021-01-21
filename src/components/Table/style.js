import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledTable = styled.table`
  width: 80vw;
`;
export const TableHead = styled.th`
  text-align: center;
  height: 30px;
  border-bottom: 1px solid #d9d9d9;
  border-right: 1px solid #d9d9d9;
  padding: 1%;
  color: #00273d;
  &:nth-last-child(1) {
    border-right: none;
  }
  &:nth-last-child(4) {
    text-align: left;
  }
  @media (max-width: 600px) {
    font-size: 0.8rem;
    &:nth-last-child(2) {
      width: 20vw;
    }
  }
`;
export const TableRow = styled.tr`
  height: 45px;
`;
export const TableCell = styled.td`
  padding: 1%;
  border-bottom: 1px solid #d9d9d9;
  text-align: center;
  &:nth-last-child(4) {
    text-align: left;
    width: 400px;
  }
  @media (max-width: 600px) {
    &:nth-last-child(2) {
      font-size: 0.8rem;
    }
  }
`;
export const Container = styled.div`
  width: 80vw;
  height: 350px;
  background-color: #fff;
  margin: auto;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 600px) {
    height: 80vh;
    margin-top: 0;
    height: 80vh;
  }
`;
export const Icon = styled.div`
  color: #00273d;
  &:hover {
    color: #da1b2b;
  }
  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;
export const StyledLink = styled(Link)`
  color: #00273d;
  text-decoration: none;
  &:hover {
    color: #da1b2b;
  }
`;

export const Button = styled.button`
  background-color: #da1b2b;
  color: #fff;
  border: none;
  height: 4vh;
  width: 15vw;
  border-radius: 10px;
  font-weight: 100;
  margin-top: 5% !important;
  margin: 0 auto;
  outline: none;
  cursor: pointer;
  @media (max-width: 800px) {
    width: 70vw;
    height: 6vh;
    margin-top: 3vh;
    margin: 0 auto;
    font-size: 20px;
  }
  @media (min-width: 1200px) and (max-width: 1400px) {
    width: 15vw;
    height: 6vh;
    margin-top: 1vh;
    margin: 0 auto;
    font-size: 20px;
  }
  :hover {
    background-color: #00273d;
    color: white;
    border: solid #a8dadc 2px;
    transition: 0.8s;
  }
`;
