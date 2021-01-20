import styled from "styled-components";

export const Container = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 4vh;
  margin-left: 4vw;
`;

export const Name = styled.h1`
  font-family: "Courier New", Courier, monospace;
  font-size: 30px;
  letter-spacing: 2px;
  word-spacing: 2px;
  color: #000000;
  font-weight: 400;
  text-decoration: none;
  font-style: italic;
  font-variant: small-caps;
`;
export const Group = styled.h1`
  font-family: "Courier New", Courier, monospace;
  font-size: 30px;
  letter-spacing: 2px;
  word-spacing: 2px;
  color: blue;
  font-weight: 400;
  text-decoration: none;
  font-style: italic;
  font-variant: small-caps;
`;
export const PostScript = styled.div`
  margin-top: 5vh;
  margin-left: 8vh;
  margin-right: 9vh;
  margin-bottom: 10vh;
  font-size: 20px;
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;
