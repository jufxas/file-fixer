class DocMethods {
    color(e) {
        document.body.style.backgroundColor = e; 
    }
    clear() {
        document.documentElement.innerHTML = '';
    }
    fontFamily(ff) {
        document.body.style.fontFamily = ff
    }
    onClick(funct) {
        document.addEventListener("click", funct, false)
    }
    append(ele) {
        new DOMParser().parseFromString(ele, "text/html").body.querySelectorAll("*").forEach(x => document.body.append(x))
    }
}

class StringMethods {
    constructor(element) {
        this.element; 
        if (typeof element === "object") this.element = element; 
        else this.element = document.querySelector(element); 
    }
    onClick(funct) {
        this.element.addEventListener("click", funct, false)
    }
    html(txt) {
        if (arguments[0] === undefined) return this.element.innerText;   
        else this.element.innerText = txt; 
    }
    addAttr(attr, value) {
        let prevEle = this.element.getAttribute(attr); 
        if (prevEle) this.element.setAttribute(attr, prevEle + " " + value )
        else this.element.setAttribute(attr, value)
    }
    attr(attribute, value) {
        if (arguments[1] === undefined) return this.element.getAttribute(attribute); 
        else this.element.setAttribute(attribute, value)
    }
    val(txt) {
        if (arguments[0] === undefined) return this.element.value;  
        else this.element.value = txt;
    }
    append(ele) {
        new DOMParser().parseFromString(ele, "text/html").body.querySelectorAll("*").forEach(x => this.element.append(x))
    }
    clear() {
        while (this.element.firstChild) this.element.removeChild(this.element.firstChild);
    }
    css(cssProp, val) {
        if (arguments[1] === undefined) return this.element.style[cssProp]; 
        else this.element.style[cssProp] = val; 
    }
}



function $(ele) {
    if (ele === document) {
        return new DocMethods; 
    } else if (typeof ele === "string") {
        return new StringMethods(ele); 
    }
} 