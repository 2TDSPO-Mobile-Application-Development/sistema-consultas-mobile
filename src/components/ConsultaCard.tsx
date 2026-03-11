import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Consulta } from "../interfaces/consulta";

type Props = {
  consulta: Consulta;
  onConfirmar: () => void;
  onCancelar: () => void;
};

export default function ConsultaCard({
  consulta,
  onConfirmar,
  onCancelar,
}: Props) {

  function formatarValor(valor: number) {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  function formatarData(data: Date) {
    return data.toLocaleDateString("pt-BR");
  }

  return (
    <View style={styles.card}>
      <Text style={styles.status}>{consulta.status}</Text>

      <Text style={styles.titulo}>👨‍⚕️ Médico</Text>
      <Text>{consulta.medico.nome}</Text>

      <Text style={styles.titulo}>👤 Paciente</Text>
      <Text>{consulta.paciente.nome}</Text>

      <Text style={styles.titulo}>📅 Consulta</Text>
      <Text>Data: {formatarData(consulta.data)}</Text>
      <Text>Valor: {formatarValor(consulta.valor)}</Text>

      {consulta.status === "agendada" && (
        <>
          <Button title="Confirmar" onPress={onConfirmar} />
          <Button title="Cancelar" onPress={onCancelar} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
  },
  titulo: {
    fontWeight: "bold",
    marginTop: 10,
  },
  status: {
    fontWeight: "bold",
    marginBottom: 10,
  },
});