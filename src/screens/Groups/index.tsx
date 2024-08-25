import { Header } from '@components/header';
import { Container } from './styles';
import { Highlight } from '@components/highlight';

export function Groups() {
  return (
    <Container>
      <Header showBackButton />

      <Highlight title='Turmas' subtitle='Jogue com sua turma' />
    </Container>
  );
}
