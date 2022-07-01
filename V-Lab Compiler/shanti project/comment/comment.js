function isComment(){
    var line = document.getElementById('inp').value;
    console.log(line);
    var regex = new RegExp("//.*", );
    var rex = regex.test(line);
    if(rex){
        document.getElementById('ans').innerHTML="It is a single-line comment";
        return;
    }
    var regexMul = new RegExp("/\\*.*?\\*/", );
    var rexmul = regexMul.test(line);
    if (rexmul)
    {
        document.getElementById('ans').innerHTML="It is a multi-line comment";
        return;
    }
 
    document.getElementById('ans').innerHTML="It is not a comment";
}

function setNull(){
    document.getElementById('inp').innerHTML="";
}