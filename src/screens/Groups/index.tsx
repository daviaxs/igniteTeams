import { Header } from '@components/header'
import { Container } from './styles'
import { Highlight } from '@components/highlight'
import { GroupCard } from '@components/group-card'
import { useCallback, useState } from 'react'
import { Alert, FlatList } from 'react-native'
import { ListEmpty } from '@components/list-empty'
import { Button } from '@components/button'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { groupsGetAll } from '@storage/groups/groupsGetAll'
import { Loading } from '@components/loading'

export function Groups() {
  const [isLoading, setIsLoading] = useState(true)
  const [groups, setGroups] = useState<string[]>([])

  const navigation = useNavigation()

  function handleNewGroup() {
    navigation.navigate('newGroup')
  }

  async function fetchGroups() {
    try {
      setIsLoading(true)

      const data = await groupsGetAll()
      setGroups(data)

      setIsLoading(false)
    } catch (error) {
      Alert.alert('Erro', 'Erro ao buscar turmas.')
    }
  }

  function handleOpenGroup(group: string) {
    navigation.navigate('players', { groupName: group })
  }

  useFocusEffect(useCallback(() => {
    fetchGroups()
  }, []))

  return (
    <Container>
      <Header />

      <Highlight title='Turmas' subtitle='Jogue com sua turma' />

      {isLoading ? <Loading /> :
        <FlatList
          data={groups}
          keyExtractor={(_, index) => String(index)}
          contentContainerStyle={groups.length === 0 && { flex: 1 }}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={() => (
            <ListEmpty message='Não há turmas cadastradas.' />
          )}
          renderItem={({ item }) => (
            <GroupCard title={item} onPress={() => handleOpenGroup(item)} />
          )}
        />
      }

      <Button
        title='Criar nova turma'
        style={{ marginTop: 16 }}
        onPress={handleNewGroup}
      />
    </Container>
  );
}
