const box = document.getElementById('grid-box');
const gameScore = document.getElementById('gameScore');
const result = document.getElementById('resultDisplay');
const btn = document.getElementById('resetButton');
let gameState = true;
var random = [];
let myBoxes = "";

function generateRandomArray() {
    random = [];
    for(let i=1; i<=10;){
        let rand = parseInt(""+((Math.random()*81)+1));
        if (!random.includes(rand)){
            random.push(rand)
            i++;
        }
    }
}



function generateMines() {
    myBoxes = "";
    for(let i = 1; i<=81; i++){
        let ids = "cell_"+i;
        myBoxes += "<div class='mines' id='"+ids+"'></div>";
    }
    box.innerHTML = myBoxes;
}



//Random Array
generateRandomArray();
//Generate Mines Boxes
generateMines();


console.log(random.length);


box.addEventListener('click', e=>{
    if (gameState){
        let score = parseInt(gameScore.innerText);
        let cid = e.target.id;
        cid = parseInt(cid.substr(5));


        if(random.includes(cid)){
            //Bomb mil gaya.. Game over..
            random.map(id=>{
                let bombBox = document.getElementById('cell_'+id)
                bombBox.style.backgroundColor = "red";
                bombBox.style.backgroundImage = "url('https://img.icons8.com/emoji/48/000000/bomb-emoji.png')";
            })
            //enable button
            result.innerText = 'Game Over';
            gameState = false;
            btn.removeAttribute('disabled')

        }else{
            //Score ++ bht sahi
            if(e.target.style.backgroundColor !== "lightgreen"){
                e.target.style.backgroundColor = "lightgreen";
                score++;
                gameScore.innerText = score;
            }

            //After score is 71 alert user
            if(score>=71){
                console.log('Ho gya')
                //enable button
                result.innerText = 'Win'
                gameState = false;
                btn.removeAttribute('disabled')
            }
        }
    }
})



function resetGame(){
    generateRandomArray();
    generateMines()
    result.innerHTML = "";
    gameState = true;
    gameScore.innerText = "0";
    btn.setAttribute('disabled', 'disabled');
}

let a = []
a.push(21)
a.push(22)
a.push(211)
console.log(a);