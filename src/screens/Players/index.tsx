import { Header } from "@components/header"
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles"
import { Highlight } from "@components/highlight"
import { ButtonIcon } from "@components/button-icon"
import { Input } from "@components/input"
import { Filter } from "@components/filter"
import { useEffect, useRef, useState } from "react"
import { Alert, FlatList, TextInput } from "react-native"
import { PlayerCard } from "@components/player-card"
import { ListEmpty } from "@components/list-empty"
import { Button } from "@components/button"
import { useRoute } from "@react-navigation/native"
import { appError } from "@utils/appError"
import { playerAddByGroup } from "@storage/players/playerAddByGroup"
import { PlayerStorageDTO } from "@storage/players/playerStorageDTO"
import { playersGetByGroupAndTeam } from "@storage/players/playersGetByGroupAndTeam"

type RouteParams = {
  groupName: string
}

export function Players() {
  const [newPlayerName, setNewPlayerName] = useState('')
  const [team, setTeam] = useState('Time a')
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([])

  const newPlayerNameInputRef = useRef<TextInput>(null)

  const route = useRoute()
  const { groupName } = route.params as RouteParams

  async function handleAddPlayer() {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert('Adicionar pessoa', 'Informe o nome da pessoa.')
    }

    const newPlayer = {
      name: newPlayerName,
      team
    }

    try {
      await playerAddByGroup(newPlayer, groupName)

      fetchPlayersByTeam()

      newPlayerNameInputRef.current?.blur()
      setNewPlayerName('')

      Alert.alert('Adicionar pessoa', 'Pessoa adicionada com sucesso.')
    } catch (error) {
      if (error instanceof appError) {
        Alert.alert('Adicionar pessoa', error.message)
      } else {
        Alert.alert('Erro', 'Erro ao adicionar pessoa ao time.')
      }
    }
  }

  async function fetchPlayersByTeam() {
    try {
      const playersByTeam = await playersGetByGroupAndTeam(groupName, team)
      setPlayers(playersByTeam)
    } catch (error) {
      Alert.alert('Erro', 'Erro ao buscar pessoas do time.')
    }
  }

  function handleRemovePlayer(index: number) {
    const newPlayers = players.filter((_, i) => i !== index)
    setPlayers(newPlayers)
  }

  useEffect(() => {
    fetchPlayersByTeam()
  }, [team])

  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title={groupName}
        subtitle="Adicione a galera e separe os times"
      />

      <Form>
        <Input
          inputRef={newPlayerNameInputRef}
          placeholder="Nome da pessoa"
          onChangeText={setNewPlayerName}
          value={newPlayerName}
          autoCorrect={false}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />

        <ButtonIcon
          onPress={handleAddPlayer}
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

      <FlatList
        data={players}
        keyExtractor={(_, index) => String(index)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <PlayerCard
            name={item.name}
            onRemove={() => handleRemovePlayer(index)}
          />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time" />
        )}
        contentContainerStyle={
          [
            { paddingBottom: 100 },
            players.length === 0 && { flex: 1 }
          ]
        }
      />

      <Button title="Remover turma" variant="destructive" />
    </Container>
  )
}