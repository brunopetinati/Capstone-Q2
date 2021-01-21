import styled from "styled-components";

export const Container = styled.div`
  width: 70vw;
  background-color: #fff;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  margin: 3% auto;
  padding: 2%;
  @media (max-width: 600px) {
    margin: 5% auto;
    width: 80vw;
  }
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 60vw;
  justify-content: space-around;
`;
export const Title = styled.h1`
  color: #1d3557;
  @media (max-width: 600px) {
    margin: 5% auto;
  }
`;
export const Date = styled.div`
  color: #707070;
  font-size: 1.2rem;
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;
export const Subtitle = styled.div`
  color: #1d3557;
  font-weight: 900;
  font-size: 1.2rem;
  width: 60vw;
  margin: 5% auto;
`;
export const Description = styled.div`
  color: #707070;
  width: 60vw;
  margin: auto;
`;
export const StyledLink = styled.a`
  display: flex;
  text-decoration: none;
  color: #707070;
  width: 60vw;
  margin: 0 auto;
  @media (max-width: 600px) {
    margin: 0 auto;
  }
`;
export const ListContainer = styled.div``;

export const List = styled.ul`
  list-style: none;
  width: 60vw;
  margin: 5% auto;
`;
export const ListItem = styled.li`
  color: #707070;
`;
