const options=[
  "Hii all,",
  "I am Dk",
  "How Are You?",
  "I am Fine",
  "What is going on?",
  "alright",
  "Take Care"

]

const magicalball=document.getElementById("mb-container")
const response=document.getElementById("response")

magicalball.addEventListener('click',function(){
    const random=Math.floor(Math.random()*7)
    const message=options[random]
 magicalball.className='magicball_outer animate'
    setTimeout(()=>{
        response.textContent=message
        response.style.fontSize='1.1rem'
        magicalball.className='magicball_outer'
    },3000)
})