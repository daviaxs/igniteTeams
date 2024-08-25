import { Header } from "@components/header"
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles"
import { Highlight } from "@components/highlight"
import { ButtonIcon } from "@components/button-icon"
import { Input } from "@components/input"
import { Filter } from "@components/filter"
import { useState } from "react"
import { FlatList } from "react-native"

export function Players() {
  const [team, setTeam] = useState('Time a')
  const [players, setPlayers] = useState<string[]>(['Davi', "henrique", "matheus"])

  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title="Nome da turma"
        subtitle="Adicione a galera e separe os times"
      />

      <Form>
        <Input
          placeholder="Nome da pessoa"
          autoCorrect={false}
        />

        <ButtonIcon
          icon="add"
        />
      </Form>

      <HeaderList>
        <FlatList
          horizontal
          data={['Time a', 'Time b']}
          keyExtractor={(_, index) => String(index)}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
        />

        <NumberOfPlayers>
          {players.length}
        </NumberOfPlayers>
      </HeaderList>
    </Container>
  )
}