

// js for hiding nav-link
let navBar=document.querySelector('.navbar-collapse')
let navBar_link=document.querySelectorAll('.nav-link')
navBar_link.forEach(function(a){
    a.addEventListener('click',function(){
      navBar.classList.remove('show')
    })
})
// js for counter section



window.addEventListener('DOMContentLoaded',()=>{
    function counter(id,start,end,duration){
        let obj=document.getElementById(id)
        let range=end-start;
        let step=Math.abs(Math.floor(duration/range))
        let timer=setInterval(function(){
           start=start+1;
            obj.textContent=start
           if(start==end){
            clearInterval(timer)
           }
        },step)

    }
    counter('members',0,1000,2000);
    counter('staff',0,300,3000);
    counter('records',0,15,2000);
    counter('globs',0,55,2000);
})