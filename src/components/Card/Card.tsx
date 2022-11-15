import {
  BottomSection,
  DescWrapper,
  ImageWrapper,
  PlayIcon,
  Price,
  Tag,
  Wrapper,
} from "./styles";
import logo from "../../assets/logo.svg";
import play from "../../assets/play-circle.svg";
import dollar from "../../assets/currency-dollar.svg";

function Card() {
  return (
    <Wrapper>
      <ImageWrapper>
        <img src={logo} alt="logo" />
        <PlayIcon src={play} alt="play circle" />
      </ImageWrapper>
      <DescWrapper>
        <h2>Travie McCoy</h2>
        <h3>Rough Water (feat. Jason Mraz)</h3>
        <BottomSection>
          <Tag>Pop</Tag>
          <Price>
            <img src={dollar} alt="dollar" />
            <span>1.9</span>
          </Price>
        </BottomSection>
      </DescWrapper>
    </Wrapper>
  );
}

export default Card;
