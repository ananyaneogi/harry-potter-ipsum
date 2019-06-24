const hpArray = [] // add text from data/hp41.txt
const submitBtn = document.getElementById("submit");
const ipsumText = document.getElementById("ipsumText");
const copyBtn = document.getElementById("copyBtn");
const textContainer = document.getElementById("textContainer");

let loremText = "";

function hpIpsum(length) {
    let max = hpArray.length - length;
    let randomNum = Math.floor(Math.random() * Math.floor(max));
    var i = 0;
    while (i < length) {
        loremText += hpArray[randomNum] + " \n";
        randomNum++;
        i++;
        console.log(i, randomNum);
    }
    return loremText;
}

function getText(event) {
    event.preventDefault();
    loremText = "";
    const sentenceNum = document.getElementById("sentenceNum").value;
    if (!sentenceNum) {
        alert('Please enter number of sentences to proceed!');
        return;
    }
    hpIpsum(sentenceNum);
    ipsumText.textContent = loremText;
    copyBtn.style.display = "block";
    textContainer.style.display = "block";
}

function copyText() {
    const el = document.createElement('textarea');
    el.value = loremText;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert('Text Copied!');
}

submitBtn.addEventListener('click', getText);
copyBtn.addEventListener('click', copyText);