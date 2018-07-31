var fetchurl=window.location.href;
var str=fetchurl.split('?q=');
var encodedString =str[1];
var key=window.atob(str[2]);
var userkey=str[3];
if(key!==undefined && key==userkey){
try{
var decodedString = window.atob( encodedString );
document.write("decrypted string is "+decodeURI(decodedString));
}
catch(e)
{
console.log(e);
document.write(e);
}
}
else{
(userkey===undefined)?alert("invalid user key"):alert('invalid key provided');
}

 