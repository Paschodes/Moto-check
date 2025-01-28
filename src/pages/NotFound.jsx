import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";

const NotFound = () => {
  const navigate = useNavigate();

  const MoveBack = () => {
    navigate(-1);
  };

  return (
    <StyledPageNotFound>
      <Box>
        <h1>The page you are looking for could not be found 😢</h1>
        <Button onClick={MoveBack} size="large">
          &larr; Go back
        </Button>
      </Box>
    </StyledPageNotFound>
  );
};

export default NotFound;

const StyledPageNotFound = styled.main`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 3.2rem;
  }
`;
