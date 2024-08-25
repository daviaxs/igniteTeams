import { Header } from '@components/header';
import { Container } from './styles';
import { Highlight } from '@components/highlight';
import { GroupCard } from '@components/group-card';

export function Groups() {
  return (
    <Container>
      <Header showBackButton />

      <Highlight title='Turmas' subtitle='Jogue com sua turma' />

      <GroupCard title='Turma do Ignite' />
    </Container>
  );
}
