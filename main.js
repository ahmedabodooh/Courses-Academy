


// testimonial silder
function testimonialSlider(){
    const carouselOne = document.getElementById('carouselOne');
    if(carouselOne){
        carouselOne.addEventListener('slide.bs.carousel', function() {
            const activeTtem = this.querySelector(".active");
            document.querySelector(".js-testimonial-img").src = 
            activeTtem.getAttribute("data-js-testimonial-img");

        })
    }
}
testimonialSlider();