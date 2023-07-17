export type ExtratoDTO = {
    numeroConta: number
    dataInicio: string
    dataFim: string
    saldoTotal: number
    saldoPeriodo: number
    transferencias: TransferenciaDTO[]

}

export type TransferenciaDTO = {
    dataTransferencia: string
    valor: number
    tipo: string
    nomeOperadorTransacao?: string

}

export type EntradaDTO = {
    dataInicio?: string
    dataFim?: string
    nomeOperador?: string
}