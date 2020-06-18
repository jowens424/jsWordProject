<!DOCTYPE html>
<html>
<body>

<p>Finding the longest word.</p>
<p id="count"></p>

<script>
function longestWord(text) {
    let wordArray = text.split(' ')
    let maxLength = 0
    let result = ''
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i].length > maxLength) {
            maxLength = wordArray[i].length
            result = wordArray[i]
        }
    }
    return [result, result.length];
}
document.getElementById("count").innerHTML = longestWord("lamar jackson is a marvelous quarterback");
</script>

</body>
</html>
