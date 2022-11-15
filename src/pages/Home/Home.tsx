import { ImgWrapper, InputSearch, Wrapper } from "./styles";
import logo from "../../assets/logo.svg";
import Button from "../../components/Button/Button";
import { ChangeEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const onSearchChange: ChangeEventHandler<HTMLInputElement> = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchValue(event.target.value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (searchValue) navigate(`/search/${encodeURIComponent(searchValue)}`);
  };

  return (
    <Wrapper>
      <ImgWrapper>
        <img src={logo} alt="logo" />
      </ImgWrapper>
      <InputSearch onSubmit={onSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Artist / Album / Title"
          onChange={onSearchChange}
        />
        <Button variant="secondary" type="submit">
          Search
        </Button>
      </InputSearch>
    </Wrapper>
  );
}

export default Home;
