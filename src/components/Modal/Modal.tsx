import { InputSearch } from "../../pages/Home/styles";
import Button from "../Button/Button";
import close from "../../assets/close.svg";
import { Close, InputWrapper, Title, Wrapper } from "./styles";

function Modal({ onClose }: { onClose: any }) {
  return (
    <Wrapper>
      <Close onClick={() => onClose()}>
        <img src={close} alt="close" />
      </Close>
      <InputWrapper>
        <Title>Search</Title>
        <InputSearch>
          <input
            type="text"
            name="search"
            placeholder="Artist / Album / Title"
          />
          <Button>Search</Button>
        </InputSearch>
      </InputWrapper>
    </Wrapper>
  );
}

export default Modal;
