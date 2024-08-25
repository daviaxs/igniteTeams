import { Header } from '@components/header'
import { Container } from './styles'
import { Highlight } from '@components/highlight'
import { GroupCard } from '@components/group-card'
import { useState } from 'react'
import { FlatList } from 'react-native'
import { ListEmpty } from '@components/list-empty'
import { Button } from '@components/button'

export function Groups() {
  const [groups, setGroups] = useState<string[]>([])

  return (
    <Container>
      <Header />

      <Highlight title='Turmas' subtitle='Jogue com sua turma' />

      <FlatList
        data={groups}
        keyExtractor={(_, index) => String(index)}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={() => (
          <ListEmpty message='Não há turmas cadastradas.' />
        )}
        renderItem={({ item }) => (
          <GroupCard title={item} />
        )}
      />

      <Button title='Criar nova turma' style={{ marginTop: 16 }} />
    </Container>
  );
}
