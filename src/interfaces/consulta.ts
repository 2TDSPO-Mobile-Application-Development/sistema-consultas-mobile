import { Medico } from "./medico";
import { Paciente } from "../type/paciente";
import { StatusConsulta } from "../type/statusConsulta";
export interface Consulta {
  id: number;
  medico: Medico;
  paciente: Paciente;
  data: Date;
  valor: number;
  status: StatusConsulta;
  observacoes?: string;
}