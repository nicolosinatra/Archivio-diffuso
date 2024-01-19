mapboxgl.accessToken = 'pk.eyJ1Ijoibmljb2xvc2luYXRyYSIsImEiOiJjbGs4ZTd0aWowaXNqM2ZybzEzYmplaGF3In0.zJYGpj2MF2Nw8M8XHuXc8Q';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    // style: 'mapbox://styles/mapbox/streets-v12', // style URL
    style: 'mapbox://styles/nicolosinatra/clmnjwye901wi01r4h6n9fekx', // style URL
    center: [-24, 42], // starting center in [lng, lat]
    zoom: 1 // starting zoom
});


const campo_sonoro_economia_corporativa_prova = turf.polygon([[
        [12.910300517671601,43.91176306150258],
        [12.910281959159315,43.91176240468912],
        [12.910263579376862,43.91176044057426],
        [12.910245555332777,43.911757188073615],
        [12.910228060609528,43.911752678510766],
        [12.910211263691814,43.91174695531552],
        [12.910195326343915,43.91174007360576],
        [12.910180402051775,43.911732099656476],
        [12.910166634544847,43.91172311026159],
        [12.910154156411863,43.91171319199432],
        [12.910143087823949,43.911702440373446],
        [12.910133535377302,43.911690958943375],
        [12.910125591066626,43.91167885827693],
        [12.9101193313992,43.911666254910514],
        [12.910114816658092,43.91165327022169],
        [12.910112090321654,
        43.91164002926035
        ],
        [
        12.910111178644815,
        43.911626659544275
        ],
        [
        12.910112090406312,
        43.91161328983121
        ],
        [
        12.910114816824155,
        43.911600048878746
        ],
        [
        12.910119331640285,
        43.911587064204376
        ],
        [
        12.910125591373472,
        43.9115744608574
        ],
        [
        12.910133535738112,
        43.911562360214646
        ],
        [
        12.910143088224862,
        43.911550878811596
        ],
        [
        12.910154156837471,
        43.91154012722004
        ],
        [
        12.91016663497879,
        43.911530208983265
        ],
        [
        12.910180402477382,
        43.911521219618876
        ],
        [
        12.910195326744827,
        43.91151324569891
        ],
        [
        12.910211264052625,
        43.91150636401618
        ],
        [
        12.910228060916372,
        43.911500640844636
        ],
        [
        12.91024555557386,
        43.91149613130121
        ],
        [
        12.910263579542928,
        43.91149287881501
        ],
        [
        12.91028195924397,
        43.91149091470904
        ],
        [
        12.910300517671601,
        43.911490257898585
        ],
        [
        12.910319076099231,
        43.91149091470904
        ],
        [
        12.910337455800274,
        43.91149287881501
        ],
        [
        12.910355479769342,
        43.91149613130121
        ],
        [
        12.91037297442683,
        43.911500640844636
        ],
        [
        12.910389771290577,
        43.91150636401618
        ],
        [
        12.910405708598375,
        43.91151324569891
        ],
        [
        12.91042063286582,
        43.911521219618876
        ],
        [
        12.910434400364412,
        43.911530208983265
        ],
        [
        12.91044687850573,
        43.91154012722004
        ],
        [
        12.91045794711834,
        43.911550878811596
        ],
        [
        12.91046749960509,
        43.911562360214646
        ],
        [
        12.91047544396973,
        43.9115744608574
        ],
        [
        12.910481703702917,
        43.911587064204376
        ],
        [
        12.910486218519047,
        43.911600048878746
        ],
        [
        12.91048894493689,
        43.91161328983121
        ],
        [
        12.910489856698387,
        43.911626659544275
        ],
        [
        12.910488945021548,
        43.91164002926035
        ],
        [
        12.91048621868511,
        43.91165327022169
        ],
        [
        12.910481703944004,
        43.911666254910514
        ],
        [
        12.910475444276576,
        43.91167885827693
        ],
        [
        12.9104674999659,
        43.911690958943375
        ],
        [
        12.910457947519253,
        43.911702440373446
        ],
        [
        12.910446878931339,
        43.91171319199432
        ],
        [
        12.910434400798358,
        43.91172311026159
        ],
        [
        12.910420633291427,
        43.911732099656476
        ],
        [
        12.910405708999287,
        43.91174007360576
        ],
        [
        12.910389771651388,
        43.91174695531552
        ],
        [
        12.910372974733674,
        43.911752678510766
        ],
        [
        12.910355480010425,
        43.911757188073615
        ],
        [
        12.91033745596634,
        43.91176044057426
        ],
        [
        12.910319076183887,
        43.91176240468912
        ],
        [
        12.910300517671601,
        43.91176306150258
        ]
  ]]);

