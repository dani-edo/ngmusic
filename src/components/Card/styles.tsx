import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 12px 12px 11px 10px;
  border-radius: 10px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%);
  background-color: #fff;
  display: flex;
  &:not(:first-child) {
    margin-top: 20px;
  }
`;

export const ImageWrapper = styled.div`
  width: 100px;
  height: 100px;
  flex-shrink: 0;
  margin-right: 12px;
  border-radius: 10px;
  position: relative;
`;

export const Tumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const PlayIcon = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const DescWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  h2 {
    font-family: ${({ theme }) => theme.fonts.roboto};
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.36px;
    color: ${({ theme }) => theme.colors.primary};
  }
  h3 {
    margin-top: 5px;
    font-family: ${({ theme }) => theme.fonts.roboto};
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 0.5px;
    color: ${({ theme }) => theme.colors.primary};
    width: 125px;
  }
`;

export const BottomSection = styled.div`
  display: flex;
  margin-top: auto;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Tag = styled.div`
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.green};
  font-family: ${({ theme }) => theme.fonts.roboto};
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.36px;
  color: ${({ theme }) => theme.colors.white};
  padding: 4px 13px;
`;

export const Price = styled.span`
  display: flex;
  align-items: center;
  img {
    margin-right: 6px;
  }
  span {
    font-family: Roboto;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 0.43px;
    color: ${({ theme }) => theme.colors.yellow};
  }
`;
