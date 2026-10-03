// Promises: same purpose as callbacks, but they are more flexible and easier to work with. 
// They allow you to chain multiple asynchronous operations together and handle errors
//  more gracefully.
import loadImagePromised from './loadImagePromised'

loadImagePromised('images/dragon.jpg ').then((img) => {
    let imgElemeent = document.createElement('img')
    imgElemeent.src = img.src
    document.body.appendChild(imgElemeent)
    document.body.appendChild(imgElemeent)
})