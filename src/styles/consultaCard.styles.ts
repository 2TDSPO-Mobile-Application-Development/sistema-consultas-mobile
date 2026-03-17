import { StyleSheet } from "react-native";

// Adicionamos o "export" aqui na frente!
export const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  statusBadge: {
    backgroundColor: "#af770f",
    alignSelf: "flex-start",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 20,
  },
  statusConfirmada: {
    backgroundColor: "#1ad620",
  },
  statusCancelada: {
    backgroundColor: "#ec1c0d",
  },
  statusTexto: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },
  secao: {
    marginBottom: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 8,
  },
  valor: {
    fontSize: 18,
    color: "#292727",
    marginBottom: 4,
  },
  info: {
    fontSize: 14,
    color: "#444141",
    marginBottom: 2,
  },
  observacoes: {
    fontSize: 14,
    color: "#555",
    fontStyle: "italic",
    marginTop: 8,
  },
  acoes: {
    marginTop: 10,
  },
  botaoContainer: {
    marginBottom: 12,
  },
  mensagem: {
    backgroundColor: "#E8F5E9",
    padding: 16,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: "#4CAF50",
  },
  mensagemCancelada: {
    backgroundColor: "#FFEBEE",
    padding: 16,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: "#F44336",
  },
  mensagemTexto: {
    fontSize: 16,
    color: "#333",
    fontWeight: "600",
    textAlign: "center",
  },
});