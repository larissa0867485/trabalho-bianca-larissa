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
    },
    {

         enuncido: "apos a elaboracao do trabalho, a professora ralizou umn debate entre a turma para entender como foi realizada a pesquisa"
        alternativas: [
             "defende a ideia de que a IA pode criar nova oportunidades de emprego e melhora habilidades humanas.",
            "me preoculpo com as pessoas que perderao eu empregos para maquinas e defendam a importancia de proteger os trabalhadores."
        ]
    },
    {

        enunciado:"ao final da discusao,voce precisou criar uma imagem n computador que representasse o que pensa obra AI.e agora",
        alternativas: [
            "criar uma imagem utilizando uma plataforma de desing como o paint.",
            "criar uma imagem utilizando gerador de imagem IA."
        ]
    },
    {
        enunciado: "voce tem um trabalho em grupo de biologia pra entregar na emana eguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu"
        alternativas: [
            "escrever comandos para o chat é uma forma de contribuir com o trabalho, por io não é um problema utilizar o texto inteiro.",
            "o chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda maquina erra, por iso revisar o trabalho e contribuir com o grupo."
        ]
    }
];

let atual = 0;
let perguntaatual;

function mostrapergunta(){
    perguntaatual = perguntas[atual];
    caixaperguntas.textcontent = perguntaatual.enunciado;
}
mostrapergunta();
