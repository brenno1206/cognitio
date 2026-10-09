import {
  Title,
  Section,
  Subsection,
  Paragraph,
  List,
} from '@/components/Content';

import { navData } from '@/types/navigation';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Title>Cognitio</Title>
      <Paragraph>
        Desenvolvi este site para consultar minhas anotações em qualquer lugar
        com internet (e eu queria uma desculpa para usar React).
      </Paragraph>
      <Section id="conteudos">Conteúdos Disponíveis</Section>
      <List>
        {navData.map((it) => (
          <li key={it.url}>
            <Link href={it.url}>{it.label}</Link>
          </li>
        ))}
      </List>
    </div>
  );
}
