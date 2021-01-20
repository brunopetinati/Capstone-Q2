import styled from "styled-components";

export const Container = styled.div`
  background-color: #b8d3ff;
  color: #1d3557;
  height: 100vh;
  display: flex;
  align-items: center;
`;
export const Form = styled.form`
  background-color: #fff;
  padding: 2%;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: space-around;
  height: 80vh;
  margin: auto;
  @media (max-width: 400px) {
    height: 90vh;
  }
`;

export const Input = styled.input`
  border: 1px solid #707070;
  height: 35px;
  width: 50vw;
  @media (max-width: 400px) {
    width: 75vw;
    margin: auto;
    height: 25px;
    margin-bottom: 2%;
  }
`;
export const Date = styled(Input)`
  width: 120px;
  @media (max-width: 400px) {
    width: 75vw;
  }
`;

export const MainInfo = styled.div`
  display: flex;
  width: 65vw;
  justify-content: space-between;
  @media (max-width: 400px) {
    flex-direction: column;
  }
`;
export const TextArea = styled.textarea`
  border: 1px solid #707070;
  width: 65vw;
  height: 100px;
  resize: none;
  @media (max-width: 400px) {
    width: 75vw;
    height: 80px;
  }
`;
export const ButtonContainer = styled.div`
  width: 65vw;
  display: flex;
  justify-content: space-around;
  @media (max-width: 400px) {
    margin: auto;
  }
`;

export const Button = styled.button`
  width: 180px;
  height: 35px;
  font-size: 1.3rem;
  background-color: #c4c4c4;
  border: 1px solid #707070;
  @media (max-width: 400px) {
    width: 100px;
    font-size: 1rem;
  }
`;
export const Title = styled.h1`
  font-family: "Nunito", sans-serif;
  color: #1d3557;
`;
export const Error = styled.div`
  color: #cc0000;
  font-size: 0.8rem;
`;
export const List = styled.ul`
  list-style: none;
  width: 65vw;
  height: 100px;
  overflow: scroll;
`;
