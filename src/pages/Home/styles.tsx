import styled from "styled-components";

export const Wrapper = styled.div`
  background-image: linear-gradient(153deg, #712bda, #a45deb 100%);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 30px 26px;
  box-sizing: border-box;
`;

export const ImgWrapper = styled.div`
  flex-grow: 1;
  display: flex;
`;

export const InputSearch = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  input {
    width: 100%;
    height: 40px;
    border-radius: 20px;
    border: none;
    text-align: center;
  }
`;
