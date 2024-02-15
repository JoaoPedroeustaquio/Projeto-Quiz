const perguntas =[
            {
            pergunta: 'O que é JavaScript?',
            respostas: [
                "Uma linguagem de programação de servidor",
                "Uma linguagem de programação de banco de dados",
                "Uma linguagem de programação de cliente",
            ],
            correta: 2,
        },
        {
            pergunta: 'Qual é o operador utilizado para atribuição em JavaScript?',
            respostas: [
                "=",
                "==",
                ":=",
            ],
            correta: 0,
        },
        {
            pergunta: 'O que é uma variável em JavaScript?',
            respostas: [
                "Um tipo de dado",
                "Um operador lógico",
                "Um contêiner para armazenar valores",
            ],
            correta: 2,
        },
        {
            pergunta: 'Como você declara uma função em JavaScript?',
            respostas: [
                "function minhaFuncao()",
                "declare função minhaFuncao()",
                "função minhaFuncao()",
            ],
            correta: 0,
        },
        {
            pergunta: 'Qual é a finalidade do método "querySelector" em JavaScript?',
            respostas: [
                "Selecionar um elemento HTML por classe",
                "Selecionar um elemento HTML por id",
                "Selecionar um elemento HTML por tag",
            ],
            correta: 1,
        },
        {
            pergunta: 'O que é um loop "for" em JavaScript?',
            respostas: [
                "Uma declaração condicional",
                "Uma estrutura de repetição",
                "Um tipo de variável",
            ],
            correta: 1,
        },
        {
            pergunta: 'Qual é o resultado de 10 + "5" em JavaScript?',
            respostas: [
                "15",
                "105",
                "Erro",
            ],
            correta: 1,
        },
        {
            pergunta: 'O que é o conceito de "escopo" em JavaScript?',
            respostas: [
                "A visibilidade de uma variável em um bloco de código",
                "A cor de fundo de uma página web",
                "Um tipo de dado numérico",
            ],
            correta: 0,
        },
        {
            pergunta: 'Qual é a diferença entre "let" e "const" ao declarar variáveis em JavaScript?',
            respostas: [
                "Nenhuma, são sinônimos",
                "let é usado para variáveis que não mudam, const para variáveis mutáveis",
                "const é usado para variáveis que não mudam, let para variáveis mutáveis",
            ],
            correta: 2,
        },
        {
            pergunta: 'O que é o evento "click" em JavaScript?',
            respostas: [
                "Um operador lógico",
                "Um tipo de dado",
                "Uma ação do usuário ao clicar em um elemento HTML",
            ],
            correta: 2,
        },
];
const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas


for (const item of perguntas){
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for(let resposta of item.respostas){
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) =>{
            const estaCorreta = event.target.value == item.correta 
            corretas.delete(item)
            if(estaCorreta){
                corretas.add(item)
            }
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas   

        }    


        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()

    quiz.appendChild(quizItem)
}