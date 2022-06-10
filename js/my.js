const scrollbtn= document.getElementById("top");

scrollbtn.addEventListener("click",()=>{
    document.documentElement.scrollTop =0;
});


var value =  window.location.hash.replace('#', '');

if(value != "About"){
    document.getElementById("top").style.display="block";
}else{
    document.getElementById("top").style.display="none";
}

$(window).on('hashchange', hashChangeHandler);

/**
* Actions to do when the hash (#) in the URL changes.
*/
function hashChangeHandler(){
    var value =  window.location.hash.replace('#', '');
    if(value != "About"){
        document.getElementById("top").style.display="block";
    }else{
        document.getElementById("top").style.display="none";
    }
    
}    