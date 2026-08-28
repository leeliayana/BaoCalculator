function calc(){

let total=0;

let a4copy=Number(document.getElementById("a4copy").value);
let a3copy=Number(document.getElementById("a3copy").value);

let a4bw=Number(document.getElementById("a4bw").value);
let a410=Number(document.getElementById("a410").value);
let a450=Number(document.getElementById("a450").value);
let a4100=Number(document.getElementById("a4100").value);
let a3bw=Number(document.getElementById("a3bw").value);


if(a4copy<=5) total+=a4copy*0.20;
else if(a4copy<=10) total+=(5*.20)+(a4copy-5)*.10;
else total+=(5*.20)+(5*.10)+(a4copy-10)*.05;


if(a3copy<=10) total+=a3copy*.50;
else total+=(10*.50)+(a3copy-10)*.30;


if(a4bw<=10) total+=a4bw*.50;
else total+=(10*.50)+(a4bw-10)*.30;


if(a410<=10) total+=a410*.80;
else total+=(10*.80)+(a410-10)*.60;


if(a450<=10) total+=a450*1.80;
else total+=(10*1.80)+(a450-10)*1.30;


if(a4100<=10) total+=a4100*3;
else total+=(10*3)+(a4100-10)*2;


if(a3bw<=10) total+=a3bw*1;
else total+=(10*1)+(a3bw-10)*.50;


document.getElementById("total").innerHTML=total.toFixed(2);

}


document.querySelectorAll("input").forEach(i=>{
i.addEventListener("input",calc);
});


function resetCalc(){
document.querySelectorAll("input").forEach(i=>i.value=0);
calc();
}

calc();
