<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Get the current date</title>
</head>
<body>
</body>
</html>



var curday = function(sp){
today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //As January is 0.
var yyyy = today.getFullYear();

if(dd<10) dd='0'+dd;
if(mm<10) mm='0'+mm;
return (mm+sp+dd+sp+yyyy);
};
console.log(curday('/'));
console.log(curday('-'));