document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        var header = document.querySelector('.header-wrapper');
        var scrollPosition = window.scrollY;
        console.log(scrollPosition);
        // Thay đổi lớp CSS khi cuộn xuống dưới
        if (scrollPosition > 0) {
            header.classList.add('header-fixed');
        } else {
            header.classList.remove('header-fixed');
        }
    });
})