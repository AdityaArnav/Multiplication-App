const random_num1= Math.ceil(Math.random()*20);
const random_num2= Math.ceil(Math.random()*10);
// console.log(random_num1);

const ques_elem = document.getElementById('question');
ques_elem.innerText = `What is ${random_num1} multiply by ${random_num2} ?`;

const answer = random_num1*random_num2;
const input_elem = document.getElementById("input");

let score =JSON.parse(localStorage.getItem("score"));
if(!score){
    score=0;
}
let score_elem = document.getElementById("score");
score_elem.innerText= `score: ${score}`
// let score=0;

const form_elem = document.getElementById("form");
form_elem.addEventListener("submit", (event)=>{
    // event.preventDefault()
    const userAns = +input_elem.value;
    // console.log(userAns, typeof userAns);
    if(userAns===answer){
        score++;      
        updateLocalStorage()
        // console.log(score)
    }
    else{
        score--;
        // console.log(score)
        updateLocalStorage()
    }
    
})
function updateLocalStorage(){
    localStorage.setItem('score', JSON.stringify(score));
}



















// function getFn(){
    
//     const random_num1= Math.ceil(Math.random()*20);
//     const random_num2= Math.ceil(Math.random()*10);



//     const ques_elem = document.getElementById('question');
//     ques_elem.innerText = `What is ${random_num1} multiply by ${random_num2} ?`;
//     const answer = random_num1*random_num2;
//     const input_elem = document.getElementById("input");
    
// }

// // console.log(random_num1);


// // let score=0;
// let score_elem = document.getElementById("score").innerText='Score:';


// const form_elem = document.getElementById("form");
// form_elem.addEventListener("submit", (event)=>{
//     getFn()
//     let score =JSON.parse(localStorage.getItem("score"));
//     event.preventDefault()
//     const input_elem = document.getElementById("input");
    
//     const random_num1= Math.ceil(Math.random()*20);
//     const random_num2= Math.ceil(Math.random()*10);
//     const userAns = +input_elem.value;
//     const answer = random_num1*random_num2;
//     // console.log(userAns, typeof userAns);
   

// if(!score){
//     score=0;
// }


   
//     if(userAns===answer){
//         score++;      
//         updateLocalStorage()
//         // console.log(score)
//     }
//     else{
//         score--;
//         // console.log(score)
//         updateLocalStorage()
//     }
//     // let score =JSON.parse(localStorage.getItem("score"));
//     score_elem.innerText= `score: ${score}`

//     function updateLocalStorage(){
//         localStorage.setItem('score', JSON.stringify(score));
//     }
// })

// getFn()