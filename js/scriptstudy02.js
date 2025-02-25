//Biblioteca
const formatador = (data) => {
    //console.log(dayjs(data).format(''))
    return {
        //dia: dayjs(data).format('dddd')
        dia: {
            numerico: dayjs(data).format('DD'),
            semana: {
                curto: dayjs(data).format('ddd'),
                longo: dayjs(data).format('dddd'),
            }
        },
        mes: dayjs(data).format('MMMM'),
        hora: dayjs(data).format('HH:mm')
    }
}
//formatador(new Date(''))

// Object{}
const atividade = {
    nome: "Almoço",
    data: new Date("2024-07-08 10:00"),
    finalizada: true
}

//List, Array, Vector[]
let atividades = [
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

atividades = []

const criarItemDeAtividade = (atividade) => {
    let input = `
    <input onchange="concluirAtividade(event)" value="${atividade.data}" type="checkbox"
    `
    
    if(atividade.finalizada) {
        input += 'checked'
    
    }

    input += '>'

    const formatar = formatador(atividade.data);

    return `
        <div>
        ${input}
            <span>${atividade.nome}</span>
            <time datetime="">${formatar.dia.semana.longo}, dia ${formatar.dia.numerico} de ${formatar.mes} às ${formatar.hora}h </time>
        </div>
    `
}

const atualizarListaDeAtividades = () => {
    const section = document.querySelector('section')
    section.innerHTML = ''

    //Verificar: Listas tá vazia
    if(atividades.length == 0) {
        section.innerHTML = `<p>Nenhuma atividade cadastrada.</p>`
        return
        //return é pra não persistir dps de ser consultado
    }
    for(let atividade of atividades){
    
        section.innerHTML += criarItemDeAtividade(atividade)
    }
}

atualizarListaDeAtividades()

const salvarAtividade = (event) => {
    event.preventDefault()
    const dadosDoFormulario = new FormData(event.target)

    const nome = dadosDoFormulario.get('atividade')
    const dia = dadosDoFormulario.get('dia')
    const hora = dadosDoFormulario.get('hora')
    const data = `${dia} ${hora}`

    const novaAtividade = {
        //nome: nome,
        //data: data,
        nome,
        data,
        finalizada: false
    }

    const atividadeExiste = atividades.find((atividade) => {
        return atividade.data == novaAtividade.data
    })

    if(atividadeExiste) {
        return alert('Dia/Hora não disponivel')
    }

    atividades = [novaAtividade, ...atividades]
    atualizarListaDeAtividades()
}

const criarDiasSelecao = () => {
    const dias = [
        "2024-02-28",
        "2024-02-29",
        "2024-03-01",
        "2024-03-02",
        "2024-03-03",
    ]

    let diasSelecao = ''

    for(let dia of dias) {
        const formatar = formatador(dia)
        const diaFormatado = `
        ${formatar.dia.numerico} de ${formatar.mes}
        `
        diasSelecao += `
        <option value="${dia}">${dia}</option>
        `
    }

    document.querySelector('select[name="dia"]').innerHTML = diasSelecao
}
criarDiasSelecao()

const criarHorasSelecao = () => {
    let horasDisponiveis = ''

    for (let i = 6; i < 23; i++) {
        const hora = String(i).padStart(2, '0')
        horasDisponiveis += `<option value="${hora}:00">${hora}:00</option>`
        horasDisponiveis += `<option value="${hora}:30">${hora}:30</option>`
    }

    document
    .querySelector('select[name="hora"]')
    .innerHTML = horasDisponiveis
}
criarHorasSelecao()

const concluirAtividade = (event) => {
    const input = event.target
    const dataDesteInput = input.value

    const atividade = atividades.find((atividade) => {
        return atividade.data == dataDesteInput
    })

    if(!atividade) {
        return
    }

    atividade.finalizada = !atividade.finalizada
}