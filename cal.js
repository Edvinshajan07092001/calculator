function displayNum(n){
    result.value+=n
}
function allclear(){
    result.value=""
}
function evalexpr(){
     expr=result.value
     out=eval(expr)
     result.value=out
   //result.value=eval(result.value) 
}
function backspace(){
    cur_str=result.value
    result.value=cur_str.slice(0,-1)
}