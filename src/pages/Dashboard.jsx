import styled from "styled-components";
import Actions from "../components/Actions";
import Overview from "../components/Overview";
import CreateTable from "../components/CreateTable";
import Button from "../components/Button";

const Dashboard = () => {
  return (
    <DashDiv>
      <Overview />
      <Actions />
      <BtnDiv>
        <CreateTable />
        <hr />
        <Button>View more activity</Button>
      </BtnDiv>
    </DashDiv>
  );
};

export default Dashboard;

const DashDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

const BtnDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  hr {
    color: var(--color-grey-10);
  }
`;
