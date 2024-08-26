import AsyncStorage from "@react-native-async-storage/async-storage"
import { GROUP_COLLECTION } from "@storage/storageConfig"
import { groupsGetAll } from "./groupsGetAll"
import { appError } from "@utils/appError"

export async function groupCreate(groupName: string) {
  try {
    const storedGroups = await groupsGetAll()

    const groupAlreadyExists = storedGroups.includes(groupName)

    if (groupAlreadyExists) {
      throw new appError('Já existe um grupo cadastrado com esse nome.')
    }

    const storage = JSON.stringify([...storedGroups, groupName])
    await AsyncStorage.setItem(GROUP_COLLECTION, storage)
    
  } catch (error) {
    throw error
  }
}