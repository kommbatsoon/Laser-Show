(function () {
    window.scrollTo(0, 0);

    //Popup init
    $('.popup_c').magnificPopup();
    //Popup gallery init
    $('.gallery-item').magnificPopup({
        type: 'image',
        gallery:{enabled:true}
    });
    $('.gallery-item-1').magnificPopup({
        type: 'image',
        gallery:{enabled:true}
    });

    /* Working with REViEWS data */

    //Reviews list (id, photo, fullName, text)
    let REVIEWS_DATA = [
        {
            id: 1,
            photo: 'photo1.PNG',
            fullName: 'Юлия Сенник',
            text: ' Спасибо большое Евгению за невероятное лазерное шоу! Я догадывалась, что в живую выступление будет намного эффектнее, чем на видео, но не думала, что настолько! Это правда очень круто! Гости остались под впечатлением (их отзывы - "это просто вау", "круто", "никогда такого не видел", "очень необычно" и т.д.). Даже администратор коттеджа нам сказал, что сколько было свадеб у них, он ни разу такого не видел! Поэтому те, кто решается, приглашать ли Евгения на свой праздник, с уверенностью отвечаю - конечно приглашать! Это будет изюминкой любого мероприятия! Спасибо еще раз!!',
            commentLink:'https://vk.com/fil_younger?w=wall-107427771_135%2Fall'
        },
        {
            id: 2,
            photo: 'photo8.PNG',
            fullName: 'Олег Юша',
            text: 'Если вы решили заказать на свое торжество Иллюзионно-лазерное шоу от Евгения Филона, то вы точно не прогадаете! Яркие эмоции, прекрасное впечатление. Это то, что нужно вам, это то, что я вам рекомендую. Берите и заказывайте, праздник будет мега крутым!',
            commentLink:'https://vk.com/fil_younger?w=wall-107427771_135%2Fall',
            videoLink:'https://www.youtube.com/watch?v=o0cvjoAiwk8&feature=youtu.be'
        },
        {
            id: 3,
            photo: 'photo4.PNG',
            fullName: 'Игорь Воеводин',
            text: 'Хотим выразить огромную благодарность Евгению за подареный нам вечер!!! Гости в восторге, до сих пор отходим от впечатления !!! Все было на высоте !! Вы нас очень удивили и порадовали !!)',
            commentLink:'https://vk.com/fil_younger?w=wall-107427771_130%2Fall'
        },
        {
            id: 4,
            photo: 'photo2.PNG',
            fullName: 'Диана Третьякевич',
            text: 'Хотим сказать огромное спасибо Жене за проделанную работу на нашем торжестве! Это было невероятное, завораживающее, незабываемое шоу!!! Мы и наши гости под большим впечатлением!!! Лазерное шоу стало "вишенкой на торте"! Захватывающе!!!\n' +
            'Все гости до сих пор нам говорят о своих впечатлениях! И мы их понимаем! Восторг!' +
            'Женечка, ты крутой! Мы желаем тебе таких же ярких выступлений, удивлённой и восторженной публики, новых идей, успешных исполнений и море-море-море энергии!! То, что ты делаешь - невероятно!\n' +
            'Спасибо, что разделил с нами наш праздник!!! 👏👏👏👍🔮🎆🎇🎊🃏🌟',
            commentLink:'https://vk.com/fil_younger?w=wall-107427771_127%2Fall'
        },

        {
            id: 5,
            photo: 'photo5.PNG',
            fullName: 'Елена Кондратович',
            text: 'Хотелось бы выразить большую благодарность Жене за его прекрасное выступление на нашем небольшом мероприятии) Благодаря ему, у нас получился отличный праздник, с массой улыбок и положительных эмоций. Наши гости выразили свой восторг и восхищение происходящим. Лазерное шоу – это просто что-то невероятное. Описать словами невозможно, это просто нужно увидеть)  С удовольствием приглашайте его на свои мероприятия! Женя, огромное тебе спасибо! Все были в полном восторге!',
            commentLink:'https://vk.com/fil_younger?w=wall-107427771_117%2Fall'
        },
        {
            id: 6,
            photo: 'photo6.PNG',
            fullName: 'Юлия Матюк',
            text: 'Хочу оставить отзыв о шоу. Все было фантастически. То, что ты делаешь - невероятно! Очень ярко и феерично.. Остались только позитивные эмоции. Спасибо вам за яркие воспоминания которые у меня остались.',
            commentLink:'https://vk.com/fil_younger?w=wall-107427771_44%2Fall'
        },
        {
            id: 7,
            photo: 'photo7.PNG',
            fullName: 'Милена Минич',
            text: 'Мы безумно рады, что этот талантливый и очень харизматичный молодой человек выступал на нашей свадьбе !! Все было на высшем уровне!! Это было настоящее чудо!!! Еще долго будем вспоминать ваши выступления! Огромное спасибо)',
            commentLink:'https://vk.com/fil_younger?w=wall-107427771_61%2Fall'
        },
        {
            id: 8,
            photo: 'photo3.PNG',
            fullName: 'Юлька Садовская',
            text: 'Большое спасибо Евгению за проведенные шоу на нашей свадьбе! Все было супер! Фокусы удивили всех!! Лазерное шоу было 🔥🔥🔥 и сам Евгений был на высоте! Мы желаем тебе таких же ярких выступлений, удивлённой и восторженной публики, новых идей, успешных исполнений и море-море-море энергии!! Заказывайте - не пожалеете! Это будет изюминкой любого мероприятия! Спасибо еще раз!!',
            commentLink:'https://vk.com/fil_younger?w=wall-107427771_126%2Fall'
        },
    ];

    let reviewsAllCount = REVIEWS_DATA.length;

    let VISIBLE_REVIEWS_COUNT = 4; //Number of Reviews On Page (default)
    let REVIEWS_INCREMENT     = 4; //Number of Reviews that will be Showed after 'Read more' click

    //Changing comments count for Mobile Version
    let windowWidth = window.innerWidth;
    if(windowWidth < 768){
        VISIBLE_REVIEWS_COUNT = 2;
        REVIEWS_INCREMENT = 2;
    }

    const REVIEWS_LIST_LEFT_COLUMN  = document.getElementById('review-list-left-column');
    const REVIEWS_LIST_RIGHT_COLUMN = document.getElementById('review-list-right-column');
    const SHOW_MORE_BUTTON          = document.getElementById('show-more-button');

    //Printing reviews in 2 columns (params: reviewsList, node1, node2).
    function printReviews(reviews, leftColumnNode, rightColumnNode) {
        reviews.forEach(function (review, key) {
            const isEven = key % 2 === 0;
            const node = isEven ? leftColumnNode : rightColumnNode;
            if (key < VISIBLE_REVIEWS_COUNT) {
                node.innerHTML += `<li class="review-item">
                                        <a class="review-header" href="${review.commentLink}" target="_blank">
                                            <img src="./img/customerPhotos/` + review.photo + `"/>
                                            <span class="full-name">${review.fullName}</span>
                                        </a>
                                        <div class="review-body">${review.text}<br><a class="videoLink" href="${review.videoLink || ''}" target="_blank">${review.videoLink ? 'Смотреть отзыв на YouTube' : ''}</a></div> </div>
                                    </li>`;
            }
        });
    }

    printReviews(REVIEWS_DATA, REVIEWS_LIST_LEFT_COLUMN, REVIEWS_LIST_RIGHT_COLUMN);

    //Listener of 'Read more' button Click
    SHOW_MORE_BUTTON.addEventListener('click', function () {
        VISIBLE_REVIEWS_COUNT += REVIEWS_INCREMENT;
        REVIEWS_LIST_LEFT_COLUMN.innerHTML = '';
        REVIEWS_LIST_RIGHT_COLUMN.innerHTML = '';
        printReviews(REVIEWS_DATA, REVIEWS_LIST_LEFT_COLUMN, REVIEWS_LIST_RIGHT_COLUMN);

        //Delete button from DOM
        if (VISIBLE_REVIEWS_COUNT >= reviewsAllCount) {
            SHOW_MORE_BUTTON.className += ' hide'
        }
    });


    /* Working with USER's forms data  */

    let DEFAULT_INPUT_VALUE = '+375'; //Default number string

    function setDefaultValueToInput(node) {
        node.value = '';
        node.value = DEFAULT_INPUT_VALUE;
    }
    function AddListenerToPhoneInput(inputNode, buttonNode) {
        inputNode.addEventListener('input', function (e) {

            const value = e.target.value;
            if (value.length < 4) setDefaultValueToInput(inputNode);

            if(value.length === 17){
                buttonNode.className = 'active';
                buttonNode.removeAttribute('disabled');
            } else {
                buttonNode.className = '';
                buttonNode.setAttribute('disabled', 'disabled')
            }
        });
    }

    const PHONE_INPUT_TOP      = document.getElementById('input-phone-top');
    const PHONE_INPUT_BOTTOM   = document.getElementById('input-phone-bottom');
    const PHONE_INPUT_POPUP    = document.getElementById('input-phone-popup');

    const SUBMIT_BUTTON_TOP    = document.getElementById('submit-btn-top');
    const SUBMIT_BUTTON_BOTTOM = document.getElementById('submit-btn-bottom');
    const SUBMIT_BUTTON_POPUP  = document.getElementById('submit-btn-popup');

    let phoneMaskTop    = new IMask(PHONE_INPUT_TOP, {mask: '+{375}(00)000-00-00'});
    let phoneMaskBottom = new IMask(PHONE_INPUT_BOTTOM, {mask: '+{375}(00)000-00-00'});
    let phoneMaskPopup  = new IMask(PHONE_INPUT_POPUP, {mask: '+{375}(00)000-00-00'});

    AddListenerToPhoneInput(PHONE_INPUT_TOP, SUBMIT_BUTTON_TOP);
    AddListenerToPhoneInput(PHONE_INPUT_BOTTOM, SUBMIT_BUTTON_BOTTOM);
    AddListenerToPhoneInput(PHONE_INPUT_POPUP, SUBMIT_BUTTON_POPUP);

    setDefaultValueToInput(PHONE_INPUT_TOP);


    /* Working with SCROLLING  */

    function getElementY(query) {
        return window.pageYOffset + document.querySelector(query).getBoundingClientRect().top
    }
    function doScrolling(element, duration) {
        let startingY = window.pageYOffset;
        let elementY = getElementY(element);
        let targetY = document.body.scrollHeight - elementY < window.innerHeight ? document.body.scrollHeight - window.innerHeight : elementY;
        let diff = targetY - startingY + 5;
        let easing = function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 };
        let start;

        if (!diff) return;

        window.requestAnimationFrame(function step(timestamp) {
            if (!start) start = timestamp;
            let time = timestamp - start;
            let percent = Math.min(time / duration, 1);
            percent = easing(percent);

            window.scrollTo(0, startingY + diff * percent);

            if (time < duration) {
                window.requestAnimationFrame(step)
            }
        })
    }

    const SCROLLING_TIME = 1500;

    const achievementsLink = document.getElementById('achievements-link');
    const showLink         = document.getElementById('show-link');
    const customersLink    = document.getElementById('customers-link');
    const reviewsLink      = document.getElementById('reviews-link');

    function AddScrollEventToLink (nodeLink, navigateTo) {
        nodeLink.addEventListener('click', function () {
            doScrolling(navigateTo, SCROLLING_TIME)
        });
    }

    AddScrollEventToLink(achievementsLink, '#achievements-section');
    AddScrollEventToLink(showLink, '#show-section');
    AddScrollEventToLink(customersLink, '#customers-section');
    AddScrollEventToLink(reviewsLink, '#reviews-section');

    const VIDEO_1_ID = $('#video-1-id');
    const VIDEO_2_ID = $('#video-2-id');

    $(window).scroll(function() {
        const LASER_GAME_VIDEO1 = document.getElementById('illusion-laser-video');
        const LASER_GAME_VIDEO2 = document.getElementById('laser-game-video');

        let srcVideo1 = LASER_GAME_VIDEO1.getAttribute('src'),
            srcVideo2 = LASER_GAME_VIDEO2.getAttribute('src');

        const isVideo1ContainAutoplay = srcVideo1.indexOf('autoplay=1') !== -1;
        const isVideo2ContainAutoplay = srcVideo2.indexOf('autoplay=1') !== -1;

        let hTvideo1 = VIDEO_1_ID.offset().top,
            hTvideo2 = VIDEO_2_ID.offset().top,
            wH = $(window).height(),
            wS = $(this).scrollTop();

        if (wS > (hTvideo1 - wH) && !isVideo1ContainAutoplay && !isVideo2ContainAutoplay) {
            LASER_GAME_VIDEO1.setAttribute('src', srcVideo1 + '?autoplay=1');
            //$('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
        }
        if (wS > (hTvideo2 - wH) && !isVideo1ContainAutoplay && !isVideo2ContainAutoplay) {
            LASER_GAME_VIDEO2.setAttribute('src', srcVideo2 + '?autoplay=1');
            //$('.youtube-video')[1].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
        }



    });

    $('span.play-video').click(function(){
        $('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
    });
    $('span.stop-video').click(function(){
        $('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    });
    $('span.pause-video').click(function(){
        $('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
    });


    /* Setting focus after scrolling/navigation to from input  */
    const buttonsForPopup = document.querySelectorAll('.popup_c');
    buttonsForPopup.forEach(function (button) {
        const buttonId = button.id;
        button.addEventListener('click', function () {
            const nodeForFocus = document.getElementById('input-phone-popup');
            nodeForFocus.focus();
        })
    });


    /* CallBack Forms sending  */
    $("#bottom-form").submit(function(e) {
        let ths = $(this);
        e.preventDefault;
        $.ajax({
            type: "POST", url: "mail.php", data: $(this).serialize()
        }).done(function() {
            alert("Спасибо за заявку!");
            setTimeout(function() {
                let magnificPopup = $.magnificPopup.instance;
                magnificPopup.close();
                ths.trigger("reset");}, 1000);
        });
        return false;
    });
    $("#top-form").submit(function(e) {
        let ths = $(this);
        e.preventDefault;
        $.ajax({
            type: "POST", url: "mail.php", data: $(this).serialize()
        }).done(function() {
            alert("Спасибо за заявку!");
            setTimeout(function() {
                let magnificPopup = $.magnificPopup.instance;
                magnificPopup.close();
                ths.trigger("reset");}, 1000);
        });
        return false;
    });
    $("#hidden_form").submit(function(e) {
        let ths = $(this);
        e.preventDefault;
        $.ajax({
            type: "POST", url: "mailPopup.php", data: $(this).serialize()
        }).done(function() {
            alert("Спасибо за заявку!");
            setTimeout(function() {
                let magnificPopup = $.magnificPopup.instance;
                magnificPopup.close();
                ths.trigger("reset");}, 1000);
        });
        return false;
    });


    /* Sliders init */

    let SLIDES_TO_SHOW = 5;
    if(windowWidth < 768) SLIDES_TO_SHOW = 2;

    $('.slider-1').slick({
        infinite: true,
        arrows:true,
        slidesToShow: SLIDES_TO_SHOW,
        autoplay:true,
        autoplaySpeed:2000
    });
    $('.slider-2').slick({
        infinite: true,
        arrows:true,
        slidesToShow: SLIDES_TO_SHOW,
        autoplay:true,
        autoplaySpeed:2000
    });
    $('.customers-slider').slick({
        infinite: true,
        arrows:true,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay:true,
        autoplaySpeed:1000
    });
})();