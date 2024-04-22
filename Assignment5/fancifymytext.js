function changeFontSize() {
  document.getElementById("text").style.fontSize = "24pt";
}

function applyStyles() {
  const textArea = document.getElementById("text");
  const fancyShmancyRadio = document.getElementById("fancyShmancy");
  
  if (fancyShmancyRadio.checked) {
      textArea.style.fontWeight = "bold";
      textArea.style.color = "blue";
      textArea.style.textDecoration = "underline"
      document.getElementById("boringBetty").checked = false;
  } else {
      textArea.style.fontWeight = "normal";
      textArea.style.color = "black";
      textArea.style.textDecoration = "none"
  }
}

function uppercaseText() {
  const textArea = document.getElementById("text");
  let text = textArea.value;
  text = addMooSuffix(text);
  text = text.toUpperCase();
  textArea.value = text;
}

function addMooSuffix(text) {
  const sentences = text.split(".");
  
  for (let i = 0; i < sentences.length; i++) {
      let sentence = sentences[i].trim();
      let words = sentence.split(" ");
      if (words.length > 0) {
  
          words[words.length - 1] += "-Moo";
      }

      sentences[i] = words.join(" ");
  }
  
  return sentences.join(".");
}
