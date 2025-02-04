var button1 = document.getElementById("1")
var button2 = document.getElementById("2")
var button3 = document.getElementById("3")


var triangle = document.getElementById("triangle")
var circle = document.getElementById("circle")
var square = document.getElementById("square")


var div1 = document.getElementById("div1")
var div2 = document.getElementById("div2")
var div3 = document.getElementById("div3")


button1.onclick = function(){
    div1.setAttribute( "class","triangle" )
}
button2.onclick = function(){
    div2.setAttribute( "class","circle" )
}
button3.onclick = function(){
    div3.setAttribute( "class","square" )
}


div1.onclick = function(){
    div1.setAttribute( "class","hidden" )
}
div2.onclick = function(){
    div2.setAttribute( "class","hidden" )
}
div3.onclick = function(){
    div3.setAttribute( "class","hidden" )
}










