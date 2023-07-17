import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import * as S from './styles'
import Table from '../../layout/components/Table';
import { ExtratoDTO, extratoService } from '../../core/usecase/Extrato';

const Extrato: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state?.data;

  const [dataInicio, setdataInicio] = useState('');
  const [dataFim, setdataFim] = useState('');
  const [nomeOperador, setNomeOperador] = useState('');
  const [extrato, setExtrato] = useState<ExtratoDTO>({
    numeroConta: data,
    dataInicio: '',
    dataFim: '',
    saldoTotal: 0,
    saldoPeriodo: 0,
    transferencias: [{
      dataTransferencia: '',
      valor: 0,
      tipo: '',
      nomeOperadorTransacao: ''
    } ]

  } as ExtratoDTO);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const dadosEntrada = {
      dataInicio: dataInicio,
      dataFim: dataFim,
      ...(nomeOperador !== '' && { nomeOperador: nomeOperador })
  
    }
    try{
      const response = await extratoService.find(data, dadosEntrada)
      setExtrato(response.data);
    }catch(e){
      console.log(e);
    }

  };

  const handledataInicioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setdataInicio(event.target.value);
  };

  const handledataFimChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setdataFim(event.target.value);
  };

  const handleNomeOperadorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNomeOperador(event.target.value);
  };

  return (
    <S.indexMain>
      <S.Form onSubmit={handleSubmit}>
        <S.FormGroup>
          <S.Filtro>
          <S.Label htmlFor="dataInicio"> Data de início </S.Label>
          <S.Input
            type="date"
            id="dataInicio"
            value={dataInicio}
            onChange={handledataInicioChange}
          />
          </S.Filtro>
          <S.Filtro>
           <S.Label htmlFor="dataFim"> Data de Fim </S.Label>
          <S.Input
            type="date"
            id="dataFim"
            value={dataFim}
            onChange={handledataFimChange}
          />
          </S.Filtro>

          <S.Filtro>
          <S.Label htmlFor="nomeOperador"> Nome do Operador transicionado </S.Label>
          <S.Input
            type="text"
            id="nomeOperador"
            value={nomeOperador}
            onChange={handleNomeOperadorChange}
          />
          </S.Filtro>

        </S.FormGroup>

        <S.SubmitButton type="submit">pesquisar</S.SubmitButton>
      </S.Form>
      <S.tableDiv>
        <Table extrato={extrato}/>
      </S.tableDiv>
    </S.indexMain>
  );
};

export default Extrato;