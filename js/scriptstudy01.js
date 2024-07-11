//comments
//alert(2 + 2)
//alert(input)
//const mensagem = "Boa noite ou bom dia"
//alert(mensagem)

// Object{}
const atividade = {
    nome: "Almoço",
    data: new Date("2024-07-08 10:00"),
    //finalizada: false
    finalizada: true
}
//List, Array, Vector[]
const atividades = [
    atividade,
    {
        nome: 'Musculação',
        data: new Date("2024-07-09 14:00"),
        //finalizada: false
        finalizada: true
    },
    {
        nome: 'Programar',
        data: new Date("2024-07-09 16:00"),
        //finalizada: false
        finalizada: true
    },
]

//Arrow Function
//const criarItemDeAtividade = () => {
const criarItemDeAtividade = (atividade) => {
    //return 'alo'
    let input = '<input type="checkbox" '
    if(atividade.finalizada) {
        //input = input + 'checked'
        input =+ 'checked'
    }
    //input = input + '>'
    input =+ '>'
    return `
        <div>
            <span>${atividade.nome}</span>
            <time datetime="">${atividade.data}</time>
        </div>
    `
}

const section = document.querySelector('section')
//section.innerHTML = 'Alo'
//section.innerHTML = criarItemDeAtividade()
//section.innerHTML = criarItemDeAtividade(atividade)
//section.innerHTML = criarItemDeAtividade(atividades[1])
for(let atividade of atividades){
    //section.innerHTML = criarItemDeAtividade()
    //section.innerHTML = section.innerHTML + criarItemDeAtividade()
    section.innerHTML += criarItemDeAtividade()
}