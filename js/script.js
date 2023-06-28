let imagesGallery = document.querySelector(".images__gallery");
let buttonShowMore = document.querySelector(".show");
let video_img = document.querySelector(".concrete__video__img")
let video_triangle = document.querySelector(".triangle");
let carousel__block = document.querySelector(".carousel__block")
let burger_button = document.querySelector(".menu__button");
let menu__phone = document.querySelector(".menu__phone");
let id_radioButton_prev = 0;
let close_button = document.querySelector(".close");
let slash = document.querySelectorAll(".slash__block");

function ScrollToElement(link_element){
    menu__phone.classList.remove("show__menu__phone");
    menu__phone.classList.add("hide__menu__phone");
    setTimeout(200, function(){
        menu__phone.classList.add("none");
    })

    $('a[href^="#"]').on('click', function(event){
        let href = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(href).offset().top
        }, 
        {
            duration: 500,
        });
    })

    return false;
}

//Условие проверки размера ширины экрана для показа или отключения показа бургер-кнопки
if (window.innerWidth <= 1000){
    burger_button.classList.remove("none");
    document.querySelector(".menu__ul").classList.add("none");
    document.querySelector(".control__buttons__left__right").classList.remove("none");
    document.querySelector(".control__buttons").classList.add("none__carousel__item");
}
else{
    burger_button.classList.add("none");
    document.querySelector(".menu__ul").classList.remove("none");
    document.querySelector(".control__buttons__left__right").classList.add("none");
    document.querySelector(".control__buttons").classList.remove("none__carousel__item");
}

if (window.innerWidth <= 500){
    slash.forEach(element => {
        element.classList.add("none");
    });
}
else{
    slash.forEach(element => {
        element.classList.remove("none");
    });
}

//Событие на изменение экрана для того, что бы вовремя отключить отображение
//меню-кнопок и сделать отображение бургер-кнопки
window.onresize = function(){
    if (window.innerWidth <= 1000){
        burger_button.classList.remove("none");
        document.querySelector(".menu__ul").classList.add("none");
        document.querySelector(".control__buttons__left__right").classList.remove("none");
        document.querySelector(".control__buttons").classList.add("none__carousel__item");
    }
    else{
        burger_button.classList.add("none");
        document.querySelector(".menu__ul").classList.remove("none");
        document.querySelector(".control__buttons__left__right").classList.add("none");
        document.querySelector(".control__buttons").classList.remove("none__carousel__item");
    }

    if (window.innerWidth <= 500){
        slash.forEach(element => {
            element.classList.add("none");
        });
    }
    else{
        slash.forEach(element => {
            element.classList.remove("none");
        });
    }
}

//Функция, вызываемая после нажатия на крестик в бургер-меню
close_button.addEventListener("click", function(){
    menu__phone.classList.remove("show__menu__phone");
    menu__phone.classList.add("hide__menu__phone");
    setTimeout(200, function(){
        menu__phone.classList.add("none");
    })
})

//Функция, вызываемая по нажатию на бургер-меню
burger_button.addEventListener("click", function(){
    menu__phone.classList.remove("hide__menu__phone");
    menu__phone.classList.remove("none");
    menu__phone.classList.add("show__menu__phone");
})

//Code of showing more photos in block ImagesGallery
buttonShowMore.addEventListener("click", function(event){
    let time = 100;
    if (imagesGallery.children[imagesGallery.childElementCount-1].classList.contains("none")){
        for(let i = imagesGallery.childElementCount-6; i < imagesGallery.childElementCount+1; i++){
            setTimeout(function(){
                imagesGallery.children[i].classList.remove("none");
            }, time)
            time += 10;
        }
        buttonShowMore.textContent = "СВЕРНУТЬ";
    }
            
    else{
        for(let i = imagesGallery.childElementCount-6; i < imagesGallery.childElementCount+1; i++){
            setTimeout(function(){
                imagesGallery.children[i].classList.add("none");
            }, time)
            time += 10;
        }
        buttonShowMore.textContent = "ПОКАЗАТЬ ЕЩЕ";
    }

})

