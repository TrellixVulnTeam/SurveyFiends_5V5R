// IIFE -- Immediately Invoked Function Expression
(function(){

    function Start()
    {
        console.log("App Started...");
    }

    window.addEventListener("load", Start);

})();

//Get Questions Add page by title
if (document.title=="Add Questions"){
var countBox =1;
var boxName = 0;

function addQuestion()
{
var boxName="Question "+countBox; 
document.getElementById('responce').innerHTML+='<br/><input type="hidden" name="questionsNumber" value='+countBox+'><br/>';
document.getElementById('responce').innerHTML+='<br/><input type="text"  name="question" value=""<br/>';
countBox += 1;
    }
}
