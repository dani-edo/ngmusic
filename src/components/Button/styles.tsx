import styled from "styled-components";

export const Wrapper = styled.button`
  height: 40px;
  margin-top: 15px;
  border-radius: 20px;
  border: none;
  font-family: ${({ theme }) => theme.fonts.roboto};
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.white};
  &.primary {
    background-image: linear-gradient(98deg, #712bda, #a45deb);
  }
  &.secondary {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