video_img.addEventListener("mouseover", function(event){
    video_triangle.classList.add("remove__triangle");
})

video_img.addEventListener("mouseout", function(event){
    video_triangle.classList.remove("remove__triangle");
})

//Функция свайпа через кнопку сбоку (левая)
function SwipeToLeftButton(){
    let time = 250;
    let index_active = 0;
     //Получаю активный элемент на странице в карусели
     for (let index = 0; index < carousel__block.childElementCount-1; index++){
        if (carousel__block.children[index].classList.contains("none__carousel__item")){
            
        }
        else{
            active_item = carousel__block.children[index];
            index_active = index;
            break;
        }
    }

    if (index_active == 0){
        //Добавляю для актива анимацию свайпа налево
        active_item.classList.add("change__item__left");

      //Задержка для удлаления анимации свайпа
      setTimeout(function(){
        active_item.classList.remove("change__item__left");
    }, time)

    //Задержка для установления для всех элементов видимости none
    setTimeout(function(){
        for (let index = 0; index < carousel__block.childElementCount-2; index++){
            carousel__block.children[index].classList.add("none__carousel__item");
          }
    }, time)

    //Задержка для отображения элемента на странице и добавление анимации
    setTimeout(function(){
        carousel__block.children[9].classList.remove("none__carousel__item");
        carousel__block.children[9].classList.add("show_from_right");
    }, time)

    //Задержка для удаления анимации
    setTimeout(function(){
        carousel__block.children[9].classList.remove("show_from_right");
    }, time+time)

    }
    else{
        //Добавляю для актива анимацию свайпа направо
     active_item.classList.add("change__item__left");
     
     //Задержка для удлаления анимации свайпа
     setTimeout(function(){
         active_item.classList.remove("change__item__left");
     }, time)
 
     //Задержка для установления для всех элементов видимости none
     setTimeout(function(){
         for (let index = 0; index < carousel__block.childElementCount-2; index++){
             carousel__block.children[index].classList.add("none__carousel__item");
           }
     }, time)
 
     //Задержка для отображения элемента на странице и добавление анимации
     setTimeout(function(){
         carousel__block.children[index_active-1].classList.remove("none__carousel__item");
         carousel__block.children[index_active-1].classList.add("show_from_right");
     }, time)
 
     //Задержка для удаления анимации
     setTimeout(function(){
         carousel__block.children[index_active-1].classList.remove("show_from_right");
     }, time+time)
    }
}

//Функция свайпа через кнопку сбоку (правая)
function SwipeToRightButton(){
    let time = 250;
    let index_active = 0;
     //Получаю активный элемент на странице в карусели
     for (let index = 0; index < carousel__block.childElementCount-1; index++){
        if (carousel__block.children[index].classList.contains("none__carousel__item")){
            
        }
        else{
            active_item = carousel__block.children[index];
            index_active = index;
            break;
        }
    }

    if (index_active == 9){
        //Добавляю для актива анимацию свайпа направо
        active_item.classList.add("change__item__right");

      //Задержка для удлаления анимации свайпа
      setTimeout(function(){
        active_item.classList.remove("change__item__right");
    }, time)

    //Задержка для установления для всех элементов видимости none
    setTimeout(function(){
        for (let index = 0; index < carousel__block.childElementCount-2; index++){
            carousel__block.children[index].classList.add("none__carousel__item");
          }
    }, time)

    //Задержка для отображения элемента на странице и добавление анимации
    setTimeout(function(){
        carousel__block.children[0].classList.remove("none__carousel__item");
        carousel__block.children[0].classList.add("show_from_left");
    }, time)

    //Задержка для удаления анимации
    setTimeout(function(){
        carousel__block.children[0].classList.remove("show_from_left");
    }, time+time)

    }
    else{
        //Добавляю для актива анимацию свайпа направо
     active_item.classList.add("change__item__right");
     
     //Задержка для удлаления анимации свайпа
     setTimeout(function(){
         active_item.classList.remove("change__item__right");
     }, time)
 
     //Задержка для установления для всех элементов видимости none
     setTimeout(function(){
         for (let index = 0; index < carousel__block.childElementCount-2; index++){
             carousel__block.children[index].classList.add("none__carousel__item");
           }
     }, time)
 
     //Задержка для отображения элемента на странице и добавление анимации
     setTimeout(function(){
         carousel__block.children[index_active+1].classList.remove("none__carousel__item");
         carousel__block.children[index_active+1].classList.add("show_from_left");
     }, time)
 
     //Задержка для удаления анимации
     setTimeout(function(){
         carousel__block.children[index_active+1].classList.remove("show_from_left");
     }, time+time)
    }
}

