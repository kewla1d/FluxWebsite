window.addEventListener('scroll', function() {
    var cover = document.querySelector('div#topbar');
    var scrollTop = window.scrollY;

    if (scrollTop > 1) {
        cover.classList.add('scrolled');
        console.log('scroll added')
    } else {
        cover.classList.remove('scrolled');
        console.log('scroll removed')
    }
});