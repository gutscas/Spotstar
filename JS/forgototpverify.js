var GeneratedOTP=Math.floor(Math.random()*999999)
alert(GeneratedOTP)
function OTPVerification(){
    var EnteredOTP=document.getElementById("otp").value 
    if(GeneratedOTP==EnteredOTP){
        window.location.href="/HTML/forgot setnewpass.html"
    }else{
        document.getElementById("error").innerHTML="*Incorrect OTP*"
    }
}
function ResendOTP(){
    window.location.href="/HTML/forgot Otpvrify.html"
}