//Функция свайпа объекта направо
function SwipeToRight(element, active_item, time){
    //Добавляю для актива анимацию свайпа направо
    active_item.classList.add("change__item__right");

    //Задержка для удлаления анимации свайпа
    setTimeout(function(){
        active_item.classList.remove("change__item__right");
    }, time)

    //Задержка для установления для всех элементов видимости none
    setTimeout(function(){
        for (let index = 0; index < carousel__block.childElementCount-2; index++){
            carousel__block.children[index].classList.add("none__carousel__item");
          }
    }, time)

    //Задержка для отображения элемента на странице и добавление анимации
    setTimeout(function(){
        carousel__block.children[element.id-1].classList.remove("none__carousel__item");
        carousel__block.children[element.id-1].classList.add("show_from_left");
    }, time)
    
    //Задержка для удаления анимации
    setTimeout(function(){
        carousel__block.children[element.id-1].classList.remove("show_from_left");
    }, time+time)

    id_radioButton_prev = element.id;
}

//Функция свайпа объекта налево
function SwipeToLeft(element, active_item, time){
    console.log("\nМеньше");
    console.log(`Нынешний ${element.id}`);
        console.log(`Предыдущее ${id_radioButton_prev}`);
    //Добавляю для актива анимацию свайпа направо
    active_item.classList.add("change__item__left");

    //Задержка для удлаления анимации свайпа
    setTimeout(function(){
        active_item.classList.remove("change__item__left");
    }, time)

    //Задержка для установления для всех элементов видимости none
    setTimeout(function(){
        for (let index = 0; index < carousel__block.childElementCount-2; index++){
            carousel__block.children[index].classList.add("none__carousel__item");
          }
    }, time)

    //Задержка для отображения элемента на странице и добавление анимации
    setTimeout(function(){
        carousel__block.children[element.id-1].classList.remove("none__carousel__item");
        carousel__block.children[element.id-1].classList.add("show_from_right");
    }, time)
    
    //Задержка для удаления анимации
    setTimeout(function(){
        carousel__block.children[element.id-1].classList.remove("show_from_right");
    }, time+time)

    id_radioButton_prev = element.id;
}


function ChangeItem(element){
    let time = 250;
    let active_item;

    //Получаю активный элемент на странице в карусели
    for (let index = 0; index < carousel__block.childElementCount-1; index++){
        if (carousel__block.children[index].classList.contains("none__carousel__item")){
            
        }
        else{
            active_item = carousel__block.children[index];
            break;
        }
    }

    //Условие для свайпа направо
    if (Number(element.id) > Number(id_radioButton_prev)){
       SwipeToRight(element, active_item, time)
    } 
    //Условие для свайпа налево
    else if (Number(element.id) < Number(id_radioButton_prev)){
        SwipeToLeft(element, active_item, time)
    }

    //Условие, что бы не свайпалось при нажатии на одну и ту же кнопку
    else{
        
    }
}


