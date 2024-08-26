import { Header } from "@components/header"
import { Container, Content, Icon } from "./styles"
import { Highlight } from "@components/highlight"
import { Button } from "@components/button"
import { Input } from "@components/input"
import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import { groupCreate } from "@storage/groups/groupCreate"

export function NewGroup() {
  const [groupName, setGroupName] = useState('')

  const navigation = useNavigation()

  async function handleCreateGroup() {
    try {
      await groupCreate(groupName)

      navigation.navigate('players', { groupName })
    } catch (error) {
      throw error
    }
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title="Nova turma"
          subtitle="Crie a turma para adicionar as pessoas"
        />

        <Input 
          placeholder="Nome da turma"
          onChangeText={setGroupName} 
        />

        <Button
          title="Criar turma"
          style={{ marginTop: 16 }}
          onPress={handleCreateGroup}
        />
      </Content>
    </Container>
  )
}