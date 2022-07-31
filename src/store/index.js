import { createStore } from 'vuex'

export default createStore({
  state: {
    places: null,
    sections: [
      {
        name: "Евразия", 
        id: "eurasia", 
        description: `Евра́зия — крупнейший из шести материков на Земле. Площадь — 53,6 млн км², что составляет 36 % площади суши. 
      Население — 5,349 млрд чел. (1 июл. 2019 г.), что составляет более 70 % населения планеты. 
      Первоначально крупнейшему континенту мира давались различные названия. Александр Гумбольдт использовал название «Азия» для всей Евразии. 
      Карл Густав Ройшле в 1858 году в книге «Справочник по географии» (Handbuch der Geographie) использовал термин 
      «Двойной континент Азия-Европа» (Doppelerdtheil Asien-Europa). 
      Термин «Евразия» впервые употребил геолог Эдуард Зюсс в 1880-х годах.`, },
      {
        name: "Островные государства", 
        id: "islands", 
        description: `Островно́е госуда́рство — государство, расположенное на одном или нескольких островах и не связанное ни одним своим регионом с материком. 
      Островные государства противопоставляются прибрежным государствам или государствам, не имеющим выхода к морю.
      На 2010 год существует 50 островных государств, в том числе два частично признанных (Китайская Республика и Турецкая Республика Северного Кипра) и 
      5 находящихся в свободной ассоциации с другим государством 
      (Острова Кука и Ниуэ — с Новой Зеландией, Федеративные Штаты Микронезии, Маршалловы Острова и Палау — с США). 
      Из них 46 — кроме Китайской Республики, Турецкой Республики Северного Кипра, Островов Кука и Ниуэ — являются членами ООН.
      Также существует государство Австралия, которая находится на 
      отдельном континенте и тем самым имеет некоторые черты островных государств, в частности, отсутствие сухопутных границ с другими странами мира`, },
      {
        name: "Африка", 
        id: "africa", 
        description: `А́фрика — второй по площади материк после Евразии, омывается Средиземным морем с севера, Красным — с северо-востока, 
      Атлантическим океаном с запада и Индийским океаном с востока, и обоими океанами с юга, с разделением по 20 градусу восточной долготы. 
      Африкой называется также часть света, состоящая из материка Африка и прилегающих островов. Площадь Африки без островов составляет 29,2 млн км², с островами — около 30,3 млн км², 
      покрывая, таким образом, 6 % общей площади поверхности Земли и 20,4 % поверхности суши. 
      По площади Африка на 32 % меньше Азии и Америки, являясь после них третьей по величине частью света. 
      На территории Африки расположено 55 государств (включая зависимые территории). Население составляет 1,38 млрд чел. (9 сентября 2021 года; 18,2 % населения Земли) и, таким образом, 
      сравнимо с самыми населёнными государствами мира — Китаем и Индией.`, },
      {
        name: "Северная Америка", 
        id: "north_america", 
        description: `Се́верная Аме́рика (англ. North America, фр. Amérique du Nord, исп. América del Norte, Norteamérica, аст. Ixachitlān Mictlāmpa) — один из шести материков планеты Земля, 
      расположенный на севере Западного полушария Земли.
      Площадь Северной Америки без островов — 20 360 000 км², с островами — 24 365 000 км². 
      По этим показателям она сопоставима с Советским Союзом. 
      К островам Северной Америки относятся Гренландия, Канадский Арктический архипелаг, Вест-Индия, Алеутские острова и другие.
      Население Северной Америки составляет более 500 млн человек, что составляет 7 % от населения мира. В пределах материка часто выделяют 
      Североамериканский регион, объединяющий США, Канаду, Гренландию, Сен-Пьер и Микелон и Бермуды. Северная Америка, как и Австралия, является материком, 
      где нет стран без выхода к морю.`, },
      {
        name: "Антарктида", 
        id: "antarctica", 
        description: `Антаркти́да — континент, расположенный на самом юге Земли. Центр Антарктиды примерно совпадает с 
      Южным географическим полюсом. Омывается Атлантическим, Индийским и Тихим океанами. С 2000 года воды, омывающие Антарктиду к югу от 60° ю. ш., 
      по решению Международной гидрографической организации предложено называть Южным океаном.
      Площадь континента составляет около 14 107 000 км² (из них шельфовые ледники — 930 000 км², острова — 75 500 км²). 
      С севера на юг протяжённость составляет около 3000 км, а с запада на восток — 4500 км. Средняя высота поверхности Антарктиды 
      самая большая из всех континентов. Помимо полюса холода, в 
      Антарктиде располагаются точки самой низкой относительной влажности воздуха, 
      самого сильного и продолжительного ветра и самой интенсивной солнечной радиации.
      Антарктидой также называют часть света, состоящую из материка Антарктиды и прилегающих островов.`, },
      {
        name: "Южная Америка", 
        id: "south_america", 
        description: `Ю́жная Аме́рика — один из шести материков планеты Земля, расположенный на юге Западного полушария. 
      Омывается на западе Тихим океаном, на востоке — Атлантическим, на севере — Карибским морем, которое является естественным рубежом между двумя Америками. 
      Панамский перешеек на северо-западе материка соединяет Южную Америку с Северной. Оба материка составляют часть света Америка.
      В состав Южной Америки также входят различные острова, большинство из которых принадлежит странам континента. Страны Южной Америки, 
      которые граничат с Карибским морем — включая Колумбию, Венесуэлу, Гайану, Суринам, Французскую Гвиану и Панаму — известны как Карибская Южная Америка.
      Площадь континента — 17,84 млн км² (4-е место среди континентов; по площади лишь чуть больше России), 
      население — 438 039 139 (2021 г.) человек (4-е место среди континентов).`, },
      {
        name: "Австралия и океания", 
        id: "australia", 
        description: `Австра́лия (от лат. australis — «южный») — континент, расположенный в Восточном и Южном полушариях Земли. 
      Является наименьшим по площади и самым засушливым материком Земли. 
      Вся территория материка является основной частью одноимённого государства. Материк входит в часть света Австралия и Океания.
      Океа́ния — собирательное название обширного скопления островов и атоллов в центральной и западной частях Тихого океана. 
      Границы Океании условны. Западной границей принято считать остров Новая Гвинея, восточной — остров Пасхи.
      Термин «Океания» впервые употребил географ Конрад Мальт-Брюн.`, }
    ],
    options: [
    { text: 'Евразия', value: 'eurasia' },
    { text: 'Острова и островные государства', value: 'islands' },
    { text: 'Африка', value: 'africa' },
    { text: 'Северная Америка', value: 'north_america' },
    { text: 'Антарктида', value: 'antarctica' },
    { text: 'Южная Америка', value: 'south_america' },
    { text: 'Австралия и океания', value: 'australia' },
  ], 
    countries: [{name: "Финляндия", value: "finland", mainland: "eurasia"}, {name: "Прибалтика", value: "baltic-states", mainland: "eurasia"}, {name: "Дания", value: "denmark", mainland: "eurasia"}, 
    {name: "Норвегия", value: "norway", mainland: "eurasia"}, {name: "Швеция", value: "sweden", mainland: "eurasia"}, 
    {name: "Австрия", value: "austria", mainland: "eurasia"}, {name: "Бавария", value: "bavaria", mainland: "eurasia"}, {name: "Берлин", value: "berlin", mainland: "eurasia"}, 
    {name: "Германия", value: "germany", mainland: "eurasia"}, {name: "Греция", value: "greece", mainland: "eurasia"}, 
    {name: "Швейцария", value: "switzerland", mainland: "eurasia"}, {name: "Нидерланды", value: "netherlands", mainland: "eurasia"},
    {name: "Париж", value: "paris", mainland: "eurasia"}, {name: "Франция", value: "france", mainland: "eurasia"}, 
    {name: "Бельгия и Люксембург", value: "belgium-and-luxembourg", mainland: "eurasia"}, {name: "Испания", value: "spain", mainland: "eurasia"},
    {name: "Италия", value: "italy", mainland: "eurasia"}, {name: "Флоренция", value: "florence", mainland: "eurasia"}, 
    {name: "Португалия", value: "portugal", mainland: "eurasia"}, {name: "Болгария", value: "bulgaria", mainland: "eurasia"}, 
    {name: "Рим", value: "rome", mainland: "eurasia"}, {name: "Транильвания", value: "transylvania", mainland: "eurasia"}, 
    {name: "Венгрия", value: "Hungary", mainland: "eurasia"}, {name: "Румыния", value: "Romania", mainland: "eurasia"}, 
    {name: "Албания, Босния и Македония", value: "albania-and-bosnia-and-macedonia", mainland: "eurasia"}, 
    {name: "Сербия", value: "Serbia", mainland: "eurasia"}, {name: "Словакия", value: "slovakia", mainland: "eurasia"}, 
    {name: "Чехия", value: "czech", mainland: "eurasia"}, {name: "Хорватия", value: "croatia", mainland: "eurasia"}, 
    {name: "Черногория", value: "montenegro", mainland: "eurasia"}, {name: "Словения", value: "slovenia", mainland: "eurasia"}, 
    {name: "Польща", value: "poland", mainland: "eurasia"}, {name: "Россия", value: "Russia", mainland: "eurasia"}, 
    {name: "Беларусь", value: "belarus", mainland: "eurasia"}, {name: "Молдова", value: "moldova", mainland: "eurasia"}, 
    {name: "Армения", value: "armenia", mainland: "eurasia"}, {name: "Грузия", value: "georgia", mainland: "eurasia"}, 
    {name: "Абхазия", value: "abkhazia", mainland: "eurasia"}, {name: "Азербайджан", value: "azerbaijan", mainland: "eurasia"},
    {name: "Казахстан", value: "kazakhstan", mainland: "eurasia"}, {name: "Кыргызстан", value: "kyrgyzstan", mainland: "eurasia"}, 
    {name: "Таджикистан", value: "tajikistan", mainland: "eurasia"}, {name: "Узбекистан", value: "uzbekistan", mainland: "eurasia"},
    {name: "Туркменистан", value: "turkmenistan", mainland: "eurasia"}, {name: "Индия", value: "india", mainland: "eurasia"}, 
    {name: "Долина Катманду", value: "kathmandu-valley", mainland: "eurasia"}, {name: "Непал", value: "nepal", mainland: "eurasia"},
    {name: "Бангладеш", value: "bangladesh", mainland: "eurasia"}, {name: "Гонконг и Макао", value: "hongkong-and-macau", mainland: "eurasia"}, 
    {name: "Китай", value: "china", mainland: "eurasia"}, {name: "Пекин", value: "beijing", mainland: "eurasia"}, 
    {name: "Шанхай", value: "shanghai", mainland: "eurasia"}, {name: "Монголия", value: "mongolia", mainland: "eurasia"}, 
    {name: "Лаос", value: "laos", mainland: "eurasia"}, {name: "Тибет", value: "tibet", mainland: "eurasia"}, 
    {name: "Камбоджа", value: "cambodia", mainland: "eurasia"}, 
    {name: "Вьетнам", value: "vietnam", mainland: "eurasia"}, {name: "Мьянма", value: "myanmar", mainland: "eurasia"}, 
    {name: "Малайзия", value: "malaysia", mainland: "eurasia"}, {name: "Таиланд", value: "thailand", mainland: "eurasia"},
    {name: "Индонезия", value: "indonesia", mainland: "eurasia"}, {name: "Йемен", value: "Yemen", mainland: "eurasia"}, 
    {name: "ОАЭ, Саудовская Аравия, Оман и Катар", value: "uae-and-saudiarabia-and-oman-and-qatar", mainland: "eurasia"}, 
    {name: "Дубай", value: "Dubai", mainland: "eurasia"}, {name: "Сирия, Ливан", value: "syria-and-lebanon", mainland: "eurasia"}, 
    {name: "Иран", value: "iran", mainland: "eurasia"}, {name: "Иордания", value: "jordan", mainland: "eurasia"}, 
    {name: "Стамбул", value: "istanbul", mainland: "eurasia"}, {name: "Турция", value: "Turkey", mainland: "eurasia"}, 
    {name: "Израиль", value: "israel", mainland: "eurasia"}, {name: "Исландия", value: "iceland", mainland: "islands"}, {name: "Лондон", value: "london", mainland: "islands"}, 
    {name: "Великобритания", value: "united-kingdom", mainland: "islands"}, {name: "Шотландия", value: "scotland", mainland: "islands"}, 
    {name: "Ирландия", value: "Ireland", mainland: "islands"}, {name: "Островные государства средиземного моря", value: "mediterranean-islands", mainland: "islands"},
    {name: "Мальдивские острова", value: "Maldives", mainland: "islands"}, {name: "Остров Сицилия", value: "Sicily", mainland: "islands"}, 
    {name: "Шри-Ланка", value: "sri-lanka", mainland: "islands"}, {name: "Япония", value: "Japan", mainland: "islands"}, {name: "Калимантан и Сулавеси", value: "kalimantan-and-sulawesi", mainland: "islands"}, 
    {name: "Остров Ява", value: "java-island", mainland: "islands"}, {name: "Филипины", value: "philippines", mainland: "islands"}, 
    {name: "Маврикий, Cейшельские острова и остров Реюньон", value: "mauritius-and-seychelles-and-reunion-island", mainland: "islands"}, 
    {name: "Мадагаскар", value: "madagascar", mainland: "islands"}, {name: "Острова Карибского бассейна", value: "caribbean-islands", mainland: "islands"},
    {name: "Куба", value: "Cuba", mainland: "islands"}, {name: "Ямайка", value: "jamaica", mainland: "islands"}, {name: "Островные государства Тихого океана", value: "pacific-islands", mainland: "islands"},
    {name: "Каир", value: "cairo", mainland: "africa"}, {name: "Египет", value: "egypt", mainland: "africa"}, {name: "ЮАР", value: "south-africa", mainland: "africa"}, 
    {name: "Тунис", value: "tunisia", mainland: "africa"}, {name: "Эфиопия", value: "ethiopia", mainland: "africa"}, {name: "Марокко", value: "morocco", mainland: "africa"}, 
    {name: "Мали", value: "mali", mainland: "africa"}, {name: "Кения", value: "kenya", mainland: "africa"}, {name: "Ливия", value: "libya", mainland: "africa"}, 
    {name: "Мозамбик", value: "mozambique", mainland: "africa"}, {name: "Намибия", value: "namibia", mainland: "africa"}, {name: "Никарагуа, Сальвадор, Панама и Гондурас", value: "nicaragua-anf-salvador-and-panama-and-honduras", mainland: "north_america"}, 
    {name: "Белиз", value: "belize", mainland: "north_america"}, {name: "Гватемала", value: "guatemala", mainland: "north_america"}, 
    {name: "Коста-Рика", value: "costa-rica", mainland: "north_america"}, {name: "Канада", value: "Canada", mainland: "north_america"}, 
    {name: "Мексика", value: "mexico", mainland: "north_america"}, {name: "Нью-Йорк", value: "new-york", mainland: "north_america"}, {name: "Аляска", value: "alaska", mainland: "north_america"}, 
    {name: "Плато Колорадо", value: "colorado-plateau", mainland: "north_america"}, {name: "США", value: "usa", mainland: "north_america"}, {name: "Антарктида", value: "antarctica", mainland: "antarctica"},
    {name: "Чили", value: "chile", mainland: "south_america"}, {name: "Аргентина, Уругвай", value: "argentina-and-uruguay", mainland: "south_america"}, 
    {name: "Бразилия", value: "brazil", mainland: "south_america"}, {name: "Боливия", value: "bolivia", mainland: "south_america"}, 
    {name: "Венесуэла", value: "venezuela", mainland: "south_america"}, {name: "Перу", value: "peru", mainland: "south_america"}, {name: "Колумбия", value: "colombia", mainland: "south_america"}, 
    {name: "Эквадор", value: "ecuador", mainland: "south_america"}, {name: "Австралия", value: "australia", mainland: "australia"}, {name: "Новая Зеландия", value: "new-zealand", mainland: "australia"}, 
  ],
    placesLocal: [
   {
      name: "Страна муми-троллей", 
      description: `Уже не одно поколение детей выросло на сказках Туве Янссон. Увидеть, как живут волшебные
      персонажи, можно, посетив один из лучших детских тематических парков мира - Долину Муми-троллей. Парк работает в летние месяцы, дети и взрослые могут
      побывать в доме-музее, где обитает муми-семья, увидеть театрализованные представления, почитать местную газету и сфотографироваться на память с любимыми
      героями.`, 
      id: "1", 
      picture: "https://fs.tonkosti.ru/7l/z8/7lz83it58swscs0kw0g4ogoco.jpg", 
      northern: `60.2823`, 
      eastern: `22.0017`, 
      country: "finland", 
      area: "", 
      time: "GMT+3", 
      population: "", 
      language: "finnish"
   },
   {
      name: "Лапландия", 
      description: `Поездка в Лапландию - сказка, которая не оставил равнодушным ни детей, ни взрослых. Отправляясь в путешествие на Новый год, можно посетить
      деревню Санта-Клауса, покататься на санях, запряженных оленями или собаками хаски, отослать открытки близким прямо с полярного круга и отправится на
      сафари в дикий лапландский лес. Отдельно стоит отметить и гастрономические изыски: только здесь можно попробовать мясо северного оленя и снежной куропатки, а
      также десерт из морошки`, 
      id: "2", 
      picture: "https://upload.wikimedia.org/wikipedia/commons/5/57/LocationSapmi.png", 
      northern: ``, 
      eastern: ``, 
      country: "finland", 
      area: "", 
      time: "GMT+3", 
      population: "", 
      language: "finnish"
   },
   {
      name: "Крепость Суоменлинна", 
      description: `Морская крепость Суоменлина, построенная в XVIII веке, считается одной из крупнейших в мире и располагается на восьми островах вдоль
      побережья Хельсинки. Приехав летом, туристы могут увидеть сохранившиеся бастионы, туннели и подземелья, побывать в нескольких тематических музеях, а 
      после - насладится прогулкой по скалам, искупаться в море и провести вечер за бокалом пива из местной пивоварни`, 
      id: "3", 
      picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Suomenlinna.jpg/1280px-Suomenlinna.jpg", 
      northern: `60.0853`, 
      eastern: `24.5911`, 
      country: "finland", 
      area: "", 
      time: "GMT+3", 
      population: "", 
      language: "finnish"
    }
  ],
  descriptions: {
    homeName: `The most attractive places in the world`,
    homeParagraph1: ` Этот сайт - для тех, кто мечтает объехать весь мир. Для тех, кто не может
    представить жизнь без путешествий.`,
    homeParagraph2: ` На этой странице вас ждут самые необычные, удивительные, красивые -
    словом, те места нашей планеты, которые обязательно нужно увидеть хотя бы
    раз в своей жизни. Увлекательные тексты помогут вам отправиться в
    путешествие по миру, а красочные фотографии - почувствовать атмосферу
    каждого из 1000 лучших мест нашей планеты.`,
    homeParagraph3: `Все места удобно сгруппированы по континентам и странам - вы сможете с
    легкостью спланировать свой отпуск. Отправьтесь в незабываемое
    путешествие!`
  }
  },
  getters: {
  },
  mutations: {
    setPlaces (state, payload) {
      state.places = payload;
    }
  },
  actions: {
    async getPlaces ({commit}) {
      const response = await fetch(
        "https://629915c87b866a90ec368b06.mockapi.io/api/places",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow",
        }
      );
      
      commit("setPlaces", await response.json());
    }
  },
  modules: {
  }
})
