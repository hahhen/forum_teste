const topicInfo = [
    {
        topiccod: 1,
        title: "Leia atentamente as regras",
        time: "2023-01-01T19:32:10",
        author: 1,
        section: "Mensagens do Fórum CPS"
    },
    {
        topiccod: 2,
        title: "Exemplo de postagem",
        time: "2023-08-05T19:35:30",
        author: 2,
        section: "Exemplo"
    },
    {
        topiccod: 3,
        title: "Exemplo de postagem",
        time: "2023-08-05T00:00:01",
        author: 3,
        section: "Exemplo"
    },
    {
        topiccod: 4,
        title: "uiofdhgidhgidfg",
        time: "2023-03-05T00:00:02",
        author: 3,
        section: "Exemplo"
    },
    {
        topiccod: 5,
        title: "firfiosdiofhsaidfg",
        time: "2023-08-03T00:00:02",
        author: 1,
        section: "Exemplo"
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

export {topicInfo, user, flairHolder, flair}