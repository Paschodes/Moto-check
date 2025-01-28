import styled from "styled-components";
import avatar from "../assets/Avatar.png";
import { MdKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  return (
    <StyledHeader>
      <h1>Dashboard</h1>
      <RightHeader>
        <img src={avatar} alt="Profile img" />
        <MdKeyboardArrowDown />
      </RightHeader>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  justify-content: space-between;
  align-items: center;
  display: flex;
  color: var(--color-black-200);
  margin: 2rem;
  border: 1px solid var(--color-grey-10);
  border-radius: var(--border-radius-lg);
`;

const RightHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  img {
    width: 38px;
    height: 38px;
  }
`;
