//* TAG SEMÂNTICAS

const tagBody = document.querySelector('.body')
const tagHeader = document.querySelector(".header")
const tagH1 = document.querySelector(".tituloFonte")
const tagMain = document.querySelector(".main")
const tagFooter = document.querySelector(".footer")
const tagInput = document.querySelector("#input")
const tagButton = document.querySelector(".botao")
const secConteudo = document.querySelector(".sectionConteudo")
const tagArticle = document.querySelector(".article")
const tagUl = document.querySelector("#listaNaoOrdenada")
const tagsLi = document.querySelector('.estiloObjeto')
const tagLi1 = document.querySelector('.objeto1')
const tagLi2 = document.querySelector('.objeto2')
const tagLi3 = document.querySelector('.objeto3')
const tagLi4 = document.querySelector('.objeto4')
const tagLi5 = document.querySelector('.objeto5')

//* CÓDIGO JAVASCRIPT PROJETO

const arrayDeJogadores = []

const arrayDeLiga = []

//* FUNÇÃO DE CRIAR OBJETOS

function criarObjetos(img, logo, classe, player, posicao, time, altura, ganhouLiga, anoTitulo) {
    this.img = img
    this.logo = logo
    this.classe = classe
    this.player = player.toUpperCase()
    this.posicao = posicao
    this.time = time
    this.altura = altura
    this.ganhouLiga = ganhouLiga
    this.anoTitulo = anoTitulo
    arrayDeJogadores.push(this)
    this.ganhouLiga === true ? arrayDeLiga.push(this) : alert('Item não foi adicionado')
}

const jogador1 = new criarObjetos("./Imagens jogadores/LebronJames2k22.jpeg", "./Logo times/losangeleslakers.svg", ".objeto1" ,"LeBron James", "Ala-pivô/Ala", "Los Angeles Lakers", 2.06, true, [2012, 2013, 2016, 2020])
const jogador2 = new criarObjetos("./Imagens jogadores/StephenCurry2k22.jpeg", "./Logo times/goldenstatewarriors.svg",".objeto2", "Stephen Curry", "Armador", "Golden State Warriors", 1.88, true, [2015, 2017, 2018, 2022])
const jogador3 = new criarObjetos("./Imagens jogadores/GiannisAntetokom2k22.jpeg", "./Logo times/milwaukeebucks.svg",".objeto3","Giannis Antetokounmpo", "Ala-pivô/Ala/Pivô", "Milwaukee Bucks", 2.11, true, [2021])
const jogador4 = new criarObjetos("./Imagens jogadores/KevinDurant2k22.jpeg", "./Logo times/broklynnets.svg",".objeto4", "Kevin Durant", "Ala-pivô/Ala", "Brooklyn Nets", 2.08, true, [2017, 2018])
const jogador5 = new criarObjetos("./Imagens jogadores/JaysonTatum2k22.jpeg", "./Logo times/bostonceltics.svg",".objeto5", "Jayson Tatum", "Ala-pivô/Pivô/Ala", "Boston Celtics", 2.03, false, [0])

//* VARIÁVEL MÉDIA

let mediaAltura = 0

const funcaoMedia = (altura) => {
    for (i in altura) {
        mediaAltura += altura[i].altura
    }
    return mediaAltura /= altura.length
}

funcaoMedia(arrayDeJogadores)

console.log(mediaAltura.toFixed(2))

//* VARIÁVEL BOOLEANO

let booleano = jogador1.ganhouLiga && jogador2.ganhouLiga && jogador3.ganhouLiga && jogador4.ganhouLiga && jogador5.ganhouLiga

console.log(booleano)

//* DEVOLVE ARRAY DE OBJETO EM STRING

const arrayEmString = arrayDeJogadores.map((x) => {
    return {
        player: x.player,
        posicao: x.posicao,
        time: x.time,
        altura: x.altura,
        ganhouLiga: x.ganhouLiga,
        anoTitulo: x.anoTitulo.toString()
    }
})

//* CONFIGURAÇÃO TAGS HTML:

//* Cfg Título Principal

tagH1.innerHTML = "MVP Players"

