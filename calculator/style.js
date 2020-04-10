function getHistory(){
    return getElementById("history-value").innerText

}
function printhisory(num){
    return getElementById("history-value").innerText=num
}
var number=document.getElementsByClassName("operator");
for(var i=0;i<number.length;i++)
{
        number[i].addEventListener('Click',function(){
            alert("The number clicked:"+this.id);
        }
}
