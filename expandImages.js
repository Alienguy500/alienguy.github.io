function expandImage(image, target){ // "image" is the intended image file to be displayed. "target" is the element the image should be applied to
    var target = document.getElementById(target);
    target.setAttribute("src",image);
}