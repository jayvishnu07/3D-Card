const container = document.querySelector(".container");
const card = document.querySelector('.card');

const image = document.querySelector('.image-div img');
const title = document.querySelector('.title');
const desc = document.querySelector('.desc');
const feature = document.querySelector('.info h4');
const clock = document.querySelector('.clock');
const calendar = document.querySelector('.calendar');
const calculator = document.querySelector('.calculator');
const buttontag= document.querySelector('.get-started');

container.addEventListener("mousemove",function(e){
    let xAxis = ((window.innerWidth/2) - e.pageX)/8;
    let yAxis = ((window.innerHeight/2) - e.pageY)/8;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})

container.addEventListener('mouseleave',function(e){
    card.style.transform = 'rotateY(0deg) rotateX(0deg)'
    card.style.transition = 'all 0.5s ease';
    title.style.transform = "translateZ(0px)";
    // image.style.transform = "translateZ(0px)";
    // desc.style.transform = "translateZ(0px)";
    // feature.style.transform = "translateZ(0px)";
    // clock.style.transform = "translateZ(0px)";
    // calendar.style.transform = "translateZ(0px)";
    // calculator.style.transform = "translateZ(0px)";
    // buttontag.style.transform = "translateZ(0px)";
})
    container.addEventListener('mouseenter',function(e){
    card.style.transition = 'all 0.1s ease';
    title.style.transform = "translateZ(220px)";
    // image.style.transform = "translateZ(150px)";
    // desc.style.transform = "translateZ(150px)";
    // feature.style.transform = "translateZ(150px)";
    // clock.style.transform = "translateZ(150px)";
    // calendar.style.transform = "translateZ(150px)";
    // calculator.style.transform = "translateZ(150px)";
    // buttontag.style.transform = "translateZ(150px)";
})

