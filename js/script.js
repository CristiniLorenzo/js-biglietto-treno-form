// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
const generateButton = document.querySelector('#generate-button');
generateButton.addEventListener('click', function () {
    {
        // leggo i valori degli input
        const userName = document.querySelector('.user-name').value;
        const userAge = parseInt(document.querySelector('.user-age').value);
        console.log(userName);
        // calcolo del prezzo base
        const userKm = parseInt(document.querySelector('.userKm').value);
        const basePrice = userKm * 0.21
        // console.log(basePrice)
    
        // calcolo dello sconto 
        let calcDiscount;
        if (userAge <= 18) {
            calcDiscount = basePrice * 20 / 100;
        }
        else if (userAge >= 65) {
            calcDiscount = basePrice * 40 / 100;
        }

        // calcolo prezzo finale 
        let finalPrice = basePrice - calcDiscount;
        let fixedPrice = finalPrice.toFixed(2);

        // stampo il biglietto 

        // nome
        const userNameGenerator = document.querySelector('#user-name-genarator')
        userNameGenerator.innerHTML =  userName;

        // carrozza 
        const coach = document.querySelector('#coach');
        const coachGenerator = Math.floor(Math.random()*35)+1;
        coach.innerHTML = coachGenerator;

        // codice CP 
        const cpCode = document.querySelector('#code');
        const codeGenerator = Math.floor(Math.random()*99999)+1;
        cpCode.innerHTML = codeGenerator;

        // costo del biglietto stampato 
        const ticketFinalPrice = document.querySelector('#final-price');
        const ticketPriceGenerator = fixedPrice;
        ticketFinalPrice.innerHTML = '€' + ticketPriceGenerator;
            }
}
);