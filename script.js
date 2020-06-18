var btn = document.getElementById("btn1");
var input = document.getElementById("input1");
var word = document.getElementById("word");
btn.onclick = function(){
    var vals = input.value.split(' ');
    var val = vals[0];
    vals.forEach(function(v){ 
    if(v.length>val.length) val = v;});
    word.textContent = [val, val.length];
}
