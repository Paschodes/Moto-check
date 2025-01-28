import styled from "styled-components";
import MainNav from "./MainNav";
import logo from "../assets/logo.svg";

const Sidebar = () => {
  return (
    <StyledSidebar>
      <StyledLogo>
        <Img src={logo} alt="Logo" />
      </StyledLogo>
      <MainNav />
    </StyledSidebar>
  );
};

export default Sidebar;

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  margin: 2rem;
  border: 1px solid var(--color-grey-10);
  border-radius: var(--border-radius-lg);
`;

const StyledLogo = styled.div`
  /* text-align: center; */
  border-bottom: 1px solid var(--color-grey-10);
  /* padding: 1rem; */
  padding-bottom: 1rem;
`;

const Img = styled.img`
  height: 33px;
  width: 151.94px;
`;
