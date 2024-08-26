import AsyncStorage from "@react-native-async-storage/async-storage"
import { groupsGetAll } from "./groupsGetAll"
import { GROUPS_COLLECTION, PLAYERS_COLLECTION } from "@storage/storageConfig"

export async function groupDeleteByName(groupDeleted: string) {
  try {
    const storedGroups = await groupsGetAll()

    const groups = storedGroups.filter(group => group !== groupDeleted)

    await AsyncStorage.setItem(GROUPS_COLLECTION, JSON.stringify(groups))
    await AsyncStorage.removeItem(`${PLAYERS_COLLECTION}-${groupDeleted}`)
    
  } catch (error) {
    throw error
  }
}