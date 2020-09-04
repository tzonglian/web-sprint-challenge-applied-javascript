// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>

axios.get('https://lambda-times-api.herokuapp.com/articles')
  .then(response => {
    console.log('Articles Response:', response)

    const articleInserter = document.querySelector('.cards-container')
    console.log(articleInserter)

    const articleArray = response.data.articles
    console.log('Article Array:', articleArray)

    // tabArray.forEach(tab =>{
    //     const tabElement = document.createElement('div')
    //     tabElement.className = 'tab'
    //     tabElement.textContent = tab
    //     tabInserter.appendChild(tabElement)

  })
  .catch(error =>{
    console.log('error:', error)
  })

function articleMaker(articleObj) {

    // Instatiate elements
    const articleGroup = document.createElement('div')
    const articleHeadline = document.createElement('div')
    const articleAuthor = document.createElement('div')
    const articleImgContainer = document.createElement('div')
    const articleImg = document.createElement('img')
    const articleCredit= document.createElement('span')

    // Add classes
    articleGroup.className = 'card'
    articleHeadline.className = 'headline'
    articleAuthor.className = 'author'
    articleImgContainer.className = 'img-container'

    // Add Children
    articleGroup.appendChild(articleHeadline)
    articleGroup.appendChild(articleAuthor)
    articleAuthor.appendChild(articleImgContainer)
    articleImgContainer.appendChild(articleImg)

    // Add Content
    articleHeadline.textContent = `TestHeadline`
    //articleImg.src
    articleCredit.textContent = `By TestAuthor`

    return articleGroup

}



//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
