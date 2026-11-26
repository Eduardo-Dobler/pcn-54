/* Edite este arquivo para trocar integrantes, textos, notícias e contatos.
   Sem fetch ou dependências: o site funciona abrindo index.html no computador. */
window.PCN_DATA = {
  partido: { nome: 'Partido Caminho Novo', sigla: 'PCN', numero: '54' },
  contatos: { email: '', whatsapp: '', instagram: '' },
  carrossel: { intervalo: 5000 },
  candidato: {"nome": "Nosso candidato", "cargo": "Candidato do PCN · 54", "area": "Partido Caminho Novo", "bio": "À frente da candidatura do projeto interdisciplinar, apresenta cinco propostas nacionais que partem de necessidades locais e podem ser ampliadas em etapas.", "avatar": "assets/people/candidato.webp", "miniatura": "assets/people/candidato-small.webp", "x": "50%", "y": "24%"},
  slides: [
    {
        "tag": "NOSSO CANDIDATO · PCN 54",
        "titulo": "O futuro pede<br>um <em>novo caminho.</em>",
        "texto": "Cinco propostas para o Brasil, com ações que começam nas regiões mais vulneráveis e nas cidades participantes.",
        "botao": "Conheça nosso candidato",
        "destino": "#integrantes/candidato",
        "imagem": "assets/people/candidato.webp",
        "alt": "Retrato do candidato do PCN de terno, diante de bandeiras",
        "formato": "portrait",
        "x": "50%",
        "y": "24%",
        "detalhe": "CANDIDATO DO PARTIDO",
        "legenda": "Pessoas em primeiro lugar.<br>Um novo caminho para o Brasil."
    },
    {
        "tag": "DIFERENTES OLHARES · UM MESMO PROPÓSITO",
        "titulo": "Uma equipe.<br><em>Muitos caminhos.</em>",
        "texto": "Pessoas que se unem para ouvir, debater e construir propostas. Conheça quem faz parte do Partido Caminho Novo.",
        "botao": "Conheça a equipe",
        "destino": "#integrantes",
        "imagem": "assets/people/equipe-pcn.webp",
        "alt": "Equipe do PCN reunida com a bandeira e o emblema de cavalo do partido",
        "formato": "team",
        "x": "50%",
        "y": "50%",
        "detalhe": "QUEM CONSTRÓI ESSE CAMINHO",
        "legenda": "Ideias ganham força<br>quando construídas em conjunto."
    },
    {
        "tag": "OPORTUNIDADES PARA O PRESENTE E O FUTURO",
        "titulo": "Desenvolver.<br>Incluir. <em>Avançar.</em>",
        "texto": "Da coleta seletiva às compras da agricultura familiar e aos cursos de tecnologia, conheça as iniciativas que começariam em diferentes regiões do Brasil.",
        "botao": "Explore nosso programa",
        "destino": "#sobre/programa",
        "imagem": "assets/people/integrante-04.webp",
        "alt": "Integrante do projeto com traje formal e distintivo do PCN",
        "formato": "portrait",
        "x": "50%",
        "y": "25%",
        "detalhe": "DESENVOLVIMENTO COM PROPÓSITO",
        "legenda": "Produção local.<br>Mais inclusão digital."
    }
],
  propostas: [
    {
      "id": "rede-brasil-alerta",
      "numero": "01",
      "categoria": "PREVENÇÃO",
      "titulo": "Rede Brasil Alerta",
      "curto": "Monitoramento e avisos antecipados para cidades expostas a enchentes, alagamentos e outros eventos climáticos extremos.",
      "icone": "drop",
      "descricao": "Ampliar o monitoramento e os alertas nas áreas de risco, começando pelas regiões mais vulneráveis. A rede ajudaria a população a receber avisos a tempo e saber como agir. O sistema complementaria as obras de drenagem e prevenção.",
      "acoes": [
        "Instalar sensores em áreas de risco e integrar os dados à previsão meteorológica.",
        "Articular o monitoramento com as Defesas Civis estaduais e municipais.",
        "Enviar avisos por celular, ativar sirenes e usar canais que alcancem quem não tem internet constante."
      ],
      "investimento": "R$ 1,5 bilhão",
      "alcance": "Primeira etapa nacional de quatro anos, com prioridade para as regiões mais vulneráveis.",
      "viabilidade": "Tecnologias de monitoramento, previsão e envio de alertas já existem. A implantação depende da integração dessas ferramentas e da cooperação entre as Defesas Civis."
    },
    {
      "id": "periferia-conectada",
      "numero": "02",
      "categoria": "MOBILIDADE",
      "titulo": "Periferia Conectada",
      "curto": "Reorganizar linhas e horários de ônibus para reduzir esperas e melhorar as conexões nos bairros mais afastados.",
      "icone": "bus",
      "descricao": "Melhorar o planejamento do transporte público em cidades de diferentes regiões, com atenção a quem depende do ônibus para chegar a escolas, hospitais, empregos e outras redes de transporte.",
      "acoes": [
        "Mapear pontos com espera longa, superlotação e conexões difíceis.",
        "Reorganizar linhas e horários de acordo com a demanda, aproveitando a estrutura existente.",
        "Ajustar os trajetos para melhorar as conexões com metrôs e trens onde houver integração."
      ],
      "investimento": "R$ 4 bilhões",
      "alcance": "Projetos-piloto e melhorias em cidades de diferentes regiões ao longo de quatro anos.",
      "viabilidade": "A proposta aproveita os serviços de transporte já existentes. A execução exige estudos de demanda, adaptação local e colaboração entre prefeituras, estados e União."
    },
    {
      "id": "recicla-mais",
      "numero": "03",
      "categoria": "COLETA SELETIVA",
      "titulo": "Recicla Mais",
      "curto": "Ampliar a coleta seletiva com ecopontos, rotas de recicláveis e parcerias com cooperativas de catadores.",
      "icone": "recycle",
      "descricao": "Apoiar municípios na ampliação da coleta seletiva e garantir que os materiais separados pela população sejam recolhidos e encaminhados corretamente. Cooperativas e associações de catadores teriam papel central.",
      "acoes": [
        "Implantar ecopontos e planejar rotas específicas para recicláveis.",
        "Trabalhar com cooperativas e associações de catadores para organizar o encaminhamento dos materiais.",
        "Orientar moradores sobre separação de resíduos em campanhas nas escolas e nos bairros."
      ],
      "investimento": "R$ 2 bilhões",
      "alcance": "Implantação e ampliação gradual em municípios selecionados durante quatro anos.",
      "viabilidade": "Os métodos de coleta e reciclagem já são conhecidos. As rotas, os pontos de entrega e as parcerias precisam se adaptar à realidade de cada município."
    },
    {
      "id": "compra-local",
      "numero": "04",
      "categoria": "AGRICULTURA FAMILIAR",
      "titulo": "Compra Local,<br>Futuro Sustentável",
      "curto": "Aumentar a participação da agricultura familiar nas compras para a alimentação escolar e outros serviços públicos.",
      "icone": "leaf",
      "descricao": "Fortalecer as compras públicas de alimentos de pequenos produtores, aproveitando programas existentes. A proposta incentiva práticas sustentáveis e ajuda a manter parte dos recursos circulando na própria região.",
      "acoes": [
        "Orientar produtores sobre como participar dos programas de compra.",
        "Organizar a logística das entregas conforme a capacidade de produção e a sazonalidade local.",
        "Incentivar práticas agrícolas mais sustentáveis."
      ],
      "investimento": "R$ 1 bilhão",
      "alcance": "Recursos adicionais para assistência, logística e participação de produtores em quatro anos. Não corresponde ao custo total da alimentação escolar.",
      "viabilidade": "A proposta parte de mecanismos existentes, como o Programa Nacional de Alimentação Escolar (PNAE). A ampliação depende de apoio aos produtores e planejamento local das entregas."
    },
    {
      "id": "jovem-conectado",
      "numero": "05",
      "categoria": "INCLUSÃO DIGITAL",
      "titulo": "Jovem Conectado",
      "curto": "Oferecer cursos gratuitos de informática, tecnologia, programação básica e preparação para o trabalho.",
      "icone": "computer",
      "descricao": "Ampliar o acesso dos jovens a conhecimentos úteis no estudo e no trabalho. Os cursos poderiam ocorrer em escolas, bibliotecas e centros comunitários, com acesso a equipamentos para quem não tem computador em casa.",
      "acoes": [
        "Equipar os espaços públicos selecionados e formar instrutores.",
        "Abrir turmas gratuitas em horários acessíveis.",
        "Buscar parcerias com instituições de ensino e empresas para manter os conteúdos atualizados."
      ],
      "investimento": "R$ 1,2 bilhão",
      "alcance": "Equipamentos, formação de instrutores e oferta de cursos em uma primeira etapa nacional de quatro anos.",
      "viabilidade": "É possível aproveitar espaços e estruturas de ensino já existentes. A ampliação gradual depende de equipamentos, instrutores e organização das turmas."
    }
  ],
  principios: [
    { titulo: 'Pessoas em primeiro lugar', texto: 'Priorizar a dignidade, os direitos e o acesso a serviços, especialmente onde a necessidade é maior.', icone: 'people' },
    { titulo: 'Evidências e resultados', texto: 'Escolher soluções por seus efeitos concretos, ouvir avaliações técnicas e corrigir o que não funcionar.', icone: 'chart' },
    { titulo: 'Desenvolvimento responsável', texto: 'Criar oportunidades com qualificação, inovação e compromissos ambientais e sociais verificáveis.', icone: 'factory' },
    { titulo: 'Transparência e participação', texto: 'Publicar custos, critérios e metas, incluindo os moradores na construção e no acompanhamento das decisões.', icone: 'dialogue' }
  ],
  integrantes: [
    {
        "nome": "Theresa Venzon",
        "cargo": "Presidente",
        "area": "Presidência",
        "bio": "Theresa Venzon assume a presidência com um compromisso claro: unir pessoas em torno de um projeto que coloque a população em primeiro lugar. Sua função é dar direção ao PCN, ouvir diferentes perspectivas e manter a equipe focada em propostas responsáveis. Liderar é construir confiança e incentivar cada integrante a contribuir para um futuro com mais oportunidades.",
        "avatar": "assets/people/integrante-06.webp",
        "miniatura": "assets/people/integrante-06-small.webp",
        "x": "50%",
        "y": "20%",
        "resumo": "Liderança para unir a equipe e transformar boas ideias em um caminho possível."
    },
    {
        "nome": "Eduardo Dobler",
        "cargo": "Vice-Presidente",
        "area": "Vice-Presidência",
        "bio": "Eduardo Dobler fortalece a presidência e ajuda a transformar decisões em ações coordenadas. Na vice-presidência, seu compromisso é aproximar a equipe, acompanhar as prioridades e dar continuidade ao trabalho do partido. Com diálogo e disposição para colaborar, atua para que cada passo do PCN seja construído com união, responsabilidade e confiança no futuro.",
        "avatar": "assets/people/integrante-04.webp",
        "miniatura": "assets/people/integrante-04-small.webp",
        "x": "50%",
        "y": "20%",
        "resumo": "Diálogo e parceria para manter o PCN unido e levar seus compromissos adiante."
    },
    {
        "nome": "Ana Laura",
        "cargo": "Coordenadora de Campanha",
        "area": "Coordenação",
        "bio": "Ana Laura coordena a campanha com o propósito de conectar pessoas, organizar ações e dar ritmo ao trabalho da equipe. Sua missão é alinhar os esforços do PCN para que as propostas cheguem à comunidade com clareza e propósito. Cada atividade é uma oportunidade de ouvir, mobilizar e mostrar que um novo caminho se constrói com participação e dedicação.",
        "avatar": "assets/people/integrante-05.webp",
        "miniatura": "assets/people/integrante-05-small.webp",
        "x": "50%",
        "y": "20%",
        "resumo": "Organização e energia para aproximar nossas ideias da comunidade."
    },
    {
        "nome": "Matheus Vanin",
        "cargo": "Especialista Técnico",
        "area": "Análise técnica",
        "bio": "Matheus Vanin tem a missão de dar consistência técnica às ideias do PCN. Seu trabalho é analisar possibilidades, avaliar desafios e ajudar a transformar objetivos em propostas que possam ser executadas e acompanhadas. Com atenção aos detalhes e compromisso com a qualidade, contribui para que a confiança no futuro venha acompanhada de planejamento e responsabilidade.",
        "avatar": "assets/people/integrante-01.webp",
        "miniatura": "assets/people/integrante-01-small.webp",
        "x": "50%",
        "y": "20%",
        "resumo": "Análise e responsabilidade para dar consistência às propostas do partido."
    },
    {
        "nome": "Vinicius Petry",
        "cargo": "Assessor",
        "area": "Assessoria",
        "bio": "Vinicius Petry atua na assessoria com o compromisso de apoiar a equipe, organizar demandas e facilitar o andamento do projeto. Sua função conecta decisões e execução, ajudando cada integrante a trabalhar com mais clareza e alinhamento. É na dedicação ao cotidiano e no cuidado com cada etapa que o PCN ganha força para seguir em frente.",
        "avatar": "assets/people/integrante-07.webp",
        "miniatura": "assets/people/integrante-07-small.webp",
        "x": "50%",
        "y": "20%",
        "resumo": "Atenção aos detalhes e apoio à equipe para fazer cada etapa avançar."
    },
    {
        "nome": "Cristiano Luca",
        "cargo": "Pesquisador",
        "area": "Pesquisa",
        "bio": "Cristiano Luca aprofunda o conhecimento que sustenta as propostas do PCN. Sua missão é reunir informações, comparar alternativas e compreender os problemas da comunidade para orientar escolhas mais conscientes. A pesquisa amplia nossa capacidade de agir: quanto melhor conhecemos a realidade, mais preparados estamos para construir soluções relevantes e responsáveis.",
        "avatar": "assets/people/integrante-08.webp",
        "miniatura": "assets/people/integrante-08-small.webp",
        "x": "50%",
        "y": "20%",
        "resumo": "Informação e pesquisa para construir escolhas mais conscientes."
    },
    {
        "nome": "Mateus Sjlender",
        "cargo": "Financiador",
        "area": "Recursos e planejamento",
        "bio": "Mateus Sjlender apoia a estrutura do projeto e contribui para o planejamento dos recursos necessários ao trabalho da equipe. Como financiador, seu compromisso é ajudar a dar continuidade às ações do PCN, com organização e transparência. Apoiar um novo caminho é acreditar no potencial das pessoas e oferecer condições para que suas ideias avancem.",
        "avatar": "assets/people/integrante-09.webp",
        "miniatura": "assets/people/integrante-09-small.webp",
        "x": "50%",
        "y": "20%",
        "resumo": "Apoio e planejamento para dar estrutura às ideias e continuidade ao projeto."
    },
    {
        "nome": "Yasmin Guidini",
        "cargo": "Comunicadora",
        "area": "Comunicação",
        "bio": "Yasmin Guidini dá voz às ideias do PCN e aproxima o partido da comunidade. Sua missão é comunicar as propostas de forma clara, acessível e envolvente, abrindo espaço para o diálogo e a participação. Cada mensagem pode criar uma conexão: comunicar com confiança e responsabilidade ajuda a transformar interesse em colaboração e ideias em movimento.",
        "avatar": "assets/people/integrante-10.webp",
        "miniatura": "assets/people/integrante-10-small.webp",
        "x": "50%",
        "y": "20%",
        "resumo": "Uma voz clara e próxima para conectar o PCN à comunidade."
    }
],
  noticias: [
    {
      "id": "noticia-rede-brasil-alerta",
      "categoria": "Prevenção",
      "titulo": "Rede Brasil Alerta: como o aviso de enchente chegaria a quem precisa?",
      "resumo": "A proposta combina sensores, sirenes e mensagens no celular para alertar moradores com antecedência.",
      "imagem": "assets/cidade.jpg",
      "alt": "Vista de edifícios e áreas verdes em uma cidade",
      "leitura": "1 min",
      "paragrafos": [
        "A Rede Brasil Alerta começaria pelas áreas mais vulneráveis. A ideia é combinar dados de sensores, previsão meteorológica e acompanhamento das Defesas Civis para identificar riscos com antecedência.",
        "Os avisos poderiam chegar por celular, sirenes e outros canais, para alcançar também quem não tem acesso constante à internet. As mensagens ajudariam os moradores a saber como agir.",
        "A rede complementaria as obras de drenagem e prevenção. O documento do PCN estima R$ 1,5 bilhão para a primeira etapa de quatro anos."
      ],
      "proposta": "rede-brasil-alerta"
    },
    {
      "id": "noticia-periferia-conectada",
      "categoria": "Mobilidade",
      "titulo": "Periferia Conectada: o que mudaria no trajeto de ônibus?",
      "resumo": "O projeto começaria mapeando onde a espera é maior, os ônibus lotam e as conexões falham.",
      "imagem": "assets/cidade.jpg",
      "alt": "Vista de edifícios e áreas verdes em uma cidade",
      "leitura": "1 min",
      "paragrafos": [
        "Para quem mora longe do centro, um ônibus lotado ou uma conexão perdida pode aumentar muito o tempo de viagem. O projeto propõe localizar esses problemas antes de alterar as linhas.",
        "A partir dos estudos de demanda, as cidades participantes poderiam rever horários, trajetos e conexões com metrôs e trens onde houver integração. Cada cidade adaptaria o plano à sua rede.",
        "O documento estima R$ 4 bilhões para projetos-piloto e melhorias ao longo de quatro anos."
      ],
      "proposta": "periferia-conectada"
    },
    {
      "id": "noticia-jovem-conectado",
      "categoria": "Inclusão digital",
      "titulo": "Jovem Conectado: cursos gratuitos perto de casa",
      "resumo": "Escolas, bibliotecas e centros comunitários poderiam receber turmas com acesso a computadores.",
      "imagem": "assets/educacao.jpg",
      "alt": "Estudantes em um ambiente de aprendizado",
      "leitura": "1 min",
      "paragrafos": [
        "A proposta levaria cursos de informática, programação básica e preparação para o trabalho a espaços públicos já existentes. Os jovens que não têm computador em casa poderiam usar os equipamentos disponíveis nesses locais.",
        "O projeto prevê formar instrutores, organizar turmas em horários acessíveis e buscar parcerias para manter os conteúdos atualizados. O objetivo é ampliar o acesso ao aprendizado e às oportunidades de estudo e trabalho.",
        "Os R$ 1,2 bilhão estimados para quatro anos cobririam equipamentos, formação de instrutores e oferta de cursos."
      ],
      "proposta": "jovem-conectado"
    },
    {
      "id": "noticia-recicla-mais",
      "categoria": "Resíduos",
      "titulo": "Recicla Mais: o que acontece depois da separação do lixo?",
      "resumo": "A proposta liga a separação em casa à coleta, aos ecopontos e ao trabalho das cooperativas.",
      "imagem": "assets/comunidade.jpg",
      "alt": "Grupo de jovens reunidos ao ar livre",
      "leitura": "1 min",
      "paragrafos": [
        "Separar os recicláveis em casa só funciona quando há um destino para o material. O Recicla Mais propõe ecopontos e rotas específicas para recolher o que os moradores separarem.",
        "Cooperativas e associações de catadores participariam da organização desse fluxo. Campanhas em escolas e bairros explicariam como separar os resíduos e onde entregá-los.",
        "O documento estima R$ 2 bilhões para ampliar a coleta seletiva em municípios selecionados ao longo de quatro anos."
      ],
      "proposta": "recicla-mais"
    },
    {
      "id": "noticia-compra-local",
      "categoria": "Agricultura familiar",
      "titulo": "Compra Local: como a agricultura familiar pode abastecer a alimentação escolar",
      "resumo": "O programa propõe melhorar as entregas e facilitar a participação dos pequenos produtores nas compras públicas.",
      "imagem": "assets/educacao.jpg",
      "alt": "Estudantes em um ambiente de aprendizado",
      "leitura": "1 min",
      "paragrafos": [
        "O PCN propõe aproveitar programas já existentes para ampliar as compras de alimentos da agricultura familiar. A ideia é orientar os produtores e organizar as entregas respeitando o que cada região consegue produzir em cada época do ano.",
        "As compras atenderiam a alimentação escolar e outros serviços públicos. Além de incentivar práticas sustentáveis, elas ajudariam a manter parte dos recursos circulando na própria região.",
        "A estimativa de R$ 1 bilhão em quatro anos se refere a apoio adicional à assistência e à logística. O valor não representa o custo total da alimentação escolar."
      ],
      "proposta": "compra-local"
    }
  ]
};
