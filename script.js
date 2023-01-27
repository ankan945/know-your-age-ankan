function caldiff()
{
let date_1 = document.getElementById('bdate').value;
let date_2 = document.getElementById('cdate').value;
if(!date_2)
{
date_2=new Date();
}
let dob= new Date(date_1);
let cdate= new Date(date_2);
let diff= new Date(cdate.getTime()-dob.getTime());
let output=  document.getElementById('show');
output.id="show";
if(diff == NaN || !date_1)

{
output.innerHTML = "please select your date of birth!!!";
return;
}
if(date_1>date_2)
{
output.innerHTML = "invalid!!!";
return;
}
if(diff.getUTCMonth()==0 && Number(diff.getUTCDate()-1)==0 )
{
output.innerHTML = "<h2>Woww!!! Happy Birthday <br>Dear User</h2><br><marquee>Many Many returns of the day</marquee>"+"Age: "+" "+Number(diff.getUTCFullYear()-1970)+" years "+" "+diff.getUTCMonth() +" months "+" "+Number(diff.getUTCDate()-1) +" days ";
let audio = new Audio("badde.MPEG");
audio.play();
play.addEventListener("click");
return ;
}
output.innerHTML = "Age: "+" "+Number(diff.getUTCFullYear()-1970)+" years "+" "+diff.getUTCMonth() +" months "+" "+Number(diff.getUTCDate()-1) +" days ";
return ;
}
function comdiff()
{
let date_3 = document.getElementById('ydate').value;
let date_4 = document.getElementById('fdate').value;
let yn = document.getElementById('yname').value;
let fn = document.getElementById('fname').value;

let ydob= new Date(date_3);
let fdob= new Date(date_4);
let com3= new Date(ydob.getTime()-fdob.getTime());
let com4= new Date(fdob.getTime()-ydob.getTime());
let output=  document.getElementById('show2');
output.id="show2";
if(date_3>date_4)
{
output.innerHTML= fn+" is "+" "+Number(com3.getUTCFullYear()-1970)+" years "+" "+com3.getUTCMonth() +" months "+" "+Number(com3.getUTCDate()-1) +" days Older";
return;
}
else if(date_3<date_4)
{

output.innerHTML = yn+" is "+" "+Number(com4.getUTCFullYear()-1970)+" years "+" "+com4.getUTCMonth() +" months "+" "+Number(com4.getUTCDate()-1) +" days Older ";
return;
}
}