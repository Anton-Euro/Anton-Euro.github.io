ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [53.26208809, 28.64121338],
        zoom: 13,
        controls: ['zoomControl']
    });
    var placemark_1 = new ymaps.Placemark([53.31500795, 28.64318814], {
        balloonContentHeader: '<h1>Сумченко Степан Сергеевич</h1>',
        balloonContent: "<div id='text_br'>Сумченко Степан Сергеевич - В 1928 году Степан Сумченко был призван в Красную Армию. <br><a href='1.html' id='next'>Подробнее...</a></div>",
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'images/pm.png',
        iconImageSize: [47, 67],
        iconImageOffset: [-19, -60],
        balloonMaxWidth: 500
    });
    myMap.geoObjects.add(placemark_1);
    var placemark_2 = new ymaps.Placemark([53.30841212, 28.63420868], {
        balloonContentHeader: '<h1>Борис Михайлович Дмитриев</h1>',
        balloonContent: "<div id='text_br'>Борис Михайлович Дмитриев (11 июня 1924 - 23 февраля 1944) — партизан Великой Отечественной войны, Герой Советского Союза (1944). <br><a href='2.html' id='next'>Подробнее...</a></div>",
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'images/pm.png',
        iconImageSize: [47, 67],
        iconImageOffset: [-19, -60],
        balloonMaxWidth: 500
    });
    myMap.geoObjects.add(placemark_2);
    var placemark_3 = new ymaps.Placemark([53.30871697, 28.64157221], {
        balloonContentHeader: '<h1>Римма Владимировна Кунько</h1>',
        balloonContent: "<div id='text_br'>Римма Владимировна Кунько (14 декабря 1926 года — 1 июля 1944 года) — партизанка, участница партизанского движения на территории Могилёвской области Белорусской ССР в годы Великой Отечественной войны. <br><a href='3.html' id='next'>Подробнее...</a></div>",
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'images/pm.png',
        iconImageSize: [47, 67],
        iconImageOffset: [-19, -60],
        balloonMaxWidth: 500
    });
    myMap.geoObjects.add(placemark_3);
    var placemark_4 = new ymaps.Placemark([53.30635665, 28.64452638], {
        balloonContentHeader: '<h1>Николай Филиппович Королёв</h1>',
        balloonContent: "<div id='text_br'>Николай Филиппович Королёв (01 июля 1906, д. Аминовичи, Могилёвская губерния, Российская империя — 07 апреля 1972, Могилёв, СССР) — советский военный и партийный деятель, генерал-майор (1943), Герой Советского Союза (1970). <br><a href='4.html' id='next'>Подробнее...</a></div>",
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'images/pm.png',
        iconImageSize: [47, 67],
        iconImageOffset: [-19, -60],
        balloonMaxWidth: 500
    });
    myMap.geoObjects.add(placemark_4);
    var placemark_5 = new ymaps.Placemark([53.30626823, 28.64116264], {
        balloonContentHeader: '<h1>Каданчик Сергей Николаевич</h1>',
        balloonContent: "<div id='text_br'>Каданчик Сергей Николаевич (12 сентября 1906 — 15 сентября 1943) — советский офицер, командир 1339-го стрелкового полка 318-й дивизии 18-й армии, подполковник. <br><a href='5.html' id='next'>Подробнее...</a></div>",
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'images/pm.png',
        iconImageSize: [47, 67],
        iconImageOffset: [-19, -60],
        balloonMaxWidth: 500
    });
    myMap.geoObjects.add(placemark_5);
    var placemark_6 = new ymaps.Placemark([53.30159582, 28.66239669], {
        balloonContentHeader: '<h1>Фёдор Андреевич Крылович</h1>',
        balloonContent: "<div id='text_br'>Фёдор Андреевич Крыло́вич (23.03.1916, Минск, Российская империя — 07.11.1959, Осиповичи, Могилёвская область, БССР, СССР) — советский партизан, один из организаторов Осиповичского коммунистического подполья, руководитель партизанской диверсионной группы в годы Великой Отечественной в Белоруссии. <br><a href='6.html' id='next'>Подробнее...</a></div>",
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'images/pm.png',
        iconImageSize: [47, 67],
        iconImageOffset: [-19, -60],
        balloonMaxWidth: 500
    });
    myMap.geoObjects.add(placemark_6);
}
