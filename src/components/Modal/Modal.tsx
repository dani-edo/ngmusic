import Button from "../Button/Button";
import close from "../../assets/close.svg";
import { Close, InputSearch, InputWrapper, Title, Wrapper } from "./styles";
import { useNavigate } from "react-router-dom";
import { ChangeEventHandler, useState } from "react";

function Modal({ onClose }: { onClose: any }) {
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
      <Close onClick={() => onClose()}>
        <img src={close} alt="close" />
      </Close>
      <InputWrapper>
        <Title>Search</Title>
        <InputSearch onSubmit={onSubmit}>
          <input
            type="text"
            name="search"
            placeholder="Artist / Album / Title"
            onChange={onSearchChange}
          />
          <Button type="submit">Search</Button>
        </InputSearch>
      </InputWrapper>
    </Wrapper>
  );
}

export default Modal;
