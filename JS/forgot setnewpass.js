function PasswordValidation(){
    var Password=document.getElementById("pass").value 
    var PasswordFlag=false
var Upper=0
var Lower=0
var Num=0
var Special=0
for(var i=0;i<Password.length;i++){
    if((Password[i]>='A')&&(Password[i]<='Z')){
        Upper++
    }else if((Password[i]>='a')&&(Password[i]<='z')){
        Lower++
    }else if((Password[i]>='0')&&(Password[i]<='9')){
        Num++
    }else{
        Special++
    }
}
if((Password.length>=8)&&(Password.length<=16)&&(Upper>=1)&&(Lower>=1)&&(Num>=1)&&(Special>=1)){
     PasswordFlag=true
}else{
    document.getElementById("pass1").innerHTML="Minimum 8-16 charcter,1-Uppercase,1-Lowercase,1-Number,1-Specialsymbol,"
}

// Confirm Password
var ReEnteredPassword=document.getElementById("confirm").value 
var ConfirmFlag=false
if(Password==ReEnteredPassword){
    ConfirmFlag=true
}else{
    document.getElementById("confirm1").innerHTML="Pasword Should be same"
}
//final password
if( PasswordFlag==true&&ConfirmFlag==true){
window.location.href="/HTML/forgot updatesucces.html"
}else{
     document.getElementById("error").innerHTML="*Invalid Password*"
}
}