//* Configuração TAG: button (Buscador)

function buscador() {
    let filtered = arrayDeJogadores.filter((x) => x.player.toUpperCase() === tagInput.value.toUpperCase())
    if (filtered.length >= 1) {
        return tagLi1.innerHTML = `
        <img class="fotosJogadores" src="${filtered[0].img}" alt="Imagem não suportada">
        <img class="iconeLogoTimes" src="${filtered[0].logo}" alt="Imagem não suportada">
        <p class="fonteTituloCard"><a target="_blank" href="https://www.nba.com/player/2544/lebron-james">${filtered[0].player}</a></p>
        <p class="fonteInformacaoCard">Posição: ${filtered[0].posicao}</br>
        Time: ${filtered[0].time}</br>
        Altura: ${filtered[0].altura}</br>
        Ano(s) em que foi campeão: ${filtered[0].anoTitulo}</br></p>
        `,
        tagInput.value = ""
    } else {
        alert('Não encontrado')
    }
}

//* Objetos: Jogadores

function homePage() {

    tagLi1.innerHTML = `
    <img class="fotosJogadores" src="./Imagens jogadores/LebronJames2k22.jpeg" alt="Lebron James">
    <img class="iconeLogoTimes" src="./Logo times/losangeleslakers.svg" alt="Lebron James">
    <p class="fonteTituloCard"><a target="_blank" href="https://www.nba.com/player/2544/lebron-james">${jogador1.player}</a></p>
    <p class="fonteInformacaoCard">Posição: ${jogador1.posicao}</br>
    Time: ${jogador1.time}</br>
    Altura: ${jogador1.altura}</br>
    Ano(s) em que foi campeão: ${jogador1.anoTitulo}</br></p>
    `

    tagLi2.innerHTML = `
    <img class="fotosJogadores" src="./Imagens jogadores/StephenCurry2k22.jpeg" alt="Stephen Curry">
    <img class="iconeLogoTimes" src="./Logo times/goldenstatewarriors.svg">
    <p class="fonteTituloCard"><a target="_blank" href="https://www.nba.com/player/201939/stephen-curry">${jogador2.player}</a></p>
    <p class="fonteInformacaoCard">Posição: ${jogador2.posicao}</br>
    Time: ${jogador2.time}</br>
    Altura: ${jogador2.altura}</br>
    Ano(s) em que foi campeão: ${jogador2.anoTitulo}</p></br>
    `

    tagLi3.innerHTML = `
    <img class="fotosJogadores" src="./Imagens jogadores/GiannisAntetokom2k22.jpeg" alt="Giannis Antetokom">
    <img class="iconeLogoTimes" src="./Logo times/milwaukeebucks.svg">
    <p class="fonteTituloCard"><a target="_blank" href="https://www.nba.com/player/203507/giannis-antetokounmpo">${jogador3.player}</a></p>
    <p class="fonteInformacaoCard">Posição: ${jogador3.posicao}</br>
    Time: ${jogador3.time}</br>
    Altura: ${jogador3.altura}</br>
    Ano(s) em que foi campeão: ${jogador3.anoTitulo}</br></p>
    `

    tagLi4.innerHTML = `
    <img class="fotosJogadores" src="./Imagens jogadores/KevinDurant2k22.jpeg" alt="Kevin Durant">
    <img class="iconeLogoTimes" src="./Logo times/broklynnets.svg">
    <p class="fonteTituloCard"><a target="_blank" href="https://www.nba.com/player/201142/kevin-durant">${jogador4.player}</a></p>
    <p class="fonteInformacaoCard">Posição: ${jogador4.posicao}</br>
    Time: ${jogador4.time}</br>
    Altura: ${jogador4.altura}</br>
    Ano(s) em que foi campeão: ${jogador4.anoTitulo}</br></p>
    `

    tagLi5.innerHTML = `
    <img class="fotosJogadores" src="./Imagens jogadores/JaysonTatum2k22.jpeg" alt="Jayson Tatum">
    <img class="iconeLogoTimes" src="./Logo times/bostonceltics.svg">
    <p class="fonteTituloCard"><a target="_blank" href="https://www.nba.com/player/1628369/jayson-tatum">${jogador5.player}</a></p>
    <p class="fonteInformacaoCard">Posição: ${jogador5.posicao}</br>
    Time: ${jogador5.time}</br>
    Altura: ${jogador5.altura}</br>
    Ano(s) em que foi campeão: ${jogador5.anoTitulo}</br></p>
    `
    tagFooter.innerHTML = `<p>Clique <a target="_blank" href="https://www.nba.com">aqui</a> para mais informações</p>`
}