const campo_sonoro_casa_prova = turf.polygon([[
        [
        12.91154193200984,
        43.915277681338715
        ],
        [
        12.911511487269262,
        43.915276603915935
        ],
        [
        12.911481335731462,
        43.915273382023884
        ],
        [
        12.911451767775384,
        43.915268046691466
        ],
        [
        12.911423068159513,
        43.915260649301445
        ],
        [
        12.91139551327939,
        43.91525126109545
        ],
        [
        12.911369368505666,
        43.91523997248799
        ],
        [
        12.911344885628358,
        43.91522689219554
        ],
        [
        12.91132230043191,
        43.915212146189624
        ],
        [
        12.91130183042444,
        43.915195876483516
        ],
        [
        12.911283672742984,
        43.91517823976454
        ],
        [
        12.911268002254984,
        43.91515940588511
        ],
        [
        12.911254969874252,
        43.915139556226826
        ],
        [
        12.911244701107645,
        43.91511888195363
        ],
        [
        12.91123729484645,
        43.91509758217087
        ],
        [
        12.911232822414108,
        43.91507586200764
        ],
        [
        12.91123132687943,
        43.91505393064132
        ],
        [
        12.911232822641951,
        43.91503199928309
        ],
        [
        12.911237295293379,
        43.91501027914379
        ],
        [
        12.911244701756484,
        43.9149889793999
        ],
        [
        12.911254970700067,
        43.91496830517903
        ],
        [
        12.911268003226041,
        43.91494845558448
        ],
        [
        12.911283673821965,
        43.91492962177777
        ],
        [
        12.91130183156988,
        43.91491198513773
        ],
        [
        12.911322301599792,
        43.91489571551368
        ],
        [
        12.911344886773797,
        43.914880969589824
        ],
        [
        12.911369369584648,
        43.91486788937629
        ],
        [
        12.911395514250447,
        43.914856600841546
        ],
        [
        12.911423068985329,
        43.91484721269929
        ],
        [
        12.911451768424222,
        43.914839815361596
        ],
        [
        12.91148133617839,
        43.91483448006805
        ],
        [
        12.911511487497105,
        43.91483125819994
        ],
        [
        12.91154193200984,
        43.91483018078523
        ],
        [
        12.911572376522573,
        43.91483125819994
        ],
        [
        12.911602527841287,
        43.91483448006805
        ],
        [
        12.911632095595456,
        43.914839815361596
        ],
        [
        12.911660795034349,
        43.91484721269929
        ],
        [
        12.91168834976923,
        43.914856600841546
        ],
        [
        12.911714494435031,
        43.91486788937629
        ],
        [
        12.911738977245882,
        43.914880969589824
        ],
        [
        12.911761562419887,
        43.91489571551368
        ],
        [
        12.911782032449798,
        43.91491198513773
        ],
        [
        12.911800190197713,
        43.91492962177777
        ],
        [
        12.911815860793636,
        43.91494845558448
        ],
        [
        12.911828893319614,
        43.91496830517903
        ],
        [
        12.911839162263195,
        43.9149889793999
        ],
        [
        12.9118465687263,
        43.91501027914379
        ],
        [
        12.91185104137773,
        43.91503199928309
        ],
        [
        12.911852537140248,
        43.91505393064132
        ],
        [
        12.911851041605571,
        43.91507586200764
        ],
        [
        12.911846569173228,
        43.91509758217087
        ],
        [
        12.911839162912036,
        43.91511888195363
        ],
        [
        12.911828894145426,
        43.915139556226826
        ],
        [
        12.911815861764694,
        43.91515940588511
        ],
        [
        12.911800191276694,
        43.91517823976454
        ],
        [
        12.911782033595237,
        43.915195876483516
        ],
        [
        12.911761563587767,
        43.915212146189624
        ],
        [
        12.911738978391321,
        43.91522689219554
        ],
        [
        12.911714495514012,
        43.91523997248799
        ],
        [
        12.911688350740288,
        43.91525126109545
        ],
        [
        12.911660795860165,
        43.915260649301445
        ],
        [
        12.911632096244297,
        43.915268046691466
        ],
        [
        12.911602528288215,
        43.915273382023884
        ],
        [
        12.911572376750415,
        43.915276603915935
        ],
        [
        12.91154193200984,
        43.915277681338715
        ]
]]);

// var campi_sonori_oggetto;

