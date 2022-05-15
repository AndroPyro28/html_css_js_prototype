const liveStreamClick = document.querySelectorAll('.liveStreamClick');

liveStreamClick.forEach(liveStream => {
    liveStream.addEventListener('click', () => {
        window.location.assign('/views/liveStream.html')
    })
})