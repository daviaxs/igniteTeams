import AsyncStorage from "@react-native-async-storage/async-storage";
import { PlayerStorageDTO } from "./playerStorageDTO";
import { PLAYERS_COLLECTION } from "@storage/storageConfig";
import { playersGetByGroup } from "./playersGetByGroup";
import { appError } from "@utils/appError";

export async function playerAddByGRoup(newPlayer: PlayerStorageDTO, group: string) {
  try {
    const storedPlayers = await playersGetByGroup(group)

    const playerAlreadyExists = storedPlayers.filter(player => player.name === newPlayer.name)

    if (playerAlreadyExists.length > 0) {
      throw new appError('Já existe uma pessoa cadastrada em um time com esse nome.')
    }

    const storage = JSON.stringify([...storedPlayers, newPlayer])

    await AsyncStorage.setItem(`${PLAYERS_COLLECTION}-${group}`, storage)
  } catch (error) {
    throw error
  }
}