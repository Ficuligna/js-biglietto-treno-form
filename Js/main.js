// ES. di oggi:
// DOM Manipulation su variante EX  calcolo biglietto
// del treno
// DESCRIZIONE:
// Creo una versione dell’EX del biglietto del treno
//  ricca con un bell’output dinamico;
// Sulla base di quello visto insieme in aula, ma non
// per forza identico;
// L’importante è usare eventi sui 2 bottoni principali,
//  e sviluppare le logiche che sottendono;
// “Genera” mi calcolerà il prezzo del biglietto a
// partire dai dati inseriti negli input, e mi draà
// l’output in pagina, nel modo migliore possibile;
// “Annulla” mi fa tornare allo stato iniziale con
// output pulito (o nascosto) e campi puliti (non
//   vale fare refresh del browser :male-farmer:);


// Codice recuperato
var nome = document.getElementById('nome');
var age = document.getElementById('eta');
var km = document.getElementById('km');
var genera = document.getElementById('genera');
var annulla = document.getElementById('annulla');
var priceTic;
var valnome;
var valage;
var valkm ;

genera.addEventListener("click",
  function(){
    valnome = nome.value;
    valage = age.value;
    valkm = parseInt(km.value);
    priceTic = Math.floor((0.21 * valkm)*100)/100;
    document.getElementById("Offerta").innerHTML ="Biglietto Standard";

    if (valage == "minorenne") {
      priceTic = Math.floor((priceTic - (priceTic* 20 / 100))*100)/100;
      document.getElementById("Offerta").innerHTML ="Offerta silver";

    }else if (valage == "over65") {
      priceTic = Math.floor((priceTic - (priceTic* 40 / 100))*100)/100;
      document.getElementById("Offerta").innerHTML ="Offerta gold";

    }
    document.getElementById("nomepasseggero").innerHTML =valnome;
    document.getElementById("carrozza").innerHTML = (Math.floor(Math.random()*18 +1));
    document.getElementById("codice").innerHTML =(Math.floor(Math.random()*10000)+5600);
    document.getElementById("costobiglietto").innerHTML =priceTic +" €";
    document.getElementById('vendita').style.opacity = 1;

  }
)

annulla.addEventListener("click",
  function(){
    valnome = (nome.value= "");
    valage = (age.value= "minorenne");
    valkm = km.value="0.00";
    document.getElementById('vendita').style.opacity = 0.4;
    document.getElementById("nomepasseggero").innerHTML ="none";
    document.getElementById("carrozza").innerHTML = "none";
    document.getElementById("codice").innerHTML ="none";
    document.getElementById("costobiglietto").innerHTML ="0 €";
    document.getElementById("Offerta").innerHTML ="none";

  }
)
