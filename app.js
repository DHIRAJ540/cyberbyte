let t1 = gsap.timeline({defaults:{duration: 0.7, ease: Back.easeOut.config(2), opacity: 0}})
let t2 = gsap.timeline({defaults:{duration: 1.5, delay:1}})
let t3 = gsap.timeline({defaults:{duration: 1.5}})

t1.from('.card-bg', {delay: 1, scale: 0.2, transformOrigin: 'center' }, "=.2s")
    .from('.card-top', { scaleY: 0, transformOrigin: 'top' } )
    .from('.card-icon', { scale: 0.2, transformOrigin: 'center' }, "-=.7" )
    .from('.line1', { scaleY: 0, transformOrigin: 'bottom' })
    .from('.graph1',{scaleX:0, transformOrigin:"left"} )
    .from('.graph2', {scaleY:0, transformOrigin:'bottom'})
    .from('.line2', { scaleY: 0, transformOrigin: 'bottom' }, "-=.2" )
    .from('.line3', { scaleY: 0, transformOrigin: 'bottom' }, "-=.3" )
    .from('.line4', { scaleY: 0, transformOrigin: 'bottom' }, "-=.4" )
    .from('.line5', { scaleY: 0, transformOrigin: 'bottom' }, "-=.5" )
    .from('.line6', { scaleY: 0, transformOrigin: 'bottom' }, "-=.6" )
    .from('.line7', { scaleY: 0, transformOrigin: 'bottom' }, "-=.7" )
    .from('.line8', { scaleY: 0, transformOrigin: 'bottom' }, "-=.8" )
    .from('.blip1', { scaleX: 0, transformOrigin:'left'})
    .from('.blip2', { scaleX: 0, transformOrigin:'left'}, '-=0.2')
    .from('.blip3', { scaleX: 0, transformOrigin:'left'}, '-=0.3')
    .from('.blip4', { scaleX: 0, transformOrigin:'left'}, '-=0.4')
    
t2.from(".whole-card", {y:10, repeat: -1, yoyo:true})
t3.from(".details", {opacity:0,y: 40, stagger:0.3})

const navSlide = () => {
    const burger = document.querySelector(".ham");
    const nav = document.querySelector(".nav-items");
    const navItem = document.querySelectorAll(".nav-item");
   


    burger.addEventListener('click', () => {
        nav.classList.toggle("nav-active");
        burger.classList.toggle('toggle');

        navItem.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
               
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
              
            }
        })
    })

   
}

navSlide();