import styled from "styled-components";

const Button = ({ children }) => {
  return <Btn>{children}</Btn>;
};

export default Button;

const Btn = styled.button`
  width: 224px;
  height: 42px;
  background: var(--color-grey-0);
  color: var(--color-black-300);
  border: 1px dotted var(--color-blue-200);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  align-self: center;
`;
