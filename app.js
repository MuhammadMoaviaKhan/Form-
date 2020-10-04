function myFun(){
    var a = document.getElementById("Password").value;
    if(a==""){
        document.getElementById("massages").innerHTML="**Please Fill Password ";
        return false;
    }
}

function savedata(){
    var name  = getElementById("mail");
    var roll = getElementById("password");

    var student = {
        name : name.value,
        roll: roll.value
    }
    firebase.database().ref("student").set(student)
} 