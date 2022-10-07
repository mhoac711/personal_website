function leftShift(proj1,proj2,proj3){
    if(proj1.style.display == "flex"){
        proj3.style.display = "flex";
        proj1.style.display = "none";
    }
    else if(proj3.style.display == "flex"){
        proj2.style.display = "flex";
        proj3.style.display = "none";
    }
    else{
        proj2.style.display = "none";
        proj1.style.display = "flex"
    }
}