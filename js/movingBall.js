function centerMain() { 
  gsap.set('.moving-ball-wrap', {
    x:'50%', 
    xPercent:-50, 
    y:'50%', 
    yPercent:-50
  }); 
}
window.onresize = centerMain;

document.querySelector(".business").onmousemove = (e)=> {
  let winPercent = { x:e.clientX/window.innerWidth, y:e.clientY/window.innerHeight },
    distFromCenter = 1 - Math.abs((e.clientX - window.innerWidth/2)/window.innerWidth*2);
  
  gsap.timeline({defaults:{duration:0.5, overwrite:'auto'}})
    .to('.ball_1',          {x:200-200*winPercent.x, y:30-60*winPercent.y}, 0) 
  gsap.timeline({defaults:{duration:0.5, overwrite:'auto'}})
    .to('.ball_2',          {x:200-250*winPercent.x, y:30-50*winPercent.y}, 0) 
  gsap.timeline({defaults:{duration:0.5, overwrite:'auto'}})
    .to('.ball_3',          {x:200-300*winPercent.x, y:30-100*winPercent.y}, 0) 
  
  gsap.timeline({defaults:{duration:0.5, overwrite:'auto'}})
    .to('.stroke_1',          {x:200-200*winPercent.x, y:50-80*winPercent.y}, 0.05) 
  gsap.timeline({defaults:{duration:0.5, overwrite:'auto'}})
    .to('.stroke_2',          {x:200-250*winPercent.x, y:50-80*winPercent.y}, 0.05) 
  gsap.timeline({defaults:{duration:0.5, overwrite:'auto'}})
    .to('.stroke_3',          {x:200-300*winPercent.x, y:50-100*winPercent.y}, 0.05) 

  gsap.timeline({defaults:{duration:0.5, overwrite:'auto'}})
    .to('.s-text.m',          {x:200-200*winPercent.x, y:50-80*winPercent.y}, 0.05) 
  gsap.timeline({defaults:{duration:0.5, overwrite:'auto'}})
    .to('.s-text.p',          {x:200-250*winPercent.x, y:50-80*winPercent.y}, 0.05) 
  gsap.timeline({defaults:{duration:0.5, overwrite:'auto'}})
    .to('.s-text.c',          {x:200-300*winPercent.x, y:50-100*winPercent.y}, 0.05) 

  gsap.timeline({defaults:{duration:0.5, overwrite:'auto'}})
    .to('.s-text.e',          {x:200-200*winPercent.x, y:50-80*winPercent.y}, 0.05) 
  gsap.timeline({defaults:{duration:0.5, overwrite:'auto'}})
    .to('.s-text.a',          {x:200-250*winPercent.x, y:50-80*winPercent.y}, 0.05) 
  gsap.timeline({defaults:{duration:0.5, overwrite:'auto'}})
    .to('.s-text.v',          {x:200-300*winPercent.x, y:50-100*winPercent.y}, 0.05) 
}