document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        var headerWrapper = document.querySelector('.header-wrapper');
        var header = document.querySelector('.header'); 
        var scrollPosition = window.scrollY;
        // console.log(scrollPosition);
        // Thay đổi lớp CSS khi cuộn xuống dưới
        if (scrollPosition > 0) {
            headerWrapper.classList.add('header-fixed');
            header.style.height = '113px';
        } else {
            headerWrapper.classList.remove('header-fixed');
            header.removeAttribute('style');
        }
    });
    let modal = document.getElementById("myModal");
    let chooseRecipe = document.querySelectorAll('.choose-recipe');
    chooseRecipe.forEach(function (choose) {
        choose.addEventListener("click", function() {
            modal.classList.add('show');
        })
    })

    let close = document.querySelector('.modal-header__icon');
    close.addEventListener("click", function() {
        // let modal = document.getElementById("myModal");
        modal.classList.remove('show');
    });

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.classList.remove('show');
        }
    }

    document.getElementById("name").addEventListener("change", function() {
        let name = document.getElementById("name");
        var nameError = document.getElementById("name-error");
        if(name.value.length == 0){
            nameError.innerHTML = "Vui lòng nhập tên của bạn";
        }
    });

    document.getElementById("email").addEventListener("change", function() {
        let email = document.getElementById("email");
        var emailError = document.getElementById("email-error");
        if(email.value.length == 0){
            emailError.innerHTML = "Vui lòng nhập email của bạn";
        }
    });

    document.getElementById("phone").addEventListener("change", function() {
        let phone = document.getElementById("phone");
        var phoneError = document.getElementById("phone-error");
        if(phone.value.length == 0){
            phoneError.innerHTML = "Vui lòng nhập số điện thoại của bạn";
        }
    });
})