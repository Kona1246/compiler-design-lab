function isComment(){
    var str = document.getElementById('inp').value;
    // console.log(input);

    if (!((str[0] >= 'a' && str[0] <= 'z') || (str[0] >= 'A' && str[0] <= 'Z') || str[0] == '_')) {
        document.getElementById('ans').innerHTML = "It is not a Valid Identifier";
        return;
    }

    for (let i = 1; i < str.length; i++) {
        if (!((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'A' && str[i] <= 'Z') || (str[i] >= '0' && str[i] <= '9') || str[i] == '_')) {
            document.getElementById('ans').innerHTML = "It is not a Valid Identifier";
            return;
        }
    }

    document.getElementById('ans').innerHTML = "It is a Valid Identifier";

}

function setNull(){
    document.getElementById('inp').innerHTML="";
}