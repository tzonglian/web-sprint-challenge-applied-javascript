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

    const allArticles = response.data.articles
    console.log('allArcticles:', allArticles)

    // TEST A SINGLE ARTICLE
    // 'When to Rest...' by Pupper S. Doggo
    const testArticle1 = allArticles.javascript[2] 
    console.log('testArticle1: ', testArticle1)
    articleInserter.append(articleMaker(testArticle1))
    // It Works!!!



    //Looping through allArticles:

    // Object.keys didn't work because it returned 'node' instead of 'node.js'
    // Make sure to `node.js`, or it will assign 'node' instead
    // const tabKeys = Object.keys($`{allArticles}`)
    // console.log('tabKeys: ',tabKeys)
    
    const tabKeys = ['bootstrap','javascript','jquery','node.js','technology']

    // for (const key of tabKeys){
    //     console.log('key: ',key)
    //     console.log('tabKeys2: ',tabKeys)
    //     let tabArticlesArray = []
    //     console.log('allArticles.key: ',allArticles.key)
    //     tabArticlesArray.push(allArticles['key'])
    //     console.log('tabArticlesArray: ',tabArticlesArray) // Why undefined???
    // }

    // For each tab, create articles
    const bootstrapArticles = allArticles.bootstrap
    for (i=0; i<bootstrapArticles.length; i++){
        articleInserter.appendChild(articleMaker(bootstrapArticles[i]))
    }
    const javascriptArticles = allArticles.javascript
    for (i=0; i<javascriptArticles.length; i++){
        articleInserter.appendChild(articleMaker(javascriptArticles[i]))
    }
    const jqueryArticles = allArticles.jquery
    for (i=0; i<jqueryArticles.length; i++){
        articleInserter.appendChild(articleMaker(jqueryArticles[i]))
    }
    const nodeJSArticles = allArticles.jquery
    for (i=0; i<nodeJSArticles.length; i++){
        articleInserter.appendChild(articleMaker(nodeJSArticles[i]))
    }
    const technologyArticles = allArticles.jquery
    for (i=0; i<technologyArticles.length; i++){
        articleInserter.appendChild(articleMaker(technologyArticles[i]))
    }

    // Event Listener - console.log Headline
    const articleLinks = document.querySelectorAll('.card')
    console.log('articleLinks: ',articleLinks)
    Array.from(articleLinks).forEach( clicking =>{
        clicking.addEventListener('click', () => {
            console.log(clicking.textContent)
        })
    })

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
    articleImgContainer.appendChild(articleCredit)

    // Add Content
    articleHeadline.textContent = `${articleObj.headline}`
    articleImg.src = articleObj.authorPhoto
    articleCredit.textContent = `By ${articleObj.authorName}`

    return articleGroup

}

//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//


// Use your function to create a card for each of the articles, and append each card to the DOM.
