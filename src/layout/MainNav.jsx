import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { HiOutlineCog6Tooth, HiOutlineHome } from "react-icons/hi2";
import { CiShop } from "react-icons/ci";
import {
  LuChartNoAxesColumn,
  LuNotebookPen,
  LuUsersRound,
} from "react-icons/lu";
import { TbFolderOpen } from "react-icons/tb";
import { VscSend } from "react-icons/vsc";

const MainNav = () => {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/dashboard">
            <HiOutlineHome />
            <span>Dashboard</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/bookings">
            <CiShop />
            <span>Autocenters</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/cabins">
            <LuNotebookPen />
            <span>Forms</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/cabins">
            <TbFolderOpen />
            <span>Resources</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/cabins">
            <VscSend />
            <span>Dispatch</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/users">
            <LuUsersRound />
            <span>Groups</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/cabins">
            <LuChartNoAxesColumn />
            <span>Report</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/settings">
            <HiOutlineCog6Tooth />
            <span>Finance sheet</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/settings">
            <HiOutlineCog6Tooth />
            <span>Settings</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
};

export default MainNav;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 14px;
    font-weight: 400;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-blue-200);
    background-color: rgba(var(--color-blue-200-rgb), 0.1);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-600);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-blue-200);
  }
`;