// map.on('load', () => {
//     // Add a data source containing GeoJSON data.
//     map.addSource('campi_sonori', {
//         'type': 'geojson',
//         'data': {
//             // INCOLLARE QUI DATI DA GeoJSON --------------------
//             "type": "FeatureCollection",
//             "features": [
//                 {
//                 "type": "Feature",
//                 "properties": {},
//                 "geometry": {
//                     "type": "Polygon",
//                     "coordinates": [
//                     [
//                         [
//                         12.910300517671601,
//                         43.91176306150258
//                         ],
//                         [
//                         12.910281959159315,
//                         43.91176240468912
//                         ],
//                         [
//                         12.910263579376862,
//                         43.91176044057426
//                         ],
//                         [
//                         12.910245555332777,
//                         43.911757188073615
//                         ],
//                         [
//                         12.910228060609528,
//                         43.911752678510766
//                         ],
//                         [
//                         12.910211263691814,
//                         43.91174695531552
//                         ],
//                         [
//                         12.910195326343915,
//                         43.91174007360576
//                         ],
//                         [
//                         12.910180402051775,
//                         43.911732099656476
//                         ],
//                         [
//                         12.910166634544847,
//                         43.91172311026159
//                         ],
//                         [
//                         12.910154156411863,
//                         43.91171319199432
//                         ],
//                         [
//                         12.910143087823949,
//                         43.911702440373446
//                         ],
//                         [
//                         12.910133535377302,
//                         43.911690958943375
//                         ],
//                         [
//                         12.910125591066626,
//                         43.91167885827693
//                         ],
//                         [
//                         12.9101193313992,
//                         43.911666254910514
//                         ],
//                         [
//                         12.910114816658092,
//                         43.91165327022169
//                         ],
//                         [
//                         12.910112090321654,
//                         43.91164002926035
//                         ],
//                         [
//                         12.910111178644815,
//                         43.911626659544275
//                         ],
//                         [
//                         12.910112090406312,
//                         43.91161328983121
//                         ],
//                         [
//                         12.910114816824155,
//                         43.911600048878746
//                         ],
//                         [
//                         12.910119331640285,
//                         43.911587064204376
//                         ],
//                         [
//                         12.910125591373472,
//                         43.9115744608574
//                         ],
//                         [
//                         12.910133535738112,
//                         43.911562360214646
//                         ],
//                         [
//                         12.910143088224862,
//                         43.911550878811596
//                         ],
//                         [
//                         12.910154156837471,
//                         43.91154012722004
//                         ],
//                         [
//                         12.91016663497879,
//                         43.911530208983265
//                         ],
//                         [
//                         12.910180402477382,
//                         43.911521219618876
//                         ],
//                         [
//                         12.910195326744827,
//                         43.91151324569891
//                         ],
//                         [
//                         12.910211264052625,
//                         43.91150636401618
//                         ],
//                         [
//                         12.910228060916372,
//                         43.911500640844636
//                         ],
//                         [
//                         12.91024555557386,
//                         43.91149613130121
//                         ],
//                         [
//                         12.910263579542928,
//                         43.91149287881501
//                         ],
//                         [
//                         12.91028195924397,
//                         43.91149091470904
//                         ],
//                         [
//                         12.910300517671601,
//                         43.911490257898585
//                         ],
//                         [
//                         12.910319076099231,
//                         43.91149091470904
//                         ],
//                         [
//                         12.910337455800274,
//                         43.91149287881501
//                         ],
//                         [
//                         12.910355479769342,
//                         43.91149613130121
//                         ],
//                         [
//                         12.91037297442683,
//                         43.911500640844636
//                         ],
//                         [
//                         12.910389771290577,
//                         43.91150636401618
//                         ],
//                         [
//                         12.910405708598375,
//                         43.91151324569891
//                         ],
//                         [
//                         12.91042063286582,
//                         43.911521219618876
//                         ],
//                         [
//                         12.910434400364412,
//                         43.911530208983265
//                         ],
//                         [
//                         12.91044687850573,
//                         43.91154012722004
//                         ],
//                         [
//                         12.91045794711834,
//                         43.911550878811596
//                         ],
//                         [
//                         12.91046749960509,
//                         43.911562360214646
//                         ],
//                         [
//                         12.91047544396973,
//                         43.9115744608574
//                         ],
//                         [
//                         12.910481703702917,
//                         43.911587064204376
//                         ],
//                         [
//                         12.910486218519047,
//                         43.911600048878746
//                         ],
//                         [
//                         12.91048894493689,
//                         43.91161328983121
//                         ],
//                         [
//                         12.910489856698387,
//                         43.911626659544275
//                         ],
//                         [
//                         12.910488945021548,
//                         43.91164002926035
//                         ],
//                         [
//                         12.91048621868511,
//                         43.91165327022169
//                         ],
//                         [
//                         12.910481703944004,
//                         43.911666254910514
//                         ],
//                         [
//                         12.910475444276576,
//                         43.91167885827693
//                         ],
//                         [
//                         12.9104674999659,
//                         43.911690958943375
//                         ],
//                         [
//                         12.910457947519253,
//                         43.911702440373446
//                         ],
//                         [
//                         12.910446878931339,
//                         43.91171319199432
//                         ],
//                         [
//                         12.910434400798358,
//                         43.91172311026159
//                         ],
//                         [
//                         12.910420633291427,
//                         43.911732099656476
//                         ],
//                         [
//                         12.910405708999287,
//                         43.91174007360576
//                         ],
//                         [
//                         12.910389771651388,
//                         43.91174695531552
//                         ],
//                         [
//                         12.910372974733674,
//                         43.911752678510766
//                         ],
//                         [
//                         12.910355480010425,
//                         43.911757188073615
//                         ],
//                         [
//                         12.91033745596634,
//                         43.91176044057426
//                         ],
//                         [
//                         12.910319076183887,
//                         43.91176240468912
//                         ],
//                         [
//                         12.910300517671601,
//                         43.91176306150258
//                         ]
//                     ]
//                     ]
//                 }
//                 },
//                 {
//                 "type": "Feature",
//                 "properties": {},
//                 "geometry": {
//                     "type": "Polygon",
//                     "coordinates": [
//                     [
//                         [
//                         12.91154193200984,
//                         43.915277681338715
//                         ],
//                         [
//                         12.911511487269262,
//                         43.915276603915935
//                         ],
//                         [
//                         12.911481335731462,
//                         43.915273382023884
//                         ],
//                         [
//                         12.911451767775384,
//                         43.915268046691466
//                         ],
//                         [
//                         12.911423068159513,
//                         43.915260649301445
//                         ],
//                         [
//                         12.91139551327939,
//                         43.91525126109545
//                         ],
//                         [
//                         12.911369368505666,
//                         43.91523997248799
//                         ],
//                         [
//                         12.911344885628358,
//                         43.91522689219554
//                         ],
//                         [
//                         12.91132230043191,
//                         43.915212146189624
//                         ],
//                         [
//                         12.91130183042444,
//                         43.915195876483516
//                         ],
//                         [
//                         12.911283672742984,
//                         43.91517823976454
//                         ],
//                         [
//                         12.911268002254984,
//                         43.91515940588511
//                         ],
//                         [
//                         12.911254969874252,
//                         43.915139556226826
//                         ],
//                         [
//                         12.911244701107645,
//                         43.91511888195363
//                         ],
//                         [
//                         12.91123729484645,
//                         43.91509758217087
//                         ],
//                         [
//                         12.911232822414108,
//                         43.91507586200764
//                         ],
//                         [
//                         12.91123132687943,
//                         43.91505393064132
//                         ],
//                         [
//                         12.911232822641951,
//                         43.91503199928309
//                         ],
//                         [
//                         12.911237295293379,
//                         43.91501027914379
//                         ],
//                         [
//                         12.911244701756484,
//                         43.9149889793999
//                         ],
//                         [
//                         12.911254970700067,
//                         43.91496830517903
//                         ],
//                         [
//                         12.911268003226041,
//                         43.91494845558448
//                         ],
//                         [
//                         12.911283673821965,
//                         43.91492962177777
//                         ],
//                         [
//                         12.91130183156988,
//                         43.91491198513773
//                         ],
//                         [
//                         12.911322301599792,
//                         43.91489571551368
//                         ],
//                         [
//                         12.911344886773797,
//                         43.914880969589824
//                         ],
//                         [
//                         12.911369369584648,
//                         43.91486788937629
//                         ],
//                         [
//                         12.911395514250447,
//                         43.914856600841546
//                         ],
//                         [
//                         12.911423068985329,
//                         43.91484721269929
//                         ],
//                         [
//                         12.911451768424222,
//                         43.914839815361596
//                         ],
//                         [
//                         12.91148133617839,
//                         43.91483448006805
//                         ],
//                         [
//                         12.911511487497105,
//                         43.91483125819994
//                         ],
//                         [
//                         12.91154193200984,
//                         43.91483018078523
//                         ],
//                         [
//                         12.911572376522573,
//                         43.91483125819994
//                         ],
//                         [
//                         12.911602527841287,
//                         43.91483448006805
//                         ],
//                         [
//                         12.911632095595456,
//                         43.914839815361596
//                         ],
//                         [
//                         12.911660795034349,
//                         43.91484721269929
//                         ],
//                         [
//                         12.91168834976923,
//                         43.914856600841546
//                         ],
//                         [
//                         12.911714494435031,
//                         43.91486788937629
//                         ],
//                         [
//                         12.911738977245882,
//                         43.914880969589824
//                         ],
//                         [
//                         12.911761562419887,
//                         43.91489571551368
//                         ],
//                         [
//                         12.911782032449798,
//                         43.91491198513773
//                         ],
//                         [
//                         12.911800190197713,
//                         43.91492962177777
//                         ],
//                         [
//                         12.911815860793636,
//                         43.91494845558448
//                         ],
//                         [
//                         12.911828893319614,
//                         43.91496830517903
//                         ],
//                         [
//                         12.911839162263195,
//                         43.9149889793999
//                         ],
//                         [
//                         12.9118465687263,
//                         43.91501027914379
//                         ],
//                         [
//                         12.91185104137773,
//                         43.91503199928309
//                         ],
//                         [
//                         12.911852537140248,
//                         43.91505393064132
//                         ],
//                         [
//                         12.911851041605571,
//                         43.91507586200764
//                         ],
//                         [
//                         12.911846569173228,
//                         43.91509758217087
//                         ],
//                         [
//                         12.911839162912036,
//                         43.91511888195363
//                         ],
//                         [
//                         12.911828894145426,
//                         43.915139556226826
//                         ],
//                         [
//                         12.911815861764694,
//                         43.91515940588511
//                         ],
//                         [
//                         12.911800191276694,
//                         43.91517823976454
//                         ],
//                         [
//                         12.911782033595237,
//                         43.915195876483516
//                         ],
//                         [
//                         12.911761563587767,
//                         43.915212146189624
//                         ],
//                         [
//                         12.911738978391321,
//                         43.91522689219554
//                         ],
//                         [
//                         12.911714495514012,
//                         43.91523997248799
//                         ],
//                         [
//                         12.911688350740288,
//                         43.91525126109545
//                         ],
//                         [
//                         12.911660795860165,
//                         43.915260649301445
//                         ],
//                         [
//                         12.911632096244297,
//                         43.915268046691466
//                         ],
//                         [
//                         12.911602528288215,
//                         43.915273382023884
//                         ],
//                         [
//                         12.911572376750415,
//                         43.915276603915935
//                         ],
//                         [
//                         12.91154193200984,
//                         43.915277681338715
//                         ]
//                     ]
//                     ]
//                 }
//                 }
//             ]
//             // --------------------------------------------------
//         }
//     });
    
