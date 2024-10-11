const caixaprincipal = document.querySelector(".caixa-principal");
const caixaperguntas = document.querySelector(".caixa-perguntas");
const caixaalternativas = document.querySelector("caixa-alternativas");
const caixareultado = document.queryselector("caixa-resultado");
const textoresultado = document.queryselector("texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você  depara com uma nova tecnologia, um chat que consegue responder toda as duvidas que uma pessoa pode ter, ele tambem gera imagen e audio hipr-realistas. Qual o primeiro pensamento?",
        alternativa: [
          {
            texto: "Isso é assutador!",
           afirmacao: "afirmção"
          },
          {
            texto: "Isso é maravilhoso!",
            afirmacao: "afirmação"
          }

        ]
    },
    {
        enunciado: "com a descoberta esta tecnologia, chamada Inteligencia Artificial (IA), uma professora de texcnologia da escola decidiu fazer uma sequencia de aulas sobre esta tecnologia. No fim de uma aula ela pede que voce escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude voce toma?"
        alternativa:[
            {
           texto: "Utiliza uma ferramenta de busca na internet que utilizava IA para que ela ajude a encontrar informaçoes relevante para o trabalho e explique numa linguagem que facilite o entendimento.",
            afiirmacao: "afirmação"
            },
           {
            texto: "ecreve o trabalho com base nas converas que teve com colegas, algumas pesquisas na internet e conhecimentos proprios sobre o tema",
            afirmacao: "afirmação"
           },
        ]
    },
    {
         enuncido: "apos a elaboracao do trabalho, a professora ralizou umn debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa tambem foi levantando um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como voce se posiciona?",
        alternativas: [
            texto: "defende a ideia de que a IA pode criar nova oportunidades de emprego e melhora habilidades humanas.",
            afirmacao: "me preoculpo com as pessoas que perderao eu empregos para maquinas e defendam a importancia de proteger os trabalhadores."
        
    },
    {

        enunciado:"ao final da discusao,voce precisou criar uma imagem n computador que representasse o que pensa obra AI.e agora",
        alternativas: [
            texto: "criar uma imagem utilizando uma plataforma de desing como o paint.",
            afirmacao: "criar uma imagem utilizando gerador de imagem IA."
        
    },
    {
        enunciado: "voce tem um trabalho em grupo de biologia pra entregar na emana eguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu"
        alternativas: [
            texto: "escrever comandos para o chat é uma forma de contribuir com o trabalho, por io não é um problema utilizar o texto inteiro.",
            afirmacao:"o chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda maquina erra, por iso revisar o trabalho e contribuir com o grupo."
        
    }
];

let atual = 0;
let perguntaatual;

function mostrapergunta(){
    perguntaatual = perguntas[atual];
    caixaperguntas.textcontent = perguntaatual.enunciado;
}
mostrapergunta();
 {

function mostraAltrnativas(){
    for(cont alternativa of perguntaatual.alternatias)
       const botaoAlternativas=document.createElement("botton")
       botaoAlternativas.textcontent=alternativas.texto;
       botaoAlternativas.addEventListener("click",()=>) repostaSelecionada(alternativa);
       caixaalternativas.appendChild(botaoAltrnativas);
    }  
 }
 function respostaelecionada(opcaoselecionada){
    cont afirmacoes=opcaoselecionada.afirmacoes;
    histoiafinal=afirmacoes;
    atual++;
    mostrapergunta();
 }

 mostrapergunta();
