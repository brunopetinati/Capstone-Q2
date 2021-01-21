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
  align-content: center;
  height: 80vh;
  margin: auto;
  @media (max-width: 400px) {
    height: 90vh;
  }
`;

export const Input = styled.input`
  height: 30px;
  border: 1px solid #dddddd;
  padding: 5px;
  width: 64vw;
  font-size: 0.7em;
  outline: none;
  border-radius: 5px;

  :focus {
    box-shadow: 0 0 5px rgba(0, 96, 206, 1);
    border: 1px solid rgba(0, 96, 206, 1);
  }
  @media (max-width: 800px) {
    width: 80vw;
    height: 3vh;
    margin-top: 3vh;
    margin-left: 3vh;
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
  height: 130px;
  border: 1px solid #dddddd;
  padding: 5px;
  width: 64vw;
  font-size: 0.7em;
  outline: none;
  border-radius: 5px;
  resize: none;

  :focus {
    box-shadow: 0 0 5px rgba(0, 96, 206, 1);
    border: 1px solid rgba(0, 96, 206, 1);
  }
  @media (max-width: 800px) {
    width: 70vw;
    height: 10vh;
    margin-top: 3vh;
    margin-left: 3vh;
  }
`;
export const ButtonContainer = styled.div`
  width: 65vw;
  display: flex;
  justify-content: space-around;
  margin: 1% auto;
  @media (max-width: 400px) {
    margin: auto;
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
