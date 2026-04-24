// callback, high order function, closure

function abc(a,b,callback){
    return a+mno();
}
function mno(g,p){
    return g*p;
}
console.log(abc(20,50,mno(5,10)));

