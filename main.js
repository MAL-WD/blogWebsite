let fisrtColors=[ "#8E2DE2","#E23E57","#6DD5FA" ,"#203A43","#FF0099","#c31432"]
let secondColors=[ "#4A00E0" ,"#88304E","#2980B9","#3e98c0","#493240","#240b36" ]
let fsGr=document.querySelectorAll(".first-gr")
let scGr=document.querySelectorAll(".second-gr")
let thGr=document.querySelectorAll(".third-gr")
console.log(fsGr)
console.log(fisrtColors[Math.floor(Math.random()*fisrtColors.length)])
let random=Math.floor(Math.random()*fisrtColors.length)
fsGr.forEach((el)=>{el.style.backgroundColor=fisrtColors[random]

})
scGr.forEach((el)=>{el.style.backgroundColor=fisrtColors[random]

})
thGr.forEach((el)=>{el.style.backgroundColor=secondColors[random]

})
  
// scroll animation
const observer= new IntersectionObserver((e)=>{
    e.forEach((entry)=>{
        if (entry.isIntersecting){
            entry.target.classList.add("show")
        }else{
            entry.target.classList.remove("show")

        }
    })
})
const hiddenElements=document.querySelectorAll(".hidden")
hiddenElements.forEach((e)=>{
    observer.observe(e)
})
let signButtons=document.querySelectorAll(".singin .content button")
console.log(signButtons)
signButtons.forEach((el)=>{
    el.addEventListener("click",()=>{
        if(el.classList.contains("false")){
            console.log("nikymak");
            el.classList.remove("false")
            el.classList.add("true")
        }
        else{
            el.classList.remove("true")
            el.classList.add("false")

        }
    })
})
const hight= new IntersectionObserver((e)=>{
    e.forEach((entry)=>{
        if (entry.isIntersecting){
            entry.target.classList.add("full")
        }else{
            entry.target.classList.remove("full")

        }
    })
})
const shapes=document.querySelectorAll(".empty")
shapes.forEach((e)=>{
    hight.observe(e)
})