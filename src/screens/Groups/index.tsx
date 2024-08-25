import { Header } from '@components/header';
import { Container } from './styles';
import { Highlight } from '@components/highlight';
import { GroupCard } from '@components/group-card';
import { useState } from 'react';
import { FlatList } from 'react-native';

export function Groups() {
  const [groups, setGroups] = useState<string[]>(['Galera do Ignite', 'Turma do Trabalho', 'Amigos da Faculdade', 'Família']);

  return (
    <Container>
      <Header showBackButton />

      <Highlight title='Turmas' subtitle='Jogue com sua turma' />

      <FlatList
        data={groups}
        keyExtractor={(_, index) => String(index)}
        renderItem={({ item }) => (
          <GroupCard title={item} />
        )}
      />
    </Container>
  );
}
