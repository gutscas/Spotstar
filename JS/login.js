function LOGIN(){
    var Email=document.getElementById("mail").value 
    var EmailFlag=false
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
        EmailFlag=true
    }


    // Password Validation
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
    }

    // Final Validation
    if((EmailFlag==true)&&(PasswordFlag==true)){
        window.location.href="/HTML1/welcome.html"
    }else{
        document.getElementById("error").innerHTML="*Username or Password Incorrect*"
    }
}
