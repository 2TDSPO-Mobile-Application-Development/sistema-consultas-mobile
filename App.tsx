import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";

// Tipos
import { Especialidade } from "./src/type/especialidade";
import { Paciente } from "./src/type/paciente";
import { Medico } from "./src/interfaces/medico";
import { Consulta } from "./src/interfaces/consulta";

// Componente
import ConsultaCard from "./src/components/ConsultaCard";

export default function App() {

  // Especialidade
  const cardiologia: Especialidade = {
    id: 1,
    nome: "Cardiologia",
    descricao: "Cuidados com o coração",
  };

  // Médico
  const medico1: Medico = {
    id: 1,
    nome: "Dr. Roberto Silva",
    crm: "CRM12345",
    especialidade: cardiologia,
    ativo: true,
  };

  // Paciente
  const paciente1: Paciente = {
    id: 1,
    nome: "Carlos Andrade",
    cpf: "123.456.789-00",
    email: "carlos@email.com",
    telefone: "(11) 98765-4321",
  };

  // Estado da consulta
  const [consulta, setConsulta] = useState<Consulta>({
    id: 1,
    medico: medico1,
    paciente: paciente1,
    data: new Date(2026, 2, 10),
    valor: 350,
    status: "agendada",
    observacoes: "Consulta de rotina",
  });

  // Confirmar consulta
  function confirmarConsulta() {
    setConsulta({
      ...consulta,
      status: "confirmada",
    });
  }

  // Cancelar consulta
  function cancelarConsulta() {
    setConsulta({
      ...consulta,
      status: "cancelada",
    });
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        <View style={styles.header}>
          {/* Cabeçalho */}
        </View>

        <ConsultaCard
          consulta={consulta}
          onConfirmar={confirmarConsulta}
          onCancelar={cancelarConsulta}
        />

        <View style={styles.rodape}>
          {/* Rodapé */}
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4666f9",
  },

  scrollContent: {
    padding: 20,
    paddingTop: 40,
  },

  header: {
    alignItems: "center",
    marginBottom: 24,
  },

  rodape: {
    marginTop: 24,
    padding: 16,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 12,
  },
});