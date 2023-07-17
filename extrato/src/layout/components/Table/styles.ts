import styled from 'styled-components'

export const StyledTable = styled.table`
  width: 90%;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #000;
    padding: 8px;
  }


`;

export const StyledButton = styled.button`
  margin: 5px;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color:white;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const StyledPagination = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    margin: 0 10px;
  }
`;


export const StyledFootTable = styled.td`
    width: 100%;
`;

export const StyledSaldo = styled.td`
    width: 100%;
    border: 1px solid #000;
    

`

export const StyledSaldoText = styled.div`
    display: flex;
    justify-content: space-evenly;
`