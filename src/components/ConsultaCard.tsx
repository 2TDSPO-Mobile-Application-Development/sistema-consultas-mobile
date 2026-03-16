import { Medico } from "../interfaces/medico";

export interface Consulta {
  id: string;
  data: Date;
  medico: Medico;  
  paciente: Paciente; 
}

export type Paciente = {
  nome: string;
  cpf: string;
};