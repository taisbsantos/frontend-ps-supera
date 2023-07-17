import api from '../../services/api'

import { AxiosInstance, AxiosResponse } from 'axios'
import {
    ExtratoDTO,
    EntradaDTO

} from './models'

class ExtratoService {
  private readonly httpClient: AxiosInstance

  constructor(httpClient: AxiosInstance) {
    this.httpClient = httpClient
  }

  async find(numeroConta: number, entradaDTO: EntradaDTO): Promise<AxiosResponse<ExtratoDTO>> {
    return await this.httpClient.get<ExtratoDTO>(`api/contas/extrato/${numeroConta}`, {
      params: {
        dataInicio: entradaDTO.dataInicio,
        dataFim: entradaDTO.dataFim,
        nomeOperador: entradaDTO.nomeOperador
      }
    })
  }

}

export const extratoService = new ExtratoService(api)