//     // Add a new layer to visualize the polygon.
//     map.addLayer({
//         'id': 'campi_sonori',
//         'type': 'fill',
//         'source': 'campi_sonori', // reference the data source
//         'layout': {},
//         'paint': {
//             'fill-color': '#0080ff', // blue color fill
//             'fill-opacity': 0.5
//         }
//     });
//     // Add a black outline around the polygon.
//     // map.addLayer({
//     //     'id': 'outline',
//     //     'type': 'line',
//     //     'source': 'campi_sonori',
//     //     'layout': {},
//     //     'paint': {
//     //         'line-color': '#000',
//     //         'line-width': 1
//     //     }
//     //     });

//     campi_sonori_oggetto = map.getSource('campi_sonori');
//     console.log(campi_sonori_oggetto);
// });




//jQuery(".mapboxgl-control-container").click(function(){
    // Initialize the geolocate control.
   
    const geolocate = new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        // When active the map will receive updates to the device's location as it changes.
        trackUserLocation: true,
        // Draw an arrow next to the location dot to indicate which direction the device is heading.
        showUserHeading: true
    });
    // Add the control to the map.
    map.addControl(geolocate);
    map.on('load', () => {
        geolocate.trigger();
    });




    function success(pos) {
    user_coords = pos.coords;

    console.log("Your current position is:");
    console.log(`Latitude : ${user_coords.latitude}`);
    console.log(`Longitude: ${user_coords.longitude}`);
    console.log(`More or less ${user_coords.accuracy} meters.`);

    var user = turf.point([parseFloat(user_coords.longitude), parseFloat(user_coords.latitude)]);
    console.log("user dentro:"+ turf.booleanPointInPolygon(user, campo_sonoro_casa_prova));

    if(turf.booleanPointInPolygon(user, campo_sonoro_casa_prova)){
        jQuery(".dentro_fuori").text("dentro");
    }else{
        jQuery(".dentro_fuori").text("fuori");
    }

    }

    // call locate every 3 seconds... forever
    // setInterval(navigator.geolocation.getCurrentPosition(success), 3000);

    navigator.geolocation.getCurrentPosition(success);



//});
