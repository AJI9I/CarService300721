//ymaps.ready(['AnimatedLine']).then(init);

function init(ymaps) {
    // Создаем карту.
    var myMap = new ymaps.Map("map", {
        center: [55.129569, 60.143019],
        zoom: 15,
	controls: ['zoomControl']
    }),

    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Автосервис SVEAUTO74',
        balloonContent: 'Автосервис который Вы ищите'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: '/img/placemark.svg',
        
        // Размеры метки.
        iconImageSize: [50, 50],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-20, -50]
    }),

    myPlacemarkWithContent = new ymaps.Placemark([55.13228220730789,60.144646038487686], {
        hintContent: 'Гипермаркет спар',
        balloonContent: 'Семейный магазин',
        iconContent: ''
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'img/sparfavicon200.webp',
        // Размеры метки.
        iconImageSize: [48, 48],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-0, -0],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        iconContentOffset: [0, 0],
        // Макет содержимого.
        iconContentLayout: MyIconContentLayout
    });

    myMap.geoObjects.add(myPlacemark).add(myPlacemarkWithContent);

    myMap.behaviors.disable('scrollZoom');
    // //на мобильных устройствах... (проверяем по userAgent браузера)
    // if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    //     //... отключаем перетаскивание карты
    //     myMap.behaviors.disable('drag');
    // }
    myMap.behaviors.disable('drag');

    /*
    // Создаем ломаные линии.
    var firstAnimatedLine = new ymaps.AnimatedLine([
        [55.13220229609395,60.144651402905716],
        [55.13179659052954,60.14381991811111],
        [55.12941890118113, 60.146405181933865],
        [55.12928980445672, 60.14590629105711],
        [55.12948037566443, 60.14283247952605],
        
    ], {}, {
        // Задаем цвет.
        strokeColor: "#ED4543",
        // Задаем ширину линии.
        strokeWidth: 5,
        // Задаем длительность анимации.
        animationTime: 2000
    });
	
	
   
    // Добавляем линии на карту.
    myMap.geoObjects.add(firstAnimatedLine);
    
  
    // Функция анимации пути.
    function playAnimation() {
               
        
        // Анимируем первую линию.
        firstAnimatedLine.animate()
           
            // После окончания анимации второй линии добавляем третью метку на карту.
            .then(function() {
             
                // Добавляем паузу после анимации.
                ymaps.vow.delay(null, 1000);
                firstAnimatedLine.reset();
                return ymaps.vow.delay(null, 2000);
            })
            // После паузы перезапускаем анимацию.
            .then(function() {
               
                
                // Перезапускаем анимацию.
                playAnimation();
            });
    }
    // Запускаем анимацию пути.
    playAnimation();*/
}
