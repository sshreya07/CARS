const nextMove = document.getElementById('move');
const Exit = document.getElementById('quit');
const dist = document.getElementById('distance');
const petrolRem = document.getElementById('petrol');
const bg = document.getElementById('oil');
const fuel = document.getElementById('fuel');
bg.style.display = 'none';
fuel.style.display = 'none';

let startLocation = 0;
let endLocation = 100;
let prevStep = startLocation;
let nextStep = 0;
let totalDist = 0;
let mileage = 0.5;
let petrol = 50;
let petrolLeft = 0;
let refillAmount = 30;


nextMove.addEventListener("click",run);
Exit.addEventListener("click",quit);

function run(e){
    prevStep = prevStep + nextStep;
    nextStep = Math.floor((Math.random() * 6)+1);
    totalDist = nextStep + prevStep;
    petrolLeft = petrol - (nextStep*2)
    petrol = petrolLeft;

    if(totalDist === 6){
        petrol += refillAmount;
        bg.style.display ='block';
        fuel.style.display = 'block';

    }else if(totalDist === 15){
        petrol += refillAmount;
        bg.style.display ='block';
        fuel.style.display = 'block';

    }else if(totalDist === 27){
        petrol += refillAmount;
        bg.style.display ='block';
        fuel.style.display = 'block';

    }else if(totalDist === 36){
        petrol += refillAmount;
        bg.style.display ='block';
        fuel.style.display = 'block';

    }else if(totalDist === 55){
        petrol += refillAmount;
        bg.style.display ='block';
        fuel.style.display = 'block';

    }else if(totalDist === 65){
        petrol += refillAmount;
        bg.style.display ='block';
        fuel.style.display = 'block';

    }else{
        bg.style.display ='none';
        fuel.style.display = 'none';
    }


    if(petrol <= 0 ){
        console.log("Quit");
        alert("Game Over");
        window.location.assign("../index.html");


    }

    if(totalDist >= endLocation){
        alert("Bingo! You won, Replay");
        window.location.assign("../index.html");

    }

    dist.innerHTML = totalDist + ' Km';
    petrolRem.innerHTML = petrolLeft + ' L';

    e.preventDefault();
}

function quit(e){
    alert("you sure want to quit");
    window.location.assign("../index.html");

    e.preventDefault();
}