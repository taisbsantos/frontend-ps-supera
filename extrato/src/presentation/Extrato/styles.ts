import styled from 'styled-components'


export const indexMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:100%;

    @media (max-width: 1280px) {
      hegth:100vh;
    }
`

export const tableDiv = styled.div`
    padding-top:2%;
    margin-bottom:4%;
    width:85%;
    heigth:30%;
    @media (max-width: 1280px) {
      width:70%;
      margin-left:0;
    }
  
    
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  align-items: flex-end;
  width: 85%;

  @media (max-width: 1280px) {
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: start;
    
  }
`;

export const Filtro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 10px;
    margin:7.5%;
`


export const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  width:100%;

  
  @media (max-width: 1280px) {
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: start;

  }
`;

export const Label = styled.label`
  margin-bottom: 5px;
  width: 90%;
`;

export const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  height: 25px;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin-right:10%;

  @media (max-width: 1280px) {
    margin-left: 8%;
  }
`;


