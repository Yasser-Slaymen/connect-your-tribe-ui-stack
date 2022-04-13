let sprinnerWrapper = document.querySelector('.spinner-wrapper')

setTimeout(() =>{
    hidePreloader();
}, 1000)

function hidePreloader() {
    sprinnerWrapper.style.display = "none"
}

// the function without timer in stution internet slow work
// let sprinnerWrapper = document.querySelector('.spinner-wrapper')
// window.addEventListener('load',() =>{
//     sprinnerWrapper.parentElement.removeChild(sprinnerWrapper);
// })