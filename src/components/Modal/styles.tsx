import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  background-color: rgba(28, 28, 45, 0.9);
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 30px;
  flex-direction: column;
`;

export const Title = styled.h2`
  margin-bottom: 31px;
  font-family: ${({ theme }) => theme.fonts.roboto};
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0.71px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Close = styled.button`
  background: unset;
  border: none;
  position: absolute;
  right: 12px;
  top: 18px;
`;
