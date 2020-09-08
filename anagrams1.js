const button = document.getElementById("findButton");
button.onclick = function () {
    function alphabetize(a) {
        return a.toLowerCase().split("").sort().join("").trim();
    }
    let typedText = document.getElementById("input").value
    let orderedInputText = alphabetize(typedText)
    let orderedOutputText = " "
    function getAnagramsOf(orderedInputText) {
        for (i = 0; i < palavras.length; i++) {
            let checkAnagram = alphabetize(palavras[i])
            if (checkAnagram === orderedInputText) {
                orderedOutputText += " " + palavras[i] + ","
            }
        }
    }
    getAnagramsOf(orderedInputText)
    anagrams = document.createElement("div")
    anagrams.textContent = orderedOutputText
    document.body.appendChild(anagrams)

}