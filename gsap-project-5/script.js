const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
gsap.from("#page1 .box" , {
    scale : 0 ,
    opacity: 0 ,
    rotate: 360 ,
    duration: 1 ,
    delay: 1 ,
    scrollTrigger:{
        trigger: body ,
        scroller: body ,
    }
})