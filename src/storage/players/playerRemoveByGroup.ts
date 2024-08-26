import AsyncStorage from "@react-native-async-storage/async-storage"
import { PLAYERS_COLLECTION } from "@storage/storageConfig"
import { playersGetByGroup } from "./playersGetByGroup"

export async function PlayerRemoveByGroup(playerName: string, group: string) {
  try {
    const storage = await playersGetByGroup(group)

    const filteredPlayers = storage.filter(player => player.name !== playerName)

    const players = JSON.stringify(filteredPlayers)

    await AsyncStorage.setItem(`${PLAYERS_COLLECTION}-${group}`, players)
  } catch (error) {
    throw error
  }
}