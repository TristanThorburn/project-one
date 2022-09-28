/**There is ABSOLUTELY no way I could have done this without help from https://youtu.be/gBzsE0oieio at this point in my JS experience and essentially did a code-along **/

// IMG scaling to be completed for carousel on tablet

// CAROUSEL**************************************************************************
// Target the images
const track = document.querySelector('.track');
    // console.log(track);

// Differentiate between each "slide"
const slides = Array.from(track.children);
// console.log(slides);

// RIGHT arrow button to be next slide button
const nextButton = document.querySelector('.next-button');
    // console.log(nextButton);

// LEFT arrow button to be previous slide button
const previousButton = document.querySelector('.prev-button');
    // console.log(previousButton);

// How far are they moving? ==> Full width of slide to account for screen sizes

    // const slideSize = slides[0].getBoundingClientRect();
    // console.log(slideSize);
    // const slideWidth = slideSize.width;

const slideWidth = slides[0].getBoundingClientRect().width;
// console.log(slideWidth);

// Get slides side by side after absolute positioning
// slides[0].style.left = slideWidth * 0 + 'px';
// slides[1].style.left = slideWidth * 1 + 'px';
// slides[2].style.left = slideWidth * 2 + 'px';

// Make it DRY
// slides.forEach((slide, index) => {
//     slide.style.left = slideWidth * index + 'px';
// })

// Make whats happening more human readable
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}
slides.forEach(setSlidePosition);

//     // Now move to next slide/ Move this code out to be More DRY
    //     const moveDistance = nextSlide.style.left;
    //     // console.log(moveDistance);
    //     track.style.transform = 'translateX(-' + moveDistance +')';
    //     // update the class list
    //     currentSlide.classList.remove('current-slide');
    //     nextSlide.classList.add('current-slide'); 

// DRY version of movement to use for both buttons
const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left +')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');

    // I did the show/hide part completely solo so it probably could be cleaned up a lot more to not repeat
    // Hide/Show next button based on final slide:
    const finalSlide = track.querySelector('.gallery-end');
    if (finalSlide.classList.contains('current-slide')){
        nextButton.classList.add('is-hidden');
    } else {
        nextButton.classList.remove('is-hidden');
    }

    //Hide/Shodw previous button based on first slide:
    const firstSlide = track.querySelector('.gallery-start');
    if (!firstSlide.classList.contains('current-slide')){
        previousButton.classList.remove('is-hidden');
    } else {
        previousButton.classList.add('is-hidden');
    }
}
 
// Move to next:
    nextButton.addEventListener('click', e => {
        // Faster to only look through track vs entire document:
        const currentSlide = track.querySelector('.current-slide');
        // console.log(currentSlide);
        // console.log(currentSlide.nextElementSibling); 
        const nextSlide = currentSlide.nextElementSibling;
        moveToSlide(track, currentSlide, nextSlide);   
    })
// Move to prev:
    previousButton.addEventListener('click', e =>{
        const currentSlide = track.querySelector('.current-slide');
        const nextSlide = currentSlide.previousElementSibling;
        moveToSlide(track, currentSlide, nextSlide);
    })
