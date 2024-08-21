document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const scrollLeftButton = document.getElementById('scrollLeft');
    const scrollRightButton = document.getElementById('scrollRight');

    let scrollAmount = 300;

    scrollRightButton.addEventListener('click', () => {
        gallery.scrollBy({
            top: 0,
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    scrollLeftButton.addEventListener('click', () => {
        gallery.scrollBy({
            top: 0,
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    document.querySelectorAll('.video-container video').forEach(video => {
        video.addEventListener('mouseenter', () => {
            video.play();
        });
        video.addEventListener('mouseleave', () => {
            video.pause();
        });
    });


    document.getElementById('revealBtn').addEventListener('click', function() {
        document.getElementById('message').classList.toggle('hidden');
    });    
});
