const brain  = require('brain.js')


let net = new brain.NeuralNetwork({
 
  hiddenLayers: [400],
  iterations: 2000,
  learningRate: 0.5
});
let trainedNet;
let longest;
train(getTrainingData());

start("j'aime bien la kro 0%")





function start (string) {
    let answer
   let results =  trainedNet(encode(adjustSize(string)));
    if (results.nicolas > results.greug) {
        answer = 'Nicolas'
        certainty = Math.floor(results.nicolas* 100)
    } 
    else {
        certainty = Math.floor(results.greug * 100)
        answer = 'Greug'
    }
   console.log(`Je suis sûr à ` + certainty + '% que ce message provient de ' + answer)
}

function train(data) {
    net.train(processTrainingData(data), {
      hiddenLayers: [400],
      iterations: 2000,
      learningRate: 0.4
        
    });
    trainedNet = net.toFunction();
}

function encode(arg) {
    return arg.split('').map(x => (x.charCodeAt(0) / 400));
}

function processTrainingData(data) {
    const processedValues = data.map(d => {
        return {
            input: encode(d.input),
            output: d.output
        }
    });
  
    return processedValues;
}

function getTrainingData() {
	const trainingData = [
        {
          input : "Non mais les bro soyez agiles !",
         output : { greug: 1}
        },
        {
          input : "je me souviens à capgemini..",
         output : { greug: 1}
        },
        {
          input : "Non mais il sait pas ce qu'il dit..",
         output : { nicolas: 1}
        },
        {
          input : "sans alcool ?",
         output : { greug: 1}
        },
        {
          input : "Non mais tu comprends pas le design..",
         output : { nicolas: 1}
        },
      
        {
          input : "Non mais tu comprends pas ce que je veux dire",
         output : { nicolas: 1}
        },
        {
          input : "alors pour le dojo de ce matin..",
         output : { greug: 1}
        },
        {
          input : "mais VISEZ le CDI",
         output : { greug: 1}
        },
        {
          input : "Alors l'agilité c'est quand même vachement bien parce que",
         output : { greug: 1}
        },
        {
          input : "Non mais les bros..",
         output : { greug : 1}
        },
        {
            input : "Non mais nous on a tout bien fait mais c'est la faute de greg..",
           output : { nicolas: 1}
        },
      {
        input : "Moi je suis là je fais des trucs et greg il casse tout",
       output : { nicolas: 1}
      },
      {
        input : "alors moi je suis pas censé vous le dire mais..",
       output : { greug : 1}
      },
      {
        input : "j'aime la bière",
       output : { greug : 1}
      },
      {
        input : "et la bière  ?",
       output : { greug : 1}
      },
      {
        input : "Vieux garçons ?",
       output : { greug : 1}
      },
      {
        input : "relou",
       output : { nicolas: 1}
      },
      {
        input : "David en dessous de 70k il leur répond même pas aux recruteurs",
       output : { nicolas: 1}
      },
      { input : "Mais si tu rangeais ta chaise aussi...",
    output : { nicolas: 1}
  },
  {input: " la présentation de mongodb se fera vers 11H coté Angular ",
output : { greug : 1}
},
{input: " je prévoie de faire une intervention mongodb ce vendredi matin. Qui serait intéressé ? ",
output : { greug : 1}
},
{input: "Attention à bien merger toutes vos modifications afin de présenter un projet fonctionnel* !!",
output : { greug : 1}
},
{input: "  ils vous restent 2h30 !!! ",
output : { greug : 1}
},
{input: " Attention à bien préparer la présentation/ppt, vous avez 3-5 min maximum",
output : { greug : 1}
},
{input: " à 14H on commence les prez !",
output : { greug : 1}
},
{input: "  un vestige du hackaton",
output : { greug : 1}
},
{input: "c'est le hackaton d'april lavigne",
output : { greug : 1}
},
{input: " semble til... même si les années passent...",
output : { greug : 1}
},
{input: "je suis plutôt pain au raisin...",
output : { greug : 1}
},
{input: "gq ? connais pas",
output : { greug : 1}
},
{input: "ha oui ca prend du sens maintenant",
output : { greug : 1}
},
{input: "avec tout ça j'ai oublié de vous dire que la correction du checkpoint est en ligne ici",
output : { greug : 1}
},
{input: "Pokeymon, merci de revoir votre PR avec l\'eslint J\'ai ouvert des issues sur les problèmes rencontrés. Vous pouvez les régler post PR.",
output : { greug : 1}
},
{input: "Dojo du 16 mai",
output : { greug : 1}
},
{input: "expédition en ligne",
output : { greug : 1}
},
{input: "Yes je ferai ça demain matin",
output : { greug : 1}
},
{
  input : "eh ouais j'suis un fantôme",
 output : { nicolas: 1}
},
{
  input : "j'suis même pas inscris à l'école, je suis juste les cours comme ça",
 output : { nicolas: 1}
},
{
  input : "fait voir ton résultat plutôt",
 output : { nicolas: 1}
},
{
  input : "Là tu utilises un truc existant ?",
 output : { nicolas: 1}
},
{
  input : "à mon avis faut que tu regardes sur la doc",
 output : { nicolas: 1}
},{
  input : "ça doit être prévu dans le composant",
 output : { nicolas: 1}
},
{
  input : "ça veut dire qu'il est pas disponible",
 output : { nicolas: 1}
},
{
  input : "ce que tu veux c'est un active mais c'est pas un style",
 output : { nicolas: 1}
},
{
  input : "ah ouais ton handle click il gère pas ça",
 output : { nicolas: 1}
},
{
  input : "Je sais pas si c'est la meilleure solution, je pense qu'il y a plus simple",
 output : { nicolas: 1}
},

      ];
      
      
    
    
  longest = trainingData.reduce((a, b) =>
    a.input.length > b.input.length ? a : b).input.length;
  for (let i = 0; i < trainingData.length; i++) {
    trainingData[i].input = adjustSize(trainingData[i].input);
  }
  return trainingData;
}

function adjustSize(string) {
  while (string.length < longest) {
    string += ' ';
  }
  return string;  
}