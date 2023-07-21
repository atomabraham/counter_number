let counter=document.querySelector('.counter').innerHTML
let inputNumber=document.querySelector('.inputNumber').value
let addition=document.querySelector('.addition')
let withdraw=document.querySelector('.withdraw')
let reset=document.querySelector('.reset')
let result=0

//addition
addition.addEventListener('click',function(){
    inputNumber=document.querySelector('.inputNumber').value
    result=parseInt(counter)+parseInt(inputNumber)
    counter=document.querySelector('.counter').innerHTML=result
    //counter.innerText=result
    //alert(result)
})

//soustraction
withdraw.addEventListener('click',function(){
    inputNumber=document.querySelector('.inputNumber').value
    result=parseInt(counter)-parseInt(inputNumber)
    counter=document.querySelector('.counter').innerHTML=result
    //counter.innerText=result
    //alert(result)
})

//reset button

reset.addEventListener('click',function(){
    counter=document.querySelector(".counter").innerHTML=0
})
