let text =document.getElementById("text")
let b =document.getElementById("pyramid-loader")

window.addEventListener("scroll",()=>
{
    let value=window.scrollY
    text.style.marginTop=value*2.5+"px"
   b.style.marginTop=value*2.5+"px"
})
window.addEventListener("onclick",()=>
{
  text.innerText="hello"
})