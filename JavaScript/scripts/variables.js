var x = 10;
var y = 15;
var z = x + y;

/* 
Rules for identifiers:
 * Names can contain letter, digits, underscores and dollar signs.
 * Names must begin with a letter.
 * Names are case sensitive (y an Y are different).
 * Reserved words cannot be used as names.
*/
document.getElementById("demo").innerHTML = z;
/*
    Order Precedence: 
    Brackets, Exponents, Division, Mulitiplication, Addition, Substraction.
*/
document.getElementById("demo2").innerHTML = (5 +5)*2;