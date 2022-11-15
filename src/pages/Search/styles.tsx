import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
`;

export const Navbar = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 15px;
  justify-content: space-between;
  display: flex;
  &::after {
    content: "";
    display: block;
    height: 280px;
    width: 1000px;
    background-image: linear-gradient(153deg, #712bda, #a45deb 100%);
    position: absolute;
    bottom: -6px;
    z-index: -1;
    left: 50%;
    border-radius: 50%;
    transform: translateX(-50%);
    box-shadow: 0 0 6px 0 rgb(148 77 230 / 75%);
  }
  button {
    background: none;
    border: none;
  }
`;

export const ContentWrapper = styled.div`
  padding: 90px 15px 15px;
  background-color: #f8fafc;
  min-height: 100vh;
`;

export const Title = styled.div`
  text-align: center;
`;

export const Label = styled.span`
  font-family: ${({ theme }) => theme.fonts.roboto};
  font-size: 14px;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Keyword = styled.span`
  margin-left: 10px;
  font-family: ${({ theme }) => theme.fonts.roboto};
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0.64px;
  color: ${({ theme }) => theme.colors.purple};
`;

export const ResultsWrapper = styled.div`
  margin-top: 38px;
  height: calc(100vh - 147px);
  overflow: scroll;
`;

export const LoadMore = styled.button`
  margin: 20px auto 0;
  padding: 10px 29px;
  border-radius: 17px;
  background-color: #e2e8f0;
  border: none;
  display: flex;
  font-family: ${({ theme }) => theme.fonts.roboto};
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.43px;
  color: #64748b;
`;
