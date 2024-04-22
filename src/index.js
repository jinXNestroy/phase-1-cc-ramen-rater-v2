

// index.js
const endpoint = "http://localhost:3000/ramens"
const ramenContainerDiv = document.querySelector("#ramen-menu")
const individualContainer = document.querySelector('#ramen-detail')
const imageRamen = document.querySelector('.detail-image')
const individualName = document.querySelector('.name')
const individualRestaurant = document.querySelector('.restaurant')
const rating = document.querySelector('#rating-display')
const comment = document.querySelector('#comment-display')
const form = document.querySelector('#new-ramen')
// Callbacks
// Adding submit event listener to the form
const addSubmitListener = () => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    handleSubmit()

    

  })
}
// Fetch data and convert
const displayRamens = () => {
  fetch(endpoint).then((res) => res.json())
    .then(displayAllRamens)
  
};

// Iterate through the data and retrive data to be displayed
function displayAllRamens(ramens) {
  ramens.forEach(renderEachRamen)
}

function renderEachRamen(ramen) {
  const ramenImage = document.createElement('img')
  ramenImage.src = ramen.image
  ramenContainerDiv.append(ramenImage)

  ramenImage.addEventListener('click', e => renderRamen(ramen))

}
// Individual Ramen Function
function renderRamen(ramen) {
  imageRamen.src = ramen.image;
  individualName.textContent = ramen.name;
  individualRestaurant.textContent = ramen.restaurant;
  rating.textContent = ramen.rating
  comment.textContent = ramen.comment
}
// Display the submitted Ramen
function renderNewRamen() {
  const ramenImage = document.createElement('img')
  const inputName = document.querySelector('#new-name')
  const inputRes = document.querySelector('#new-restaurant')
  const inputImage = document.querySelector('#new-image')
  const inputRating = document.querySelector('#new-rating')
  const inputComment = document.querySelector('#new-comment')

  individualName.textContent = inputName.value
  individualRestaurant.textContent = inputRes.value
  rating.textContent = inputRating.value
  comment.textContent = inputComment.value
  imageRamen.src = inputImage.value
}

// Handle the submit event listener
function handleSubmit() {
  const ramenImage = document.createElement('img')
  const inputName = document.querySelector('#new-name')
  const inputRes = document.querySelector('#new-restaurant')
  const inputImage = document.querySelector('#new-image')
  const inputRating = document.querySelector('#new-rating')
  const inputComment = document.querySelector('#new-comment')
  ramenImage.src = inputImage.value
  individualName.textContent = inputName.value
  individualRestaurant.textContent = inputRes.value
  rating.textContent = inputRating.value
  comment.textContent = inputComment.value
  imageRamen.src = inputImage.value

  ramenImage.addEventListener('click', renderNewRamen)


  ramenContainerDiv.append(ramenImage)

}
const main = () => {
  displayRamens()
  addSubmitListener()
  // Invoke displayRamens here
  // Invoke addSubmitListener here
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,

  main,
};
