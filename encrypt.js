var fetchurl=window.location.href;
var str=fetchurl.split('?q=');
baseString=decodeURI(str[1]);
key=decodeURI(str[2]);
var encodedString = window.btoa( baseString );
document.write("ecrypted string is "+encodedString+"<br>") 
//just for testing please change the url address before working
var generatedUrl='file:///C:/Users/omegajohn/Desktop/dec.html'+'?q='+encodedString+'?q='+window.btoa(key);
document.write("<a href="+generatedUrl+">click here to decode the string</a>");
var decodedString = window.atob( encodedString ); 
console.log(generatedUrl.length)