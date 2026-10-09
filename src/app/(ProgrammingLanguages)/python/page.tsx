import type { Metadata } from 'next';
import {
  Title,
  Section,
  Subsection,
  Paragraph,
  List,
} from '@/components/Content';
import { Summary, SummaryItem } from '@/components/Summary';
import { CodeArea } from '@/components/CodeArea';

export const metadata: Metadata = {
  title: 'Introdução ao Python',
  description:
    'Conheça a história, os usos, as ferramentas e as convenções da linguagem Python.',
};

export default function PythonPage() {
  const summaryItems: SummaryItem[] = [
    { id: 'introducao', label: '1. Introdução', level: 'section' },
    { id: 'historia', label: '2. História e criação', level: 'section' },
    {
      id: 'importancia',
      label: '3. Aplicações',
      level: 'section',
    },
    {
      id: 'ambiente',
      label: '4. Ambiente de desenvolvimento',
      level: 'section',
    },
    {
      id: 'execucao',
      label: '5. Execução',
      level: 'section',
    },
    { id: 'normas', label: '6. PEPs, convenções e padrões', level: 'section' },
  ];

  const setupExample = `# Windows
py -m venv .venv
.venv\\Scripts\\activate
python -m pip install requests

# macOS e Linux
python3 -m venv .venv
source .venv/bin/activate
python -m pip install requests`;

  const runExample = `# Windows
py programa.py

# macOS e Linux
python3 programa.py`;

  const packageExample = `# Em cada sistema operacional, instale o PyInstaller
python -m pip install pyinstaller

# Gere um executável a partir do programa principal
python -m PyInstaller --onefile programa.py`;

  return (
    <div className="max-w-4xl mx-auto">
      <Title imageUrl="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg">
        Introdução ao Python
      </Title>

      <Summary items={summaryItems} />

      <Section id="introducao">1. Introdução</Section>
      <Paragraph>
        Python é uma linguagem de programação de alto nível, conhecida por sua
        sintaxe legível e por atender a diferentes tipos de projeto. Ela pode
        ser utilizada para escrever programas pequenos e também aplicações
        maiores, com numerosas bibliotecas e frameworks.
      </Paragraph>
      <Paragraph>
        Python é uma linguagem de propósito geral, pode ser usada para
        automatizar tarefas, criar serviços web, analisar dados, desenvolver
        ferramentas e explorar aplicações de inteligência artificial. Esta
        página apresenta o contexto e as ferramentas iniciais.
      </Paragraph>
      <Paragraph>
        Python é uma linguagem interpretada, o código-fonte é executado com um
        programa chamado interpretador, sem produzir manualmente um executável
        nativo antes de cada execução. O interpretador lê o programa e coordena
        sua execução.
      </Paragraph>
      <Paragraph>
        Na implementação mais utilizada da linguagem Python, o CPython,
        código-fonte compilado em bytecode, é uma representação intermediária
        das isntruções do programa. Esse bytecode é executado pela máquina
        virtual do CPython, responsável por interpretar e realizar as operações
        correspondentes. Embora python seja classificada como uma linguagem
        interpretada, isso não significa que seu código-fonte seja executado
        diretamente, linha por linha, sem uma etapa de compilação. O CPython
        realiza essa compilação internaamente e pode armazenar butecode me
        arquivos de cache (.pyc) para reduzir o trabalho de compilação em
        execuções podteriores. Entretando, esse processo não produz, por si só
        um executável nativo do SO, pois o bytecode depende de um ambiente de
        execução compatível.
      </Paragraph>

      <Section id="historia">2. História e criação</Section>
      <Paragraph>
        Python foi criada por Guido van Rossum no início da década de 1990,
        enquanto trabalhava no centro de pesquisa CWI, nos Países Baixos. A
        primeira versão pública foi lançada em 1991. A linguagem foi concebida
        como sucessora de ABC e recebeu esse nome em referência ao grupo de
        comédia britânico Monty Python.
      </Paragraph>
      <Paragraph>
        O projeto evoluiu com contribuições de uma comunidade internacional. As
        decisões sobre novas funcionalidades, documentação e práticas da
        linguagem são discutidas publicamente, em vez de depender apenas de uma
        única pessoa.
      </Paragraph>

      <Section id="importancia">3. Aplicações</Section>
      <Paragraph>
        Python é importante porque combina uma curva inicial de aprendizado
        acessível com um ecossistema amplo. Sua sintaxe facilita a leitura do
        código, e suas bibliotecas permitem resolver problemas sem implementar
        tudo do zero. Isso a torna útil tanto para aprender programação quanto
        para construir ferramentas usadas em produção.
      </Paragraph>
      <Paragraph>Entre as aplicações comuns estão:</Paragraph>
      <List>
        <li>Automação de tarefas e processamento de arquivos.</li>
        <li>
          Desenvolvimento de websites, aplicativos desktop, APIs e serviços de
          back-end.
        </li>
        <li>
          Análise e manipulação de dados, computação científica e visualização.
        </li>
        <li>Machine learning e inteligência artificial.</li>
        <li>Testes de software, administração de sistemas e prototipagem.</li>
      </List>
      <Paragraph>
        Python costuma aparecer entre as linguagens mais usadas em pesquisas e
        levantamentos da indústria. Sua presença em áreas como ciência de dados
        e automação ajuda a explicar essa popularidade. Rankings variam conforme
        a metodologia, mas a variedade de bibliotecas e a comunidade ativa são
        fatores importantes para sua adoção.
      </Paragraph>

      <Section id="ambiente">4. Ambiente de desenvolvimento</Section>

      <Subsection id="venv">4.1. Ambientes virtuais com venv</Subsection>
      <Paragraph>
        Um ambiente virtual é uma instalação isolada de Python associada a um
        projeto. Ele mantém as bibliotecas desse projeto separadas das
        bibliotecas de outras aplicaçÕes, ajudando a evitar conflitos de
        versões. O módulo <code>venv</code> já acompanha as instalações do
        Python.
      </Paragraph>
      <Paragraph>
        É comum criar o ambiente em uma pasta chamada <code>.venv</code>. Em
        seguida, ative-o e instale nele as dependências do projeto:
      </Paragraph>
      <CodeArea code={setupExample} language="bash" />
      <Paragraph>
        No exemplo, <code>pip</code> instala o pacote <code>requests</code> no
        ambiente ativo. Para registrar dependências de forma reproduzível, um
        projeto pode manter uma lista de pacotes, por exemplo, em
        <code> requirements.txt</code>. A pasta <code>.venv</code>
        não é incluída no controle de versão, ela pode ser recriada a partir das
        instruções do projeto.
      </Paragraph>

      <Subsection id="pip">4.2. Pacotes e pip</Subsection>
      <Paragraph>
        O <code>pip</code> é a ferramenta responsável por instalar e administrar
        pacotes Python publicados em repositórios como o PyPI. Um pacote fornece
        funcionalidades que não fazem parte da biblioteca padrão da linguagem.
      </Paragraph>
      <Paragraph>
        Usar <code>python -m pip</code> garante que a instalação seja feita pelo
        mesmo interpretador Python que será usado no projeto. Para adicionar
        bibliotecas externas, é necessário ativar primeiro o ambiente virtual
        correspondente, para não gerar conflito com os programs python padrões
        do sistema.
      </Paragraph>

      <Section id="execucao">5. Execução do código</Section>

      <Paragraph>
        Para executar um programa, é necessário instalar uma versão adequada do
        Python e informar ao interpretador o arquivo <code>.py</code>. O comando
        pode variar conforme a instalação e a configuração do sistema:
      </Paragraph>
      <CodeArea code={runExample} language="bash" />
      <Paragraph>
        No Windows, o inicializador <code>py</code> costuma estar disponível. No
        macOS e em muitas distribuições Linux, usa-se <code>python3</code> ou
        pode-se apenas criar o <i>alias</i> <code>py</code>.
      </Paragraph>

      <Paragraph>Também é possível gerar um executável da linguagem:</Paragraph>

      <CodeArea code={packageExample} language="bash" />
      <Paragraph>
        O empacotamento deve ser feito para cada sistema operacional de destino.
        O comando acima mostra a ideia geral, os detalhes de instalação e
        distribuição variam por plataforma. Isso não transforma automaticamente
        o código em um binário nativo independente de sistema.
      </Paragraph>

      <Section id="normas">6. PEPs, convenções e padrões</Section>
      <Paragraph>
        As normas da linguagem Python são definida formalmente por propostas e
        decisões técnicas documentadas principalmente em PEPs (
        <em>Python Enhancement Proposals</em>). Uma PEP pode descrever uma
        funcionalidade, registrar uma convenção ou explicar um processo; seu
        status indica se a proposta foi aceita, está em discussão ou tem caráter
        informativo.
      </Paragraph>
      <Paragraph>Algumas referências úteis para começar são:</Paragraph>
      <List>
        <li>
          <strong>PEP 8:</strong> recomendações de estilo para tornar o código
          mais consistente e legível.
        </li>
        <li>
          <strong>PEP 20:</strong> princípios conhecidos como “Zen of Python”,
          que resumem ideias de clareza e simplicidade.
        </li>
        <li>
          <strong>PEP 1:</strong> explica o propósito das PEPs e como propostas
          são discutidas.
        </li>
      </List>
      <Paragraph>
        Convenções como nomes claros, organização em módulos e documentação
        ajudam equipes a desenvolver projetos. Também existem padrões de
        arquitetura, como <em>application factory</em>, usados em determinados
        tipos de aplicação para organizar a criação e a configuração do
        programa. Esses padrões dependem do contexto e serão explicados em uma
        página própria, não são regras obrigatórias da linguagem.
      </Paragraph>
    </div>
  );
}
