const topicInfo = [
    {
        topiccod: 1,
        slug: "leia-atentamente-as-regras",
        title: "Leia atentamente as regras",
        time: "2023-01-01T19:32:10",
        author: 1,
        section: 1,
        body: '<h1>Teste de titulo</h1> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget diam magna. Nullam a nisi et orci faucibus hendrerit ac in sem. Pellentesque nec est eu nibh tempor efficitur. Ut lobortis, risus vel tristique pretium, felis libero ornare purus, quis tincidunt leo enim quis libero. Praesent interdum dignissim orci, quis egestas tellus vehicula ut. Vivamus a ipsum dui. Cras imperdiet tristique arcu sit amet venenatis. In vel elit bibendum, volutpat tellus ac, euismod purus. Vivamus eu lectus at turpis posuere auctor non et purus. Pellentesque in orci ac lacus malesuada blandit. Phasellus egestas rhoncus lectus pellentesque rhoncus. Aliquam vitae urna gravida, bibendum magna et, tincidunt urna. Nam in euismod risus, sed posuere ex. Duis quis ornare velit. Suspendisse id nibh libero.</p><p>Maecenas at urna in elit pellentesque iaculis faucibus ac ipsum. Nullam pulvinar diam sed quam tincidunt, sit amet consectetur erat commodo. Vivamus molestie velit a vehicula porttitor. Cras at mattis neque, sed ultrices augue. Integer metus arcu, auctor at lectus vel, maximus aliquet libero. Etiam purus nisi, feugiat vel malesuada eu, condimentum in sapien. Curabitur ultrices fringilla turpis id laoreet. Morbi ipsum ante, tempus nec interdum a, tempus ut dolor. Aliquam mattis diam vel scelerisque sollicitudin. Sed molestie convallis dolor ut iaculis.</p><p><math style="font-family:stix" xmlns="http://www.w3.org/1998/Math/MathML"><mn>2</mn><mo>+</mo><mn>3</mn><mi>x</mi><mo>=</mo><mn>11</mn><mo>&#160;</mo><mo>&#8594;</mo></math> Teste de equa&ccedil;&atilde;o</p>',
        likes: 342,
        comentarios: 12,
        privacy: 1
    },
    {
        topiccod: 2,
        slug: "exemplo-de-postagem",
        title: "Exemplo de postagem",
        time: "2023-08-05T19:35:30",
        author: 2,
        section: 2,
        body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget diam magna. Nullam a nisi et orci faucibus hendrerit ac in sem. Pellentesque nec est eu nibh tempor efficitur. Ut lobortis, risus vel tristique pretium, felis libero ornare purus, quis tincidunt leo enim quis libero. Praesent interdum dignissim orci, quis egestas tellus vehicula ut. Vivamus a ipsum dui. Cras imperdiet tristique arcu sit amet venenatis. In vel elit bibendum, volutpat tellus ac, euismod purus. Vivamus eu lectus at turpis posuere auctor non et purus. Pellentesque in orci ac lacus malesuada blandit. Phasellus egestas rhoncus lectus pellentesque rhoncus. Aliquam vitae urna gravida, bibendum magna et, tincidunt urna. Nam in euismod risus, sed posuere ex. Duis quis ornare velit. Suspendisse id nibh libero.</p><p>Maecenas at urna in elit pellentesque iaculis faucibus ac ipsum. Nullam pulvinar diam sed quam tincidunt, sit amet consectetur erat commodo. Vivamus molestie velit a vehicula porttitor. Cras at mattis neque, sed ultrices augue. Integer metus arcu, auctor at lectus vel, maximus aliquet libero. Etiam purus nisi, feugiat vel malesuada eu, condimentum in sapien. Curabitur ultrices fringilla turpis id laoreet. Morbi ipsum ante, tempus nec interdum a, tempus ut dolor. Aliquam mattis diam vel scelerisque sollicitudin. Sed molestie convallis dolor ut iaculis.</p>',
        privacy: 2
    },
    {
        topiccod: 3,
        title: "Exemplo de postagem",
        slug: "exemplo-de-postagem",
        time: "2023-08-05T00:00:01",
        author: 3,
        section: 3,
        body: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget diam magna. Nullam a nisi et orci faucibus hendrerit ac in sem. Pellentesque nec est eu nibh tempor efficitur. Ut lobortis, risus vel tristique pretium, felis libero ornare purus, quis tincidunt leo enim quis libero. Praesent interdum dignissim orci, quis egestas tellus vehicula ut. Vivamus a ipsum dui. Cras imperdiet tristique arcu sit amet venenatis. In vel elit bibendum, volutpat tellus ac, euismod purus. Vivamus eu lectus at turpis posuere auctor non et purus. Pellentesque in orci ac lacus malesuada blandit. Phasellus egestas rhoncus lectus pellentesque rhoncus. Aliquam vitae urna gravida, bibendum magna et, tincidunt urna. Nam in euismod risus, sed posuere ex. Duis quis ornare velit. Suspendisse id nibh libero.</p><p>Maecenas at urna in elit pellentesque iaculis faucibus ac ipsum. Nullam pulvinar diam sed quam tincidunt, sit amet consectetur erat commodo. Vivamus molestie velit a vehicula porttitor. Cras at mattis neque, sed ultrices augue. Integer metus arcu, auctor at lectus vel, maximus aliquet libero. Etiam purus nisi, feugiat vel malesuada eu, condimentum in sapien. Curabitur ultrices fringilla turpis id laoreet. Morbi ipsum ante, tempus nec interdum a, tempus ut dolor. Aliquam mattis diam vel scelerisque sollicitudin. Sed molestie convallis dolor ut iaculis.</p>`,
        privacy: 3
    },
    {
        topiccod: 4,
        title: "uiofdhgidhgidfg",
        slug: "uiofdhgidhgidfg",
        time: "2023-03-05T00:00:02",
        author: 3,
        section: 4,
        body: '<p>Lorem ipsum dolor sit amet, nullam a nisi et orci faucibus hendrerit ac in sem. Pellentesque nec est eu nibh tempor efficitur. Ut lobortis, risus vel tristique pretium, felis libero ornare purus, quis tincidunt leo enim quis libero. Praesent interdum dignissim orci, quis egestas tellus vehicula ut. Vivamus a ipsum dui. Cras imperdiet tristique arcu sit amet venenatis. In vel elit bibendum, volutpat tellus ac, euismod purus. Vivamus eu lectus at turpis posuere auctor non et purus. Pellentesque in orci ac lacus malesuada blandit. Phasellus egestas rhoncus lectus pellentesque rhoncus. Aliquam vitae urna gravida, bibendum magna et, tincidunt urna. Nam in euismod risus, sed posuere ex. Duis quis ornare velit. Suspendisse id nibh libero.</p><p>Maecenas at urna in elit pellentesque iaculis faucibus ac ipsum. Nullam pulvinar diam sed quam tincidunt, sit amet consectetur erat commodo. Vivamus molestie velit a vehicula porttitor. Cras at mattis neque, sed ultrices augue. Integer metus arcu, auctor at lectus vel, maximus aliquet libero. Etiam purus nisi, feugiat vel malesuada eu, condimentum in sapien. Curabitur ultrices fringilla turpis id laoreet. Morbi ipsum ante, tempus nec interdum a, tempus ut dolor. Aliquam mattis diam vel scelerisque sollicitudin. Sed molestie convallis dolor ut iaculis.</p>',
        privacy: 1
    },
    {
        topiccod: 5,
        title: "firfiosdiofhsaidfg",
        slug: "firfiosdiofhsaidfg",
        time: "2023-08-03T00:00:02",
        author: 1,
        section: 5,
        body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget diam magna. Nullam a nisi et orci faucibus hendrerit ac in sem. Pellentesque nec est eu nibh tempor efficitur. Ut lobortis, risus vel tristique pretium, felis libero ornare purus, quis tincidunt leo enim quis libero. Praesent interdum dignissim orci, quis egestas tellus vehicula ut. Vivamus a ipsum dui. Cras imperdiet tristique arcu sit amet venenatis. In vel elit bibendum, volutpat tellus ac, euismod purus. Vivamus eu lectus at turpis posuere auctor non et purus. Pellentesque in orci ac lacus malesuada blandit. Phasellus egestas rhoncus lectus pellentesque rhoncus. Aliquam vitae urna gravida, bibendum magna et, tincidunt urna. Nam in euismod risus, sed posuere ex. Duis quis ornare velit. Suspendisse id nibh libero.</p><p>Maecenas at urna in elit pellentesque iaculis faucibus ac ipsum. Nullam pulvinar diam sed quam tincidunt, sit amet consectetur erat commodo. Vivamus molestie velit a vehicula porttitor. Cras at mattis neque, sed ultrices augue. Integer metus arcu, auctor at lectus vel, maximus aliquet libero. Etiam purus nisi, feugiat vel malesuada eu, condimentum in sapien. Curabitur ultrices fringilla turpis id laoreet. Morbi ipsum ante, tempus nec interdum a, tempus ut dolor. Aliquam mattis diam vel scelerisque sollicitudin. Sed molestie convallis dolor ut iaculis.</p>',
        privacy: 1
    } 
]

const user = [
    {
        usercod: 1,
        name: "Arthur Martins Pereira",
        photo: "/avatars/eric.png"
    },
    {
        usercod: 2,
        name: "Oton Nascimento",
        photo: '/avatars/dog.png'
    },
    {
        usercod: 3,
        name: "Exemplo de professor",
        photo: '/avatars/bob.png'
    }
]

const flair = [
    {
        flaircod: 1,
        name: "Etec"
    },
    {
        flaircod: 2,
        name: "Fatec"
    },
    {
        flaircod: 3,
        name: "Professor"
    },
    {
        flaircod: 4,
        name: "Staff"
    }
]

const flairHolder = [
    {
        usercod: 1,
        flaircod: 1
    },
    {
        usercod: 1,
        flaircod: 4
    },
    {
        usercod: 2,
        flaircod: 2
    },
    {
        usercod: 3,
        flaircod: 3
    }
]

const section = [
    {
      sectioncod: 1,
      sectionname: 'Mensagens do Forum CPS',
      ssection: 1,
      slug: 'mensagens-do-forum-cps'
    },
    {
      sectioncod: 2,
      sectionname: 'Matemática',
      ssection: 2,
      slug: 'matematica'
    },
    {
      sectioncod: 3,
      sectionname: 'Química - Ciência',
      ssection: 2,
      slug: 'quimica-ciencia'
    },
    {
      sectioncod: 4,
      sectionname: 'Português e Literatura',
      ssection: 3,
      slug: 'portugues-e-literatura'
    },
    {
      sectioncod: 5,
      sectionname: 'Redação',
      ssection: 3,
      slug: 'redacao'
    },
    { sectioncod: 6, 
      sectionname: 'Inglês', 
      ssection: 3, 
      slug: 'ingles' }, 
    {
      sectioncod: 7,
      sectionname: 'Geografia',
      ssection: 3,
      slug: 'geografia'
    },
    {
      sectioncod: 8,
      sectionname: 'História',
      ssection: 3,
      slug: 'historia'
    },
    {
      sectioncod: 9,
      sectionname: 'Filosofia',
      ssection: 3,
      slug: 'filosofia'
    },
    {
      sectioncod: 10,
      sectionname: 'Sociologia',
      ssection: 3,
      slug: 'sociologia'
    },
    {
      sectioncod: 11,
      sectionname: 'Desenvolvimento de Sistemas',
      ssection: 4,
      slug: 'desenvolvimento-de-sistemas'
    },
    {
      sectioncod: 12,
      sectionname: 'Contabilidade',
      ssection: 4,
      slug: 'contabilidade'
    },
    {
      sectioncod: 13,
      sectionname: 'Química - Cursos',
      ssection: 4,
      slug: 'quimica-cursos'
    },
    {
      sectioncod: 14,
      sectionname: 'Administração',
      ssection: 4,
      slug: 'administracao'
    },
    {
      sectioncod: 15,
      sectionname: 'Logística',
      ssection: 4,
      slug: 'logistica'
    },
    {
      sectioncod: 16,
      sectionname: 'Marketing',
      ssection: 4,
      slug: 'marketing'
    },
    { sectioncod: 17, 
      sectionname: 'ENEM', 
      ssection: 6, 
      slug: 'enem' },    
    {
      sectioncod: 18,
      sectionname: 'FUVEST',
      ssection: 6,
      slug: 'fuvest'
    },
    {
      sectioncod: 19,
      sectionname: 'ITA-IME',
      ssection: 6,
      slug: 'ita-ime'
    },
    {
      sectioncod: 20,
      sectionname: 'Fatec',
      ssection: 6,
      slug: 'vestibular-etec'
    },
    {
      sectioncod: 21,
      sectionname: 'Vestibulares diversos',
      ssection: 6,
      slug: 'vestibular-diversos'
    },
    {
      sectioncod: 22,
      sectionname: 'Olimpíadas',
      ssection: 7,
      slug: 'olimpiadas'
    },
    {
      sectioncod: 23,
      sectionname: 'Tecnologia',
      ssection: 7,
      slug: 'tecnologia'
    },
    {
      sectioncod: 24,
      sectionname: 'Física',
      ssection: 2,
      slug: 'fisica'
    },
    {
      sectioncod: 25,
      sectionname: 'Biologia',
      ssection: 2,
      slug: 'biologia'
    },
    {
      sectioncod: 26,
      sectionname: 'TCC',
      ssection: 7,
      slug: 'tcc'
    },
  ]

const supersection = [
    {
        ssectioncod: 1,
        ssectionname: "Mensagens do Fórum CPS"
    },
    {
        ssectioncod: 2,
        ssectionname: "Matemática e Ciências da Natureza"
    },
    {
        ssectioncod: 3,
        ssectionname: "Linguagens e Ciências Sociais"
    },
    {
        ssectioncod: 4,
        ssectionname: "Etec"
    },
    {
        ssectioncod: 5,
        ssectionname: "Fatec"
    },
    {
        ssectioncod: 6,
        ssectionname: "Vestibulares"
    },
    {
        ssectioncod: 7,
        ssectionname: "Outros"
    }
]


export {topicInfo, user, flairHolder, flair, section, supersection}