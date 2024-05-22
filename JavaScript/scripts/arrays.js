var fruits = ["Apple","Orange","Pear","Grape","Tangerine","Mango"];
document.getElementById("demo").innerHTML = fruits[0];
// for output each element we cud use the string  method
document.getElementById("demo2").innerHTML = fruits.toString();
// toString() outputed by comas and join(" * ") separte each element 
// we also cud use the method splice to indicate where to start to add new elements
// we also cud sort elements using sort method,for example:
var cars = ["Volvo", "Acura", "Honda","Lexus"];
cars.sort();
document.getElementById("cars").innerHTML = cars.join(" ");
// we also cud combine arrays using method "concat"