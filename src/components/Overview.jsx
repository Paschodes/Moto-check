import { TiArrowSortedUp } from "react-icons/ti";
import styled from "styled-components";
import chart from "../assets/chart.svg";

const Overview = () => {
  return (
    <Overvew>
      <h1>Overview</h1>
      <OverviewDiv>
        <Autocenter>
          <AutoCenDiv>
            <p>228</p>
            <Arrowdiv>
              <TiArrowSortedUp style={{ color: "#21BA30" }} />
              <span>+3</span>
            </Arrowdiv>
          </AutoCenDiv>
          <img src={chart} alt="chart" />
          <p>Autocentres</p>
        </Autocenter>

        <Autocenter type="white">
          <AutoCenDiv>
            <p>44</p>
          </AutoCenDiv>
          <img src={chart} alt="chart" />
          <p>Forms Created</p>
        </Autocenter>

        <Autocenter>
          <AutoCenDiv>
            <p>QWG3O32K</p>
          </AutoCenDiv>
          <img src={chart} alt="chart" />
          <p>Organization Key</p>
        </Autocenter>
      </OverviewDiv>
    </Overvew>
  );
};

export default Overview;

const Overvew = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const OverviewDiv = styled.div`
  background-color: var(--color-grey-0);
  padding: 4rem 1.5rem;
  border-radius: var(--border-radius-md);
  display: flex;
  justify-content: space-between;
  width: 760px;
  height: 158px;
  border: 1px solid var(--color-grey-100);
`;

const Autocenter = styled.div`
  width: 32%;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 1rem;
  border-right: 1px solid
    ${(props) => (props.type === "white" ? "var(--color-grey-300)" : "none")};
  border-left: 1px solid
    ${(props) => (props.type === "white" ? "var(--color-grey-300)" : "none")};
  padding: 0 3rem;

  img {
    width: 115.21px;
    height: 26.2px;
    position: absolute;
    top: 31px;
    left: 60px;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    color: var(--color-grey-400);
  }
`;

const AutoCenDiv = styled.div`
  display: flex;
  gap: 2rem;

  p {
    font-size: 24px;
    font-weight: 900;
    color: var(--color-black-100);
  }
`;

const Arrowdiv = styled.div`
  display: flex;
  align-items: center;

  span {
    color: var(--color-grey-900);
    font-size: 12px;
    font-weight: 400;
  }
`;
