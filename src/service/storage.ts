import AsyncStorage from '@react-native-async-storage/async-storage';
import { Paciente } from '../interfaces/paciente'; // Verifique se este é o caminho correto no seu projeto

const KEYS = {
  ESPECIALIDADES: "@consultas:especialidades",
  MEDICOS: "@consultas:medicos",
  CONSULTAS: "@consultas:consultas",
  PACIENTE_LOGADO: "@consultas:pacienteLogado",  // NOVO
  PACIENTES: "@consultas:pacientes",             // NOVO
};
// ========== PACIENTES ==========
// Salva lista de pacientes
export async function salvarPacientes(pacientes: Paciente[]) {
  try {
    await AsyncStorage.setItem(KEYS.PACIENTES, JSON.stringify(pacientes));
  } catch (erro) {
    console.error("Erro ao salvar pacientes:", erro);
  }
}

// Busca lista de pacientes
export async function obterPacientes(): Promise<Paciente[]> {
  try {
    const dados = await AsyncStorage.getItem(KEYS.PACIENTES);
    return dados ? JSON.parse(dados) : [];
  } catch (erro) {
    console.error("Erro ao obter pacientes:", erro);
    return [];
  }
}
// Salva paciente logado
export async function salvarPacienteLogado(paciente: Paciente) {
  try {
    console.log("Salvando paciente logado:", paciente.nome, `(${paciente.cpf})`);
    await AsyncStorage.setItem(KEYS.PACIENTE_LOGADO, JSON.stringify(paciente));
    console.log("Paciente salvo no storage com sucesso");
  } catch (erro) {
    console.error("Erro ao salvar paciente logado:", erro);
  }
}

// Busca paciente logado
export async function obterPacienteLogado(): Promise<Paciente | null> {
  try {
    const dados = await AsyncStorage.getItem(KEYS.PACIENTE_LOGADO);
    const paciente = dados ? JSON.parse(dados) : null;
    
    console.log("obterPacienteLogado - Resultado:", 
      paciente ? `${paciente.nome} (${paciente.cpf})` : "nenhum"
    );
    
    return paciente;
  } catch (erro) {
    console.error("Erro ao obter paciente logado:", erro);
    return null;
  }
}
// Remove paciente logado (logout)
export async function removerPacienteLogado() {
  try {
    console.log("Antes do logout - verificando storage...");
    const antes = await AsyncStorage.getItem(KEYS.PACIENTE_LOGADO);
    console.log("Paciente antes do logout:",
      antes ? JSON.parse(antes).nome : "nenhum"
    );

    await AsyncStorage.removeItem(KEYS.PACIENTE_LOGADO);
    console.log("AsyncStorage.removeItem executado");

    const depois = await AsyncStorage.getItem(KEYS.PACIENTE_LOGADO);
    console.log("Paciente após logout:",
      depois ? JSON.parse(depois).nome : "nenhum (logout bem-sucedido)"
    );
  } catch (erro) {
    console.error("Erro ao fazer logout:", erro);
  }
}