const quizdata=[
    { 
        question:'Q1. what is name of our country ?',
        a:'india',
        b:'pak',
        c:'nepal',
        d:'japan',
        correct:'a'
    },
    { 
        question:'Q2. largest state',
        a:'up',
        b:'mp',
        c:'ap',
        d:'maharastra',
        correct:'a'

    },
    {
    question:'Q3.smallest state',
    a:'up',
    b:'mp',
    c:'goa',
    d:'maharastra',
    correct:'c'
    }
];
const questions=document.getElementById('quest')
const atext=document.getElementById('a-text')
const btext=document.getElementById('b-text')
const ctext=document.getElementById('c-text')
const dtext=document.getElementById('d-text')
const submit=document.getElementById('submit');

let currentquiz=0;
loadquiz();
function loadquiz(){
    const currentquizdata=quizdata[currentquiz];

    questions.innerText=currentquizdata.question
    atext.innerText=currentquizdata.a
    btext.innerText=currentquizdata.b
    ctext.innerText=currentquizdata.c
    dtext.innerText=currentquizdata.d
}
submit.addEventListener('click',function (){
    currentquiz++;

        if (currentquiz< quizdata.length){

            loadquiz()
        }
        else{
            alert("quiz finished !!!")
        }
    
});