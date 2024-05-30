// Typing animation for text elements

function startTyping(elementId) {
    var textToGet = document.getElementById(elementId);
    var index = 1;
    const originalText = textToGet.textContent;
    typeThisText(textToGet,index,originalText);
}

function typeThisText(element,currentIndex,originalText) {
    element.textContent = originalText.slice(0,currentIndex) + "_";
    if (currentIndex < originalText.length-1) {
        setTimeout(function() {typeThisText(element,currentIndex+1,originalText)}, 100);
    }
}