let text_entry = document.querySelector(".text_entry");
let result_entry = document.querySelector(".text_result");
let copy_button = document.querySelector(".copy_button");

function fnShowElements(value){
    result_entry.value = value;
    result_entry.style.color = "black";
    copy_button.style.color = "white";
    copy_button.style.backgroundColor = "cadetblue";
}

function fnEncrypt(){
    let word = text_entry.value.toLowerCase();
    text_entry.value = word;
    let encrypted_word = "";
    for(var i=0; i < word.length; i++){
        if(word[i] == "a"){
            encrypted_word += "ai";
        }
        else if(word[i] == "e"){
            encrypted_word += "enter";
        }
        else if(word[i] == "i"){
            encrypted_word += "imes";
        }
        else if(word[i] == "o"){
            encrypted_word += "ober";
        }
        else if(word[i] == "u"){
            encrypted_word += "ufat";
        }
        else{
            encrypted_word += word[i];
        }
    }
    fnShowElements(encrypted_word);
}

function fnDecrypt(){
    let word = text_entry.value.toLowerCase();
    text_entry.value = word;
    let decrypted_word = word.replace(/ai|enter|imes|ober|ufat/g, function(string){
        if(string == "ai"){
            return "a";
        }
        else if(string == "enter"){
            return "e";
        }
        else if(string == "imes"){
            return "i";
        }
        else if(string == "ober"){
            return "o";
        }
        else if(string == "ufat"){
            return "u";
        }
        else{
            return string;
        }
    });
    fnShowElements(decrypted_word);
}

function fnCopy(){
    let result = result_entry.value;
    let x_element = document.createElement("textarea");
    x_element.value = result;
    document.body.appendChild(x_element);
    x_element.select();
    document.execCommand("copy");
    document.body.removeChild(x_element);
    alert(`Copied: ${result}`);
}
