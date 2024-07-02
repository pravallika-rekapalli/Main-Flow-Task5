function display(value){
    document.getElementById("display-output").value += value;
}

function Clear(){
    document.getElementById("display-output").value = "";
}

function del(){
    document.getElementById("display-output").value = document.getElementById("display-output").value.slice(0, -1);
}
function Calculate(){
    try{
        document.getElementById("display-output").value = eval(document.getElementById("display-output").value);
    }
    catch(error){
        document.getElementById("display-output").value = "Error";
    }
}