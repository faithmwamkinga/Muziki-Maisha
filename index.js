let button = document.getElementById('button')
button.addEventListener('click',function(){
    button.innerHTML = 'Exploring!!'
    // button.style.backgroundColor = '#A300FF'
    button.style.backgroundColor = '#160113'
    // button.style.backgroundColor = '#46163e'
    button.style.padding = '20px'
    button.style.borderRadius = '5px'
    button.style.border= 'none'
})
 // Get the image element
 const image = document.getElementById('animated-image');

 // Add a CSS class to apply the animation
 image.classList.add('animated');

 // Remove the animation class after the animation ends
 image.addEventListener('animationend', () => {
   image.classList.remove('animated');
 });

 // Get the paragraph element
 const paragraph = document.getElementById('animated-paragraph');

 // Add a CSS class to apply the animation
 paragraph.classList.add('animated');

 // Remove the animation class after the animation ends
 paragraph.addEventListener('animationend', () => {
   paragraph.classList.remove('animated');
 });



// Add the animation class to start the movement
image.classList.add('animated');

// Optional: Remove the animation class after a certain duration
setTimeout(() => {
  image.classList.remove('animated');
}, 4000);

 



// Get the button element
// const button = document.getElementById('button');

// Add a click event listener to trigger the animation
button.addEventListener('click', () => {
  // Add a CSS class to start the animation
  button.classList.add('animated');
  
  // Remove the CSS class after the animation completes
  setTimeout(() => {
    button.classList.remove('animated');
  }, 2000); // Adjust the duration of the animation (in milliseconds)
});



// const button = document.getElementById('button');

// Add a click event listener to trigger the animation
button.addEventListener('click', () => {
  // Add a CSS class to start the animation
  button.classList.add('animated');
});



//   // Get the paragraph element
//   const paragraph = document.getElementById('animated-paragraph');
//   const words = paragraph.textContent.split(' ');

//   // Clear the existing text content
//   paragraph.textContent = '';

//   // Add words with animation one by one
//   words.forEach((word, index) => {
//     const span = document.createElement('span');
//     span.textContent = word + ' ';
//     span.style.animationDelay = `${index * 0.2}s`;
//     paragraph.appendChild(span);
//   });


