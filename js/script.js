
/*

Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
# MILESTONE 1
Prepariamo l'HTML ed il CSS per ottenere il risultato grafico che vediamo nell'immagine allegata.
#MILESTONE 2
Rimuoviamo le celle che abbiamo inserito nell'HTML in modo da generarle tramite JS. Al click del bottone play, vengono generate 100 celle in 10 righe da 10 celle ciascuna.
#MILESTONE 3
In ogni cella, deve comparire il numero corrispondente, in ordine da 1 a 100;
#MILESTONE 4
Al click sulla cella, stampiamo il numero della cella cliccata in console, poi coloriamo la cella d'azzurro!
# BONUS
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
Note:
- questo bonus richiederà un evento diverso dal 'click'
- questo bonus richiederà una riflessione extra per quel che riguarda il calcolo della larghezza delle celle 




*/

//creazione funzione 


function createCell() {

    const cell = document.createElement('div');
    cell.className = 'cell';
    return cell; //restituisce la cella 
}








//milestone 2 

//fase di preparazione recupero griglia 


const grid = document.getElementById('grid');

//impostazioni iniziali 

const row = 10;
const cols = 10;
const totalCells = row * cols; //variabile per la centralizzazione 


//fase di elaborazione 

for (let i = 0; i < totalCells; i++) {
    //creo una cella 

    const cell = createCell();

    //inserisco la cella in pagina 
    //gestione al click della cella 

    cell.addEventListener('click', function () {
        //mile stone 4 
        console.log(`${i}`);

        cell.classList.add('clicked');






    })
    grid.appendChild(cell);

}







