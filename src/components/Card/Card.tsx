import {
  BottomSection,
  DescWrapper,
  ImageWrapper,
  PlayIcon,
  Price,
  Tag,
  Tumbnail,
  Wrapper,
} from "./styles";
// import logo from "../../assets/logo.svg";
import play from "../../assets/play-circle.svg";
import dollar from "../../assets/currency-dollar.svg";

function Card({ data }: { data: any }) {
  return (
    <Wrapper>
      <ImageWrapper>
        <Tumbnail src={data.artworkUrl60} alt="tumbnail" />
        <PlayIcon src={play} alt="play circle" />
      </ImageWrapper>
      <DescWrapper>
        <h2>{data.artistName}</h2>
        <h3>{data.trackCensoredName}</h3>
        <BottomSection>
          <Tag>{data.primaryGenreName}</Tag>
          <Price>
            <img src={dollar} alt="dollar" />
            <span>{data.trackPrice}</span>
          </Price>
        </BottomSection>
      </DescWrapper>
    </Wrapper>
  );
}

export default Card;