function carregaConteudo() {
    
    tagLi1.innerHTML = `
    <img class="fotosJogadores" src="./Imagens jogadores/LebronJames2k22.jpeg" alt="Lebron James">
    <img class="iconeLogoTimes" src="./Logo times/losangeleslakers.svg" alt="Lebron James">
    <p class="fonteTituloCard"><a target="_blank" href="https://www.nba.com/player/2544/lebron-james">${jogador1.player}</a></p>
    <p class="fonteInformacaoCard">Posição: ${jogador1.posicao}</br>
    Time: ${jogador1.time}</br>
    Altura: ${jogador1.altura}</br>
    Ano(s) em que foi campeão: ${jogador1.anoTitulo}</br></p>
    `

    tagLi2.innerHTML = `
    <img class="fotosJogadores" src="./Imagens jogadores/StephenCurry2k22.jpeg" alt="Stephen Curry">
    <img class="iconeLogoTimes" src="./Logo times/goldenstatewarriors.svg">
    <p class="fonteTituloCard"><a target="_blank" href="https://www.nba.com/player/201939/stephen-curry">${jogador2.player}</a></p>
    <p class="fonteInformacaoCard">Posição: ${jogador2.posicao}</br>
    Time: ${jogador2.time}</br>
    Altura: ${jogador2.altura}</br>
    Ano(s) em que foi campeão: ${jogador2.anoTitulo}</p></br>
    `

    tagLi3.innerHTML = `
    <img class="fotosJogadores" src="./Imagens jogadores/GiannisAntetokom2k22.jpeg" alt="Giannis Antetokom">
    <img class="iconeLogoTimes" src="./Logo times/milwaukeebucks.svg">
    <p class="fonteTituloCard"><a target="_blank" href="https://www.nba.com/player/203507/giannis-antetokounmpo">${jogador3.player}</a></p>
    <p class="fonteInformacaoCard">Posição: ${jogador3.posicao}</br>
    Time: ${jogador3.time}</br>
    Altura: ${jogador3.altura}</br>
    Ano(s) em que foi campeão: ${jogador3.anoTitulo}</br></p>
    `

    tagLi4.innerHTML = `
    <img class="fotosJogadores" src="./Imagens jogadores/KevinDurant2k22.jpeg" alt="Kevin Durant">
    <img class="iconeLogoTimes" src="./Logo times/broklynnets.svg">
    <p class="fonteTituloCard"><a target="_blank" href="https://www.nba.com/player/201142/kevin-durant">${jogador4.player}</a></p>
    <p class="fonteInformacaoCard">Posição: ${jogador4.posicao}</br>
    Time: ${jogador4.time}</br>
    Altura: ${jogador4.altura}</br>
    Ano(s) em que foi campeão: ${jogador4.anoTitulo}</br></p>
    `

    tagLi5.innerHTML = `
    <img class="fotosJogadores" src="./Imagens jogadores/JaysonTatum2k22.jpeg" alt="Jayson Tatum">
    <img class="iconeLogoTimes" src="./Logo times/bostonceltics.svg">
    <p class="fonteTituloCard"><a target="_blank" href="https://www.nba.com/player/1628369/jayson-tatum">${jogador5.player}</a></p>
    <p class="fonteInformacaoCard">Posição: ${jogador5.posicao}</br>
    Time: ${jogador5.time}</br>
    Altura: ${jogador5.altura}</br>
    Ano(s) em que foi campeão: ${jogador5.anoTitulo}</br></p>
    `
    tagFooter.innerHTML = `<p>Clique <a target="_blank" href="https://www.nba.com">aqui</a> para mais informações</p>`
}