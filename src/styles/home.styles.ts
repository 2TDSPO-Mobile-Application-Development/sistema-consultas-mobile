import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAEAEA",
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    marginBottom: 32,
    alignItems: "center",
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 16,
    color: "#3b3838",
  },
  menu: {
    gap: 16,
  },
  card: {
    padding: 24,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardPrimario: {
    backgroundColor: "#410404",
  },
  cardSecundario: {
    backgroundColor: "#0f8613",
  },
  cardTerciario: {
    backgroundColor: "#12578f",
  },
  cardQuaternario: {
    backgroundColor: "#8f5e14",
  },
  cardIcone: {
    fontSize: 48,
    marginBottom: 12,
  },
  cardTitulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  cardDescricao: {
    fontSize: 14,
    color: "#fff",
    opacity: 0.9,
  },
});
