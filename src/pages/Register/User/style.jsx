import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  justify-content: center;
  height: 80vh;
  width: 100vw;
  background-color: #a8dadc;
  @media (max-width: 1000px) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 100vw;
  }
`;

const FormContainer = styled.div`
  background-color: white;
  width: 30vw;
  height: 65vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  align-items: center;
  border-radius: 10px;

  @media (max-width: 1000px) {
    width: 90vw;
    height: 80vh;
    margin-top: 5vh;
  }
`;

const Button = styled.button`
  background-color: #da1b2b;
  color: #fff;
  border: none;
  height: 4vh;
  width: 15vw;
  border-radius: 10px;
  font-weight: 100;
  margin-left: 15%;
  margin-top: 5%;
  outline: none;
  cursor: pointer;
  @media (max-width: 800px) {
    width: 70vw;
    height: 6vh;
    margin-top: 3vh;
    margin-left: 0;
    font-size: 20px;
  }

  :hover {
    background-color: #00273d;
    color: white;
    border: solid #a8dadc 2px;
    transition: 0.8s;
  }
`;
export const Title = styled.h2`
  font-family: "Nunito", sans-serif;
  color: #1d3557;
  margin-top: 1%;
`;
export const Error = styled.div`
  color: #cc0000;
  font-size: 0.8rem;
`;

const Input = styled.input`
  height: 3vh;
  border: 1px solid #dddddd;
  padding: 5px;
  width: 20vw;
  font-size: 0.7em;
  outline: none;
  border-radius: 5px;

  :focus {
    box-shadow: 0 0 5px rgba(0, 96, 206, 1);
    border: 1px solid rgba(0, 96, 206, 1);
  }

  @media (max-width: 800px) {
    width: 70vw;
    height: 3vh;
    margin-top: 3vh;
    /* margin-left: 3vh; */
  }
`;
export { Container, FormContainer, Input, Button };
