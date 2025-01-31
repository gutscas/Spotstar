function Next(){
    var choice=document.getElementById("language").value
    if(choice=='Tamil'){
        window.location.href="/HTML/movies.html"
    }else if(choice=='English'){
        window.location.href="/HTML/hollywood.html"
    }else{
        window.location.href='/HTML/malayalammovies.html'
    }
}