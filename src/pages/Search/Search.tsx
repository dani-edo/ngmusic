import {
  ContentWrapper,
  Keyword,
  Label,
  LoadMore,
  Navbar,
  ResultsWrapper,
  Title,
  Wrapper,
} from "./styles";
import menu from "../../assets/menu.svg";
import ngmusic from "../../assets/ngmusic.svg";
import search from "../../assets/search.svg";
import Card from "../../components/Card/Card";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";

function Search() {
  const [showModal, setshowModal] = useState(false);

  return (
    <Wrapper>
      {showModal && <Modal onClose={() => setshowModal(false)} />}
      <Navbar>
        <button>
          <img src={menu} alt="menu" />
        </button>
        <img src={ngmusic} alt="ngmusic" />
        <button onClick={() => setshowModal(true)}>
          <img src={search} alt="search" />
        </button>
      </Navbar>
      <ContentWrapper>
        <Title>
          <Label>Search result for :</Label>
          <Keyword>Json Mraz</Keyword>
        </Title>
        <ResultsWrapper>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <LoadMore>Load More</LoadMore>
        </ResultsWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

export default Search;
