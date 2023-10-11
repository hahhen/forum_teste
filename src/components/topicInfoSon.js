const topicInfo = [
    {
        topiccod: 1,
        title: "Leia atentamente as regras",
        time: "2023-01-01T19:32:10",
        author: 1,
        section: 1,
        body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget diam magna. Nullam a nisi et orci faucibus hendrerit ac in sem. Pellentesque nec est eu nibh tempor efficitur. Ut lobortis, risus vel tristique pretium, felis libero ornare purus, quis tincidunt leo enim quis libero. Praesent interdum dignissim orci, quis egestas tellus vehicula ut. Vivamus a ipsum dui. Cras imperdiet tristique arcu sit amet venenatis. In vel elit bibendum, volutpat tellus ac, euismod purus. Vivamus eu lectus at turpis posuere auctor non et purus. Pellentesque in orci ac lacus malesuada blandit. Phasellus egestas rhoncus lectus pellentesque rhoncus. Aliquam vitae urna gravida, bibendum magna et, tincidunt urna. Nam in euismod risus, sed posuere ex. Duis quis ornare velit. Suspendisse id nibh libero.</p><p>Maecenas at urna in elit pellentesque iaculis faucibus ac ipsum. Nullam pulvinar diam sed quam tincidunt, sit amet consectetur erat commodo. Vivamus molestie velit a vehicula porttitor. Cras at mattis neque, sed ultrices augue. Integer metus arcu, auctor at lectus vel, maximus aliquet libero. Etiam purus nisi, feugiat vel malesuada eu, condimentum in sapien. Curabitur ultrices fringilla turpis id laoreet. Morbi ipsum ante, tempus nec interdum a, tempus ut dolor. Aliquam mattis diam vel scelerisque sollicitudin. Sed molestie convallis dolor ut iaculis.</p>'
    },
    {
        topiccod: 2,
        title: "Exemplo de postagem",
        time: "2023-08-05T19:35:30",
        author: 2,
        section: 2,
        body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget diam magna. Nullam a nisi et orci faucibus hendrerit ac in sem. Pellentesque nec est eu nibh tempor efficitur. Ut lobortis, risus vel tristique pretium, felis libero ornare purus, quis tincidunt leo enim quis libero. Praesent interdum dignissim orci, quis egestas tellus vehicula ut. Vivamus a ipsum dui. Cras imperdiet tristique arcu sit amet venenatis. In vel elit bibendum, volutpat tellus ac, euismod purus. Vivamus eu lectus at turpis posuere auctor non et purus. Pellentesque in orci ac lacus malesuada blandit. Phasellus egestas rhoncus lectus pellentesque rhoncus. Aliquam vitae urna gravida, bibendum magna et, tincidunt urna. Nam in euismod risus, sed posuere ex. Duis quis ornare velit. Suspendisse id nibh libero.</p><p>Maecenas at urna in elit pellentesque iaculis faucibus ac ipsum. Nullam pulvinar diam sed quam tincidunt, sit amet consectetur erat commodo. Vivamus molestie velit a vehicula porttitor. Cras at mattis neque, sed ultrices augue. Integer metus arcu, auctor at lectus vel, maximus aliquet libero. Etiam purus nisi, feugiat vel malesuada eu, condimentum in sapien. Curabitur ultrices fringilla turpis id laoreet. Morbi ipsum ante, tempus nec interdum a, tempus ut dolor. Aliquam mattis diam vel scelerisque sollicitudin. Sed molestie convallis dolor ut iaculis.</p>'
    },
    {
        topiccod: 3,
        title: "Exemplo de postagem",
        time: "2023-08-05T00:00:01",
        author: 3,
        section: 3,
        body: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget diam magna. Nullam a nisi et orci faucibus hendrerit ac in sem. Pellentesque nec est eu nibh tempor efficitur. Ut lobortis, risus vel tristique pretium, felis libero ornare purus, quis tincidunt leo enim quis libero. Praesent interdum dignissim orci, quis egestas tellus vehicula ut. Vivamus a ipsum dui. Cras imperdiet tristique arcu sit amet venenatis. In vel elit bibendum, volutpat tellus ac, euismod purus. Vivamus eu lectus at turpis posuere auctor non et purus. Pellentesque in orci ac lacus malesuada blandit. Phasellus egestas rhoncus lectus pellentesque rhoncus. Aliquam vitae urna gravida, bibendum magna et, tincidunt urna. Nam in euismod risus, sed posuere ex. Duis quis ornare velit. Suspendisse id nibh libero.</p><p>Maecenas at urna in elit pellentesque iaculis faucibus ac ipsum. Nullam pulvinar diam sed quam tincidunt, sit amet consectetur erat commodo. Vivamus molestie velit a vehicula porttitor. Cras at mattis neque, sed ultrices augue. Integer metus arcu, auctor at lectus vel, maximus aliquet libero. Etiam purus nisi, feugiat vel malesuada eu, condimentum in sapien. Curabitur ultrices fringilla turpis id laoreet. Morbi ipsum ante, tempus nec interdum a, tempus ut dolor. Aliquam mattis diam vel scelerisque sollicitudin. Sed molestie convallis dolor ut iaculis.</p>`
    },
    {
        topiccod: 4,
        title: "uiofdhgidhgidfg",
        time: "2023-03-05T00:00:02",
        author: 3,
        section: 4,
        body: '<p>Lorem ipsum dolor sit amet, nullam a nisi et orci faucibus hendrerit ac in sem. Pellentesque nec est eu nibh tempor efficitur. Ut lobortis, risus vel tristique pretium, felis libero ornare purus, quis tincidunt leo enim quis libero. Praesent interdum dignissim orci, quis egestas tellus vehicula ut. Vivamus a ipsum dui. Cras imperdiet tristique arcu sit amet venenatis. In vel elit bibendum, volutpat tellus ac, euismod purus. Vivamus eu lectus at turpis posuere auctor non et purus. Pellentesque in orci ac lacus malesuada blandit. Phasellus egestas rhoncus lectus pellentesque rhoncus. Aliquam vitae urna gravida, bibendum magna et, tincidunt urna. Nam in euismod risus, sed posuere ex. Duis quis ornare velit. Suspendisse id nibh libero.</p><p>Maecenas at urna in elit pellentesque iaculis faucibus ac ipsum. Nullam pulvinar diam sed quam tincidunt, sit amet consectetur erat commodo. Vivamus molestie velit a vehicula porttitor. Cras at mattis neque, sed ultrices augue. Integer metus arcu, auctor at lectus vel, maximus aliquet libero. Etiam purus nisi, feugiat vel malesuada eu, condimentum in sapien. Curabitur ultrices fringilla turpis id laoreet. Morbi ipsum ante, tempus nec interdum a, tempus ut dolor. Aliquam mattis diam vel scelerisque sollicitudin. Sed molestie convallis dolor ut iaculis.</p>'
    },
    {
        topiccod: 5,
        title: "firfiosdiofhsaidfg",
        time: "2023-08-03T00:00:02",
        author: 1,
        section: 5,
        body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget diam magna. Nullam a nisi et orci faucibus hendrerit ac in sem. Pellentesque nec est eu nibh tempor efficitur. Ut lobortis, risus vel tristique pretium, felis libero ornare purus, quis tincidunt leo enim quis libero. Praesent interdum dignissim orci, quis egestas tellus vehicula ut. Vivamus a ipsum dui. Cras imperdiet tristique arcu sit amet venenatis. In vel elit bibendum, volutpat tellus ac, euismod purus. Vivamus eu lectus at turpis posuere auctor non et purus. Pellentesque in orci ac lacus malesuada blandit. Phasellus egestas rhoncus lectus pellentesque rhoncus. Aliquam vitae urna gravida, bibendum magna et, tincidunt urna. Nam in euismod risus, sed posuere ex. Duis quis ornare velit. Suspendisse id nibh libero.</p><p>Maecenas at urna in elit pellentesque iaculis faucibus ac ipsum. Nullam pulvinar diam sed quam tincidunt, sit amet consectetur erat commodo. Vivamus molestie velit a vehicula porttitor. Cras at mattis neque, sed ultrices augue. Integer metus arcu, auctor at lectus vel, maximus aliquet libero. Etiam purus nisi, feugiat vel malesuada eu, condimentum in sapien. Curabitur ultrices fringilla turpis id laoreet. Morbi ipsum ante, tempus nec interdum a, tempus ut dolor. Aliquam mattis diam vel scelerisque sollicitudin. Sed molestie convallis dolor ut iaculis.</p>'
    } 
]

const user = [
    {
        usercod: 1,
        name: "Arthur Martins Pereira"
    },
    {
        usercod: 2,
        name: "Oton Nascimento"
    },
    {
        usercod: 3,
        name: "Exemplo de professor"
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
        sectionname: "Mensagens do Fórum CPS",
        ssection: 1
    },
    {
        sectioncod: 2,
        sectionname: "Matemática",
        ssection: 2
    },
    {
        sectioncod: 3,
        sectionname: "Química - Ciência",
        ssection: 2
    },
    {
        sectioncod: 4,
        sectionname: "Português e Literatura",
        ssection: 3
    },
    {
        sectioncod: 5,
        sectionname: "Geografia",
        ssection: 3
    },
    {
        sectioncod: 6,
        sectionname: "História",
        ssection: 3
    },
    {
        sectioncod: 7,
        sectionname: "Artes",
        ssection: 3
    },
    {
        sectioncod: 8,
        sectionname: "Desenvolvimento de Sistemas",
        ssection: 4
    },
    {
        sectioncod: 9,
        sectionname: "Contabilidade",
        ssection: 4
    },
    {
        sectioncod: 10,
        sectionname: "Química - Curso",
        ssection: 4
    },
    {
        sectioncod: 11,
        sectionname: "Administração",
        ssection: 4
    },
    {
        sectioncod: 12,
        sectionname: "Logística",
        ssection: 4
    },
    {
        sectioncod: 13,
        sectionname: "Marketing",
        ssection: 4
    },
    {
        sectioncod: 14,
        sectionname: "Física",
        ssection: 2
    },
    {
        sectioncod: 15,
        sectionname: "ENEM",
        ssection: 6
    },
    {
        sectioncod: 16,
        sectionname: "FUVEST",
        ssection: 6
    },
    {
        sectioncod: 17,
        sectionname: "ITA-IME",
        ssection: 6
    },
    {
        sectioncod: 18,
        sectionname: "Vestibular Fatec",
        ssection: 6
    },
    {
        sectioncod: 19,
        sectionname: "Vestibulares diversos",
        ssection: 6
    },
    {
        sectioncod: 20,
        sectionname: "TCC - Etec",
        ssection: 4
    },
    {
        sectioncod: 21,
        sectionname: "TCC - Fatec",
        ssection: 5
    },
    {
        sectioncod: 22,
        sectionname: "Biologia",
        ssection: 3
    },
    {
        sectioncod: 23,
        sectionname: "Biologia",
        ssection: 3
    },
    {
        sectioncod: 24,
        sectionname: "Filosofia",
        ssection: 3
    },
    {
        sectioncod: 25,
        sectionname: "Sociologia",
        ssection: 3
    },
    {
        sectioncod: 26,
        sectionname: "Redação",
        ssection: 3
    },
    {
        sectioncod: 27,
        sectionname: "Inglês",
        ssection: 3
    },
    {
        sectioncod: 28,
        sectionname: "Olimpíadas",
        ssection: 7
    },
    {
        sectioncod: 29,
        sectionname: "Tecnologia",
        ssection: 7
    } 
]

const supersection = [
    {
        ssectioncod: 1,
        ssectionname: "Mensagens do Fórum CPS"
    },
    {
        ssectioncod: 2,
        ssectionname: "Exatas"
    },
    {
        ssectioncod: 3,
        ssectionname: "Humanas"
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