const caixaprincipal = document.querySelector(".caixa-principal");
const caixaperguntas = document.querySelector(".caixa-perguntas");
const caixaalternativas = document.querySelector("caixa-alternativas");
const caixareultado = document.queryselector("caixa-resultado");
const textoresultado = document.queryselector("texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você  depara com uma nova tecnologia, um chat que consegue responder toda as duvidas que uma pesoa faz"
        alternativa: [
            "Isso é assutador!",
            "Isso é maravilhoso!"
        ]
    },
    {
        enunciado: "com a descoberta esta tecnologia, chamada Inteligencia Artificial (IA), uma professora de texcnologia da escola decidiu fazer"
        alternativa:[
            "Utiliza uma ferramenta de busca na internet que utilizava IA para que ela ajude a encontrar informaçoes relevante para o trabalho"
            "Escreve o trabalho com base nas coonversas que teve com colegas, algumas pesquias na internet e conhcimentos proprios sobre o tema"
        ]
    }
]
