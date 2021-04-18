ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [53.26208809, 28.64121338],
        zoom: 13,
        controls: ['zoomControl']
    });
    var placemark_1 = new ymaps.Placemark([53.31500795, 28.64318814], {
        balloonContentHeader: '<p>Сумченко Степан Сергеевич</p>',
        balloonContent: "<div id='text_br'>Партизаны только 1-й Осиповичской бригады пустили под откос 271 немецкий эшелон, вывели из строя 339 паровозов, 2190 вагонов, 463 платформы, 143 цистерны, уничтожили и повредили 274 автомашины, 17 танков, 10 бронемашин, сожгли 2235 тонн горючего. Было разгромлено 13 вражеских гарнизонов, убито около 15 тысяч гитлеровцев, взорваны 21 железнодорожный и 269 шоссейных мостов, 17 км — железнодорожного полотна… <br><a href='1.html' id='next'>Подробнее...</a></div>",
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'images/pm.png',
        iconImageSize: [55, 75],
        iconImageOffset: [-23, -70],
        balloonMaxWidth: 500
    });
    myMap.geoObjects.add(placemark_1);
    var placemark_2 = new ymaps.Placemark([53.30841212, 28.63420868], {
        balloonContentHeader: '<p>Борис Михайлович Дмитриев</p>',
        balloonContent: "<div id='text_br'>Борис Михайлович Дмитриев (11 июня 1924 - 23 февраля 1944) — партизан Великой Отечественной войны, Герой Советского Союза (1944). <br><a href='2.html' id='next'>Подробнее...</a></div>",
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'images/pm.png',
        iconImageSize: [55, 75],
        iconImageOffset: [-23, -70],
        balloonMaxWidth: 500
    });
    myMap.geoObjects.add(placemark_2);
    var placemark_3 = new ymaps.Placemark([53.30871697, 28.64157221], {
        balloonContentHeader: '<p>Римма Владимировна Кунько</p>',
        balloonContent: "<div id='text_br'>Римма Владимировна Кунько родилась 14 декабря 1926 г. в г. Речица Гомельской области. Отец и мать Риммы были учителями. <br><a href='3.html' id='next'>Подробнее...</a></div>",
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'images/pm.png',
        iconImageSize: [55, 75],
        iconImageOffset: [-23, -70],
        balloonMaxWidth: 500
    });
    myMap.geoObjects.add(placemark_3);
    var placemark_4 = new ymaps.Placemark([53.30635665, 28.64452638], {
        balloonContentHeader: '<p>Николай Филиппович Королёв</p>',
        balloonContent: "<div id='text_br'>Николай Филиппович Королёв(01.07.1906 — 09.04.1972) — один из организаторов и руководителей коммунистического подполья и партизанского движения в Могилёвской обл. в годы Великой Отечественной войны, Герой Советского Союза (1.1.1944), генерал-майор (1943), почётный гражданин г. Могилёва (1970). <br><a href='4.html' id='next'>Подробнее...</a></div>",
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'images/pm.png',
        iconImageSize: [55, 75],
        iconImageOffset: [-23, -70],
        balloonMaxWidth: 500
    });
    myMap.geoObjects.add(placemark_4);
    var placemark_5 = new ymaps.Placemark([53.30626823, 28.64116264], {
        balloonContentHeader: '<p>Каданчик Сергей Николаевич</p>',
        balloonContent: "<div id='text_br'>Каданчик Сергей Николаевич родился 12 сентября 1906 года в деревне Моисеевичи ныне Осиповичиского района Могилевской области. <br><a href='5.html' id='next'>Подробнее...</a></div>",
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'images/pm.png',
        iconImageSize: [55, 75],
        iconImageOffset: [-23, -70],
        balloonMaxWidth: 500
    });
    myMap.geoObjects.add(placemark_5);
    var placemark_6 = new ymaps.Placemark([53.30159582, 28.66239669], {
        balloonContentHeader: '<p>Фёдор Андреевич Крылович</p>',
        balloonContent: "<div id='text_br'>Фёдор Андреевич Крылович (23.03.1916 - 07.11.1959)<br>«Диверсия Крыловича» стала одной из крупнейших диверсий всей Второй мировой войны. <br><a href='6.html' id='next'>Подробнее...</a></div>",
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'images/pm.png',
        iconImageSize: [55, 75],
        iconImageOffset: [-23, -70],
        balloonMaxWidth: 500
    });
    myMap.geoObjects.add(placemark_6);
}
