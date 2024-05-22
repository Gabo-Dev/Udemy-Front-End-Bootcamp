/*
These elements allow us to execute an action contained within a block of code if certain
conditions are achive
*/
var score = 65;

if(score < 50 ){
    document.write("F");
}
else if(score < 70){
    document.write("D");
}
else if(score < 80){
    document.write("C");
}
else if(score < 90){
    document.write("B");
}
else if(score < 100){
    document.write("A");
}
else{
    document.write("Score must be less than 100.")
}
/*
    Cmp Operators:
    == equal to
    === equal value  & equal type
    != not equal
    > greater than 
    < less than
    >= greater than or equal to
    <= less than or equal tos

*/