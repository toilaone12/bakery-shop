function htmlRecipe(data,id){
    // console.log();
    let html = ``;
    html += `<div class="modal-content">`;
    html += `<div class="modal-header">`;
    html += `<h3 class="modal-header__title">Thông tin công thức</h3>`;
    html += `<div class="modal-header__icon">`;
    html += `<i class="fa-solid fa-xmark"></i>`;
    html += `</div>`;
    html += `</div>`;
    html += `<div class="modal-body">`;
    html += `<div class="row">`;
    html += `<div class="col-4">`;
    html += `<img src="${data[id].image}" class="modal-image" alt="">`;
    html += `</div>`;
    html += `<div class="col-8">`;
    html += `<h2 class="modal-body__title">${data[id].title}</h2>`;
    html += `<h4 class="modal-body__summary">${data[id].summary}</h4>`;
    html += `<div class="modal-body__recipe">`;
    html += `<p class="modal-body__recipe-title">Nguyên liệu bao gồm:</p>`;
    html += `<ul class="modal-body__recipe-component">`;
    for(let i = 0; i < data[id].recipes.length; i++){
        html += `<li class="modal-body__recipe-items">${data[id].recipes[i]}</li>`;
    }
    html += `</ul>`;
    html += `</div>`;
    html += `<div class="modal-body__tutorial">`;
    html += `<p class="modal-body__tutorial-title">Cách làm:</p>`;
    html += `<ul class="modal-body__tutorial-component">`;
    for(let i = 0; i < data[id].tutorials.length; i++){
    html += `<li class="modal-body__tutorial-items">${data[id].tutorials[i]}</li>`;
    }
    html += `</ul>`;
    html += `</div>`;
    html += `</div>`;
    html += `</div>`;
    html += `</div>`;
    html += `</div>`;
    return html;
}

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
            let id = choose.getAttribute('data-id');
            // console.log(recipes);    
            modal.innerHTML = htmlRecipe(recipesItems,id - 1);
            modal.classList.add('show');
            let close = document.querySelector('.modal-header__icon');
            close.addEventListener("click", function() {
                modal.classList.remove('show');
            });
        })
    })


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