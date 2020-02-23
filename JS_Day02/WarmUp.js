


function palindromeTest(str){
    var result = "";
    if(typeof str == "string"){
        for(var i = str.length-1; i>=0; i--){
            result = result.concat(str.charAt(i));
        }
        if(result==str){
            return true;
        }
    } return false;
}
console.log(palindromeTest("Yusuf"));

console.log("===============================================");

// "AABBCC" ==> "ABC"

function removeDuplicate(str){
    var nonDuplicate = "";
    if(typeof str == "string"){
        for(var i = 0; i<str.length; i++){
            if(!nonDuplicate.includes(str.charAt(i))){
                nonDuplicate = nonDuplicate.concat(str.charAt(i));
            }
        }
    }
    return nonDuplicate
}

console.log(removeDuplicate("yusuf"));