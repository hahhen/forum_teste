const topicInfo = [
    {
        topiccod: 1,
        title: "Leia atentamente as regras",
        time: "2023-01-01T19:32:10",
        author: 1,
        section: 1
    },
    {
        topiccod: 2,
        title: "Exemplo de postagem",
        time: "2023-08-05T19:35:30",
        author: 2,
        section: 2
    },
    {
        topiccod: 3,
        title: "Exemplo de postagem",
        time: "2023-08-05T00:00:01",
        author: 3,
        section: 3
    },
    {
        topiccod: 4,
        title: "uiofdhgidhgidfg",
        time: "2023-03-05T00:00:02",
        author: 3,
        section: 4
    },
    {
        topiccod: 5,
        title: "firfiosdiofhsaidfg",
        time: "2023-08-03T00:00:02",
        author: 1,
        section: 5
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
        sectionname: "Química",
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
        sectionname: "Química",
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
    }

]


export {topicInfo, user, flairHolder, flair, section, supersection}