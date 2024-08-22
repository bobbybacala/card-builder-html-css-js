
// script to dynamically create a card
/*
title: String
cName: String
views: int / long, 560000 -> 560K
monthsOld: int
duration: String, applied using Position property of css
*/

// keep adding cards sequentially in the body

// select the container, cause we have to append the cards to the container
let cont = document.querySelector('.container')



function createCard(title, cName, views, monthsOld, duration, thumbnail) {

    // helper function that shortens the values of the viwes
    function getViews(views) {
        if (views >= 1000 && views < 1000000) {
            views = (views / 1000) + 'K'
        } else if (views >= 1000000 && views < 100000000) {
            views = (views / 1000000) + 'M'
        } else if (views >= 100000000) {
            views = (views / 100000000) + 'M'
        }

        // function that return the views in short
        return views
    }

    // create an element for the card and add 'card' as name to the classlist
    let card = document.createElement('div')
    card.classList.add('card')

    // ---------------------------Thumbnail section-------------------------------
    // create another element inside the card for thumbnail(tbn)
    let tbn = document.createElement('div')
    card.insertAdjacentElement('afterbegin', tbn)
    tbn.classList.add('thumbnail')

    // create an image tag which is to be insretd inside the thumbnail, set the src attribute to thumbnail, which we will pass
    let img = document.createElement('img')
    tbn.insertAdjacentElement('afterbegin', img)
    img.setAttribute('src', thumbnail)

    // create a new duration div after the image tag for duration of the image
    let dur = document.createElement('div')
    img.insertAdjacentElement('afterend', dur)
    // set the duration of the video
    dur.innerHTML = duration
    dur.classList.add('duration')
    // ----------------------------Details section---------------------
    // create a details div
    let deets = document.createElement('div')
    tbn.insertAdjacentElement('afterend', deets)
    deets.classList.add('details')

    // create a title div
    let ttl = document.createElement('div')
    deets.insertAdjacentElement('afterbegin', ttl)
    // set the title for the card
    ttl.innerHTML = title
    ttl.classList.add('title')

    // create a about div
    let about = document.createElement('div')
    ttl.insertAdjacentElement('afterend', about)
    // set the value of about div
    about.innerHTML = `${cName} • ${getViews(views)} • ${monthsOld} months old`
    about.classList.add('about')

    // now append the card to the container
    cont.appendChild(card)
}

// example of function call
createCard('Neymar and Messi Goals', 'FC Barcelona', 5600000, 24, '12:34', 'https://prod-media.beinsports.com/image/1685581892573_79024e4b-1d86-4a63-a0f9-6b0f4842f7a3.jpg')

createCard('Eminem - Without Me (Official Music Video)', 'Eminem', 190000000, 98, '4:58', 'https://i.ytimg.com/vi/YVkUvmDQ3HY/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLByZjP-M-b6wg7QcZi15IJ0OgAv1Q')