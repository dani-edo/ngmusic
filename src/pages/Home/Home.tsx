import { ImgWrapper, InputSearch, Wrapper } from "./styles";
import logo from "../../assets/logo.svg";
import Button from "../../components/Button/Button";

function Home() {
  return (
    <Wrapper>
      <ImgWrapper>
        <img src={logo} alt="logo" />
      </ImgWrapper>
      <InputSearch>
        <input type="text" name="search" placeholder="Artist / Album / Title" />
        <Button>Search</Button>
      </InputSearch>
    </Wrapper>
  );
}

export default Home;
