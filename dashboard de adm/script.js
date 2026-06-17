let opcoes = window.document.getElementById('opcoes')
let receitas = window.document.getElementById('receitas') 
let despesas = window.document.getElementById('despesas')
let lucros = window.document.getElementById('lucros')

const valores = [
    {
        receita: 100.820,
    
    },

    {
        despesa: 18.200,
    },

    {
        lucro: 27.620
    }
]


receitas.innerHTML = `R$ ${valores[0].receita}`
despesas.innerHTML = `R$ ${valores[1].despesa}`
lucros.innerHTML = `R$ ${valores[2].lucro}`
;
