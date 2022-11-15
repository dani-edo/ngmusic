import React, { useEffect, useState } from "react";
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
import ngmusicService from "../../services/ngmusic.service";
import menu from "../../assets/menu.svg";
import ngmusic from "../../assets/ngmusic.svg";
import search from "../../assets/search.svg";
import Card from "../../components/Card/Card";
import Modal from "../../components/Modal/Modal";
import { useNavigate, useParams } from "react-router-dom";
import { capitalFirstWord } from "../../helpers/formatter";
import { Itunes, ItunesData } from "../../types/itunes.type";

function Search() {
  const [showModal, setshowModal] = useState(false);
  const [resultData, setResultData] = useState<Itunes | undefined>(undefined);
  const [showed, setShowed] = useState<ItunesData[] | []>([]);
  const navigate = useNavigate();
  const { keyword } = useParams();
  const [page, setPage] = useState(0);
  const perPage = parseInt(process.env.REACT_APP_PER_PAGE || "5");

  useEffect(() => {
    if (keyword) searchMusic(keyword);
    setshowModal(false);
  }, [keyword]);

  useEffect(() => {
    setPage(0);
    if (resultData && resultData.results) updateShowed(true);
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [resultData]);

  const updateShowed = (isinit?: boolean) => {
    if (resultData && resultData.results)
      if (isinit)
        setShowed(
          resultData.results.slice(page * perPage, page * perPage + perPage)
        );
      else
        setShowed((old: ItunesData[]) =>
          old.concat(
            resultData.results.slice(page * perPage, page * perPage + perPage)
          )
        );
  };

  const handleLoadMore = () => {
    setPage((old) => old + 1);
    updateShowed();
  };

  const searchMusic = (value: string) => {
    ngmusicService
      .getByKeyword(value)
      .then(({ data }) => {
        setResultData(data);
      })
      .catch((e: Error) => {
        console.error(e);
      });
  };
  return (
    <Wrapper>
      {showModal && <Modal onClose={() => setshowModal(false)} />}
      <Navbar>
        <button onClick={() => navigate("/")}>
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
          <Keyword>{keyword && capitalFirstWord(keyword)}</Keyword>
        </Title>
        <ResultsWrapper>
          {showed &&
            showed.map((data: ItunesData) => (
              <Card data={data} key={`${data.trackId}${Math.random()}`} />
            ))}
          <LoadMore onClick={handleLoadMore}>Load More</LoadMore>
        </ResultsWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

export default Search;
