function longestWord() {
var vals = input.value.split(' ');
    var val = vals[0];
    vals.forEach(function(v){ 
    if(v.length>val.length) val = v;});
    word.textContent = [val, val.length];
}


module.exports = longestWord
