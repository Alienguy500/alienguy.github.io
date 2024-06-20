// Typing animation for text elements

function startTyping(elementId) {
    var textToGet = document.getElementById(elementId);
    var index = 1;
    
    if (textToGet.getAttribute("data-occupied") == "false") { // Don't start the typing animation if it's currently going
        const originalText = textToGet.textContent;
        textToGet.setAttribute("data-occupied", "true");
        typeThisText(textToGet,index,originalText);
    }
}

function typeThisText(element,currentIndex,originalText) {
    element.textContent = originalText.slice(0,currentIndex) + "_";
    if (currentIndex < originalText.length-1) {
        setTimeout(function() {typeThisText(element,currentIndex+1,originalText)}, 100);
    }
    else {
        element.setAttribute("data-occupied", "false");
    }
}

const headings = document.getElementsByClassName("heading");
for (let i=0; i < headings.length; i++) {
  headings[i].addEventListener(
    "mouseover",
    (event) => {
      startTyping(headings[i].id);
    }
  )
}