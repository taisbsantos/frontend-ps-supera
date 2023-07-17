import React, { useState, useEffect } from 'react';
import * as S from './styles';
import { ExtratoDTO, TransferenciaDTO } from '../../../core/usecase/Extrato';

const Table = (props: { extrato: ExtratoDTO }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const [displayedData, setDisplayedData] = useState<TransferenciaDTO[]>();

  const itemsPerPage = 4;
  const totalPages = Math.ceil(props.extrato.transferencias.length / itemsPerPage);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedItems = props.extrato.transferencias.slice(startIndex, endIndex);
    setDisplayedData(displayedItems);
  }, [currentPage, props.extrato.transferencias]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <S.StyledButton
          key={i}
          onClick={() => handlePageChange(i)}
          disabled={currentPage === i}
        >
          {i}
        </S.StyledButton>
      );
    }
    return pageNumbers;
  };

  return (
    <div>
      <S.StyledTable>
        <thead>
          <tr>
            <S.StyledSaldo colSpan={6}>
              <S.StyledSaldoText>
                <span> Saldo Total: R${props.extrato.saldoTotal}  </span>
                <span> Saldo por período: R${props.extrato.saldoPeriodo}  </span>
                
              </S.StyledSaldoText>
            </S.StyledSaldo>
          </tr>
          <tr>
            <th>dados</th>
            <th>valencia</th>
            <th>Tipo</th>
            <th>Nome do operador transicionado</th>
          </tr>
        </thead>
        <tbody>
          {(displayedData != undefined) ? displayedData.map((row, index) => (

            <tr key={index}>
              <td>{row.dataTransferencia}</td>
              <td>{row.valor}</td>
              <td>{row.tipo}</td>
              <td>{row.nomeOperadorTransacao}</td>
            </tr>

          )) : ' '}
        </tbody>

        <tfoot>
          <tr >
            <S.StyledFootTable colSpan={4}>
              <S.StyledPagination>
                <S.StyledButton onClick={() => handlePageChange(1)} disabled={currentPage === 1}>
                  {'<<'}
                </S.StyledButton>
                <S.StyledButton onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                  {'<'}
                </S.StyledButton>
                {renderPageNumbers()}
                <S.StyledButton onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                  {'>'}
                </S.StyledButton>
                <S.StyledButton onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages}>
                  {'>>'}
                </S.StyledButton>
              </S.StyledPagination>
            </S.StyledFootTable>
          </tr>
        </tfoot>
      </S.StyledTable>

    </div>
  );
};

export default Table;
function setDisplayedData(displayedItems: import("../../../core/usecase/Extrato").TransferenciaDTO[]) {
  throw new Error('Function not implemented.');
}

