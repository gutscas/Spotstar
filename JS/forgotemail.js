function EmailValidation(){
    var Email=document.getElementById("mail").value 
    var flag1=false 
    var flag2=true
    for(var i=0;i<Email.length;i++){
        if(Email[i]=='@'){
            flag1=true
        }

        if((Email[i]>='A')&&(Email[i]<='Z')){
            flag2=false
        }
    }
    if((flag1==true)&&(flag2==true)){
       window.location.href="/HTML/forgot Otpvrify.html"
    }else{
        document.getElementById("error").innerHTML="*Incorrecr Email*"
    }
}