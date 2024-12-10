var container=document.querySelector("div");
var career=["Iruzna Seratobi","jiraya","Minato Namikaze","Naruto Uzumaki","Kakashi Hatake"];

var careerIndex=0;
var characterIndex=0;

updateText();
function updateText(){
    characterIndex++;
    container.innerHTML=`
    <h1>I am ${career[careerIndex].slice(0,1)==="I"? "an":"a"} 
    ${career[careerIndex].slice(0,characterIndex)}</h1>`;

if(characterIndex===career[careerIndex].length){
    careerIndex++;
    characterIndex=0;
}

if(careerIndex===career.length){
    careerIndex=0;
}

setTimeout(updateText, 400);
} 