import { BsFileEarmarkText } from "react-icons/bs";
import Modal from "../components/Modal";
import { HiOutlineUsers } from "react-icons/hi2";
import { PiFilesLight } from "react-icons/pi";
import styled from "styled-components";

const Actions = () => {
  return (
    <div>
      <h1>Key actions</h1>
      <ActionDiv>
        <Modal
          text="Form"
          bgColor="#FFE6D1"
          iconColor="#FFBB82"
          icon=<BsFileEarmarkText style={{ width: "24px", height: "24px" }} />
        />
        <Modal
          text="Autocenter"
          bgColor="#E9F4FA"
          iconColor="#B9D3D3"
          icon=<HiOutlineUsers style={{ width: "24px", height: "24px" }} />
        />
        <Modal
          text="Form"
          bgColor="#FFE3E0"
          iconColor="#F5BEC8"
          icon=<PiFilesLight style={{ width: "24px", height: "24px" }} />
        />
      </ActionDiv>
    </div>
  );
};

export default Actions;

const ActionDiv = styled.div`
  display: flex;
  gap: 3rem;
`;
