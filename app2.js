let x = "1";
let y = "2";
let z = x+y;


document.getElementById('x').innerHTML = ' x est de type : ' + typeof x + '\n et sa valeur  est ' + x;
document.getElementById('y').innerHTML = ' y est de type : ' + typeof y + '\n et sa valeur  est ' + y;
document.getElementById('z').innerHTML = ' z est de type : ' + typeof z + '\n et sa valeur  est ' + z;

x = 1;
y = 2;
z = x+y;

document.getElementById('x2').innerHTML = ' x est de type : ' + typeof x + '\n et sa valeur  est ' + x;
document.getElementById('y2').innerHTML = ' y est de type : ' + typeof y + '\n et sa valeur  est ' + y;
document.getElementById('z2').innerHTML = ' z est de type : ' + typeof z + '\n et sa valeur  est ' + z;