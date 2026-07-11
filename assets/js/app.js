const observer =
new IntersectionObserver(

entries=>{


entries.forEach(item=>{


if(item.isIntersecting){

item.target.classList.add(
"show"
);

}


});


}

);



document
.querySelectorAll(".reveal")
.forEach(
el=>observer.observe(el)
);
