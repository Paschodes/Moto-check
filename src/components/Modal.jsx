import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import styled from "styled-components";

const Modal = ({ icon, text, bgColor, iconColor }) => {
  return (
    <ModalDiv bgColor={bgColor}>
      <CreateDiv>
        <ImgDiv iconColor={iconColor}>{icon}</ImgDiv>
        <NewDiv>
          <span>Create new</span>
          <p>{text}</p>
        </NewDiv>
      </CreateDiv>
      <HiOutlineArrowNarrowRight />
    </ModalDiv>
  );
};

export default Modal;

const ModalDiv = styled.div`
  width: 345px;
  height: 90px;
  display: flex;
  justify-content: space-between;
  background-color: ${({ bgColor }) => bgColor || ""};
  padding: 2rem;
  align-items: flex-end;
  border-radius: var(--border-radius-lg);
`;

const CreateDiv = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const ImgDiv = styled.div`
  width: 45px;
  height: 52px;
  border-radius: 4px;
  background-color: ${({ iconColor }) => iconColor || ""};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NewDiv = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 12px;
    font-weight: 400;
    color: var(--color-black-100);
  }

  p {
    font-size: 18px;
    font-weight: 800;
    color: var(--color-black-100);
  }
`;
