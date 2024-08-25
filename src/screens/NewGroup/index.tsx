import { Header } from "@components/header"
import { Container, Content, Icon } from "./styles"
import { Highlight } from "@components/highlight"
import { Button } from "@components/button"
import { Input } from "@components/input"
import { useNavigation } from "@react-navigation/native"

export function NewGroup() {
  const navigation = useNavigation()

  function handleCreateGroup() {
    navigation.navigate('players', {group: 'Nome da turma'})
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

        <Input placeholder="Nome da turma" />

        <Button
          title="Criar turma"
          style={{ marginTop: 16 }}
          onPress={handleCreateGroup}
        />
      </Content>
    </Container>
  )
}