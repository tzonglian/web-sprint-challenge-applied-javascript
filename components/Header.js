// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container


//Q - Should 'Header' be capitalized??? (default given by sprint)
function Header() {

    // Instatiate elements
    const headerGroup = document.createElement('div')
    const headerDate = document.createElement('span')
    const headerTitle = document.createElement('h1')
    const headerTemp = document.createElement('span')

    // Add classes
    headerGroup.className = 'header'
    headerDate.className = 'date'
    headerTemp.className = 'temp'

    // Add Children
    headerGroup.appendChild(headerDate)
    headerGroup.appendChild(headerTitle)
    headerGroup.appendChild(headerTemp)

    // Add Content
    headerDate.textContent = 'MARCH 28, 2020'
    headerTitle.textContent = 'Lambda Times'
    headerTemp.textContent = '98°'

    return headerGroup

}

const createHeader = document.querySelector('.header-container')
createHeader.append(Header())
