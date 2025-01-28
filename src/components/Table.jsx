import React from "react";
import styled from "styled-components";
import Avatar from "react-avatar";

const Table = ({ columns, data }) => {
  return (
    <TableContainer>
      <StyledTable>
        {/* Table Header */}
        <TableHead>
          <tr>
            {columns.map((column, index) => (
              <TableHeaderCell key={index}>{column}</TableHeaderCell>
            ))}
          </tr>
        </TableHead>

        {/* Table Body */}
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>
                <StyledAvatar
                  name={row.fullName}
                  size="40"
                  round={true}
                  textSizeRatio={2}
                />
                <FullName>{row.fullName}</FullName>
              </TableCell>
              <TableCell>
                <EventText>{row.event}</EventText>
              </TableCell>
              <TableCell>
                <DateText>{row.dateTime}</DateText>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
};

export default Table;

const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  margin: 1rem 0;
  border-radius: var(--border-radius-md);
  border: 1px solid var(--color-grey-100);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 2rem 1rem;
  background: var(--color-grey-0);
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: var(--color-grey-0);
`;

const TableHead = styled.thead`
  background-color: var(--color-grey-0);
`;

const TableHeaderCell = styled.th`
  padding: 1.5rem;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  color: var(--color-black-100);
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: var(--color-grey-0);
  }

  &:hover {
    background-color: var(--color-grey-50);
  }
`;

const TableCell = styled.td`
  padding: 1.5rem;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

const StyledAvatar = styled(Avatar)`
  border-radius: 50%;
`;

const FullName = styled.span`
  font-weight: 600;
  font-size: 14px;
  color: var(--color-grey-500);
`;

const EventText = styled.span`
  color: var(--color-blue-200);
  font-size: 14px;
  font-weight: 400;
`;

const DateText = styled.span`
  color: var(--color-grey-500);
  font-size: 14px;
  font-weight: 400;
`;
