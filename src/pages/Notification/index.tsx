import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, StatusBar } from "react-native";
import { ActionModal } from "./modal";
import { styles } from "./styles";

export function Notification() {
  const [visibleModal, setVisibleModal] = useState(false);
  return (
    <View style={styles.Container}>
      <Text style={styles.Title}>Notificação</Text>
      <TouchableOpacity
        style={styles.Btn}
        onPress={() => setVisibleModal(true)}
      >
        <Text>Abrir</Text>
      </TouchableOpacity>

      <Modal
        visible={visibleModal}
        transparent={false}
        onRequestClose={() => setVisibleModal(false)}
        animationType="slide"
      >
        <ActionModal
          handleClose={() => setVisibleModal(false)}
          handleVer={() => alert("Notificação")}
          handleDelete={() => alert("Notificação Excluida")}
        />
      </Modal>
      <StatusBar />
    </View>
  );
}
