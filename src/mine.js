// Selecting heading elements
const h2 = document.querySelector(".hedingelement_item .h2");
const hedingelement = document.querySelector('.hedingelement #hedingValue');

// Updating heading content
hedingelement.onkeyup = () => {
    const hedingValue = hedingelement.value;
    h2.innerHTML = hedingValue;
}

// Selecting heading range elements
const hedingRang = document.querySelector('#headingRange');
const rangesize = document.querySelector('.rangesize');

// Updating heading font size
hedingRang.oninput = (e) => {
    const rengValue = hedingRang.value;
    rangesize.innerHTML = rengValue;
    h2.style.fontSize = `${rengValue}px`;
}

// Selecting text color input
const text_color = document.querySelector(".text_color");

// Updating heading text color
text_color.oninput = (e) => {
    const colorValue = text_color.value;
    h2.style.color = colorValue;
}

// Selecting text alignment inputs
const text_left = document.querySelector('#text_left');
const text_center = document.querySelector('#text_center');
const text_right = document.querySelector('#text_right');

// Updating heading text alignment
text_left.oninput = (e) => {
    const Value = e.target.value;
    h2.style.textAlign = Value;
}
text_center.oninput=(e)=>{
    const Value = e.target.value;
    h2.style.textAlign = Value;
}
text_right.oninput=(e)=>{
    const Value = e.target.value;
    h2.style.textAlign = Value;
}
//font family selecting text select
const font1=document.querySelector(".form-select");
font1.oninput = (e) => {
    const Value = e.target.value;
    h2.style.fontFamily = Value;
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//paragraptext selection
const paragraptext=document.querySelector('.paragraptext')
const paragraptext2=document.querySelector('.paragraphelement_item .h2')
const paragraptextrange=document.querySelector("#paragraptextrange")
const paragrap_Fontsize=document.querySelector('.paragrap_Fontsize')
const paragraptextColor=document.getElementById("paragraptextColor")
 const paragraptextbackgroundColor=document.getElementById("paragraptextbackgroundColor")
 const paragrap_left =document.getElementById("paragrap_left")
 const paragrap_center =document.getElementById("paragrap_center")
 const paragrap_right =document.getElementById("paragrap_right")
 const cars=document.getElementById('cars')
// paragraptext event
paragraptext.onkeyup=(e)=>{ paragraptext2.innerHTML=e.target.value;}
paragraptextrange.oninput=(e)=>{
    const rangValue = e.target.value;
    paragraptext2.style.fontSize=`${rangValue}px`;
    paragrap_Fontsize.innerHTML= e.target.value;}
    paragraptextColor.oninput=(e)=>{
    const colorValue = e.target.value;
    paragraptext2.style.color=colorValue;}
    paragraptextbackgroundColor.oninput=(e)=>{
    const colorValue = e.target.value;
    paragraptext2.style.backgroundColor=colorValue;}
    paragrap_left.oninput=(e)=>{
    const Value = e.target.value;
    paragraptext2.style.textAlign=Value;}
    paragrap_center.oninput=(e)=>{
    const Value = e.target.value;
    paragraptext2.style.textAlign=Value;}
    paragrap_right.oninput=(e)=>{
    const Value = e.target.value;
    paragraptext2.style.textAlign=Value;}
    cars.oninput=(e)=>{
        const value=e.target.value;
        paragraptext2.style.fontFamily=value;
    }