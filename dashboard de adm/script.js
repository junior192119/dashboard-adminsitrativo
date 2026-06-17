let opcoes = window.document.getElementById('opcoes')
let receitas = window.document.getElementById('receitas') 
let despesas = window.document.getElementById('despesas')
let lucros = window.document.getElementById('lucros')

const valores = [
    {
        receita: 100820,
    
    },

    {
        despesa: 18200,
    },

    {
        lucro: 82620
    }
]


receitas.innerHTML = `${valores[0].receita.toLocaleString("pt-BR",{
    style: 'currency',
    currency: "BRL"
})}`
despesas.innerHTML = `${valores[1].despesa.toLocaleString("pt-BR",{
    style: 'currency',
    currency: "BRL"
})}`
lucros.innerHTML = `${valores[2].lucro.toLocaleString("pt-BR",{
    style: "currency",
    currency: "BRL"
})
}`

