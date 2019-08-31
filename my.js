let who = ['Bachelet','Pinera','Jon Snow','Dr.House'];
let what = ['ate','destroyed','pooped on','stole'];
let avoid = ['the contract','my homework','my credit card','my laptop','my tesis'];
let when = ['5 minutes ago','last night','when I was sleeping','when I was in the bathroom','while I was praying'];
var msg = who[Math.floor(Math.random() * who.length)]+" "+ what[Math.floor(Math.random() * what.length)]+ " "+ avoid[Math.floor(Math.random() * avoid.length)]+ " "+ when[Math.floor(Math.random() * when.length)];
document.getElementById("excuse").innerHTML = msg;