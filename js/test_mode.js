mapboxgl.accessToken = 'pk.eyJ1Ijoibmljb2xvc2luYXRyYSIsImEiOiJjbGs4ZTd0aWowaXNqM2ZybzEzYmplaGF3In0.zJYGpj2MF2Nw8M8XHuXc8Q';
const map = new mapboxgl.Map({
    container: 'map',
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio,
    // style: 'mapbox://styles/nicolosinatra/clmnjwye901wi01r4h6n9fekx',
    style: 'mapbox://styles/nicolosinatra/cls3jivia017a01r43t30fajm',
    center: [12.910316279411177, 43.91162447859239], // starting center in [lng, lat]
    zoom: 15.2, // starting zoom
});

var voce_narrante_economia_corporativa = new Audio("audio/voce_giorgio.mp3");




// Corso XI settembre
const origin = [12.910316279411177, 43.91162447859239];

// Piazzale I maggio
const destination = [12.910781114095812, 43.91227409749493];

// A simple line from origin to destination.
const percorso = {
    "type": "FeatureCollection",
    "features": [
    {
        "type": "Feature",
        "properties": {},
        "geometry": {
            "type": "LineString",
            "coordinates": [
            [
                12.910316279411177,
                43.91162447859239
            ],
            [
                12.91009283956268,
                43.91171789767614
            ],
            [
                12.910414034345024,
                43.9120886981332
            ],
            [
                12.910557674247258,
                43.91205133075002
            ],
            [
                12.910557674247258,
                43.912249665054134
            ],
            [
                12.910781114095812,
                43.91227409749493
            ]
            ] 
        }
    }
]
};

const campo_sonoro_fronte_economia_corporativa = turf.polygon([[
        [
            12.910300517671601,
            43.91176306150258
        ],
        [
            12.910281959159315,
            43.91176240468912
        ],
        [
            12.910263579376862,
            43.91176044057426
        ],
        [
            12.910245555332777,
            43.911757188073615
        ],
        [
            12.910228060609528,
            43.911752678510766
        ],
        [
            12.910211263691814,
            43.91174695531552
        ],
        [
            12.910195326343915,
            43.91174007360576
        ],
        [
            12.910180402051775,
            43.911732099656476
        ],
        [
            12.910166634544847,
            43.91172311026159
        ],
        [
            12.910154156411863,
            43.91171319199432
        ],
        [
            12.910143087823949,
            43.911702440373446
        ],
        [
            12.910133535377302,
            43.911690958943375
        ],
        [
            12.910125591066626,
            43.91167885827693
        ],
        [
            12.9101193313992,
            43.911666254910514
        ],
        [
            12.910114816658092,
            43.91165327022169
        ],
        [
            12.910112090321654,
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

const voce_economia_corporativa = turf.polygon([[
          [
            12.910418439284712,
            43.91259918432826
          ],
          [
            12.91034060096351,
            43.912596429532336
          ],
          [
            12.910263512289337,
            43.9125881916755
          ],
          [
            12.910187915688889,
            43.912574550095094
          ],
          [
            12.910114539217755,
            43.91255563617064
          ],
          [
            12.910044089548121,
            43.91253163205849
          ],
          [
            12.909977245162487,
            43.91250276893738
          ],
          [
            12.909914649818992,
            43.912469324781775
          ],
          [
            12.909856906351255,
            43.91243162168461
          ],
          [
            12.909804570862557,
            43.91239002275503
          ],
          [
            12.909758147370148,
            43.91234492862122
          ],
          [
            12.909718082951382,
            43.91229677357176
          ],
          [
            12.909684763438356,
            43.912246021372944
          ],
          [
            12.90965850970252,
            43.912193160802175
          ],
          [
            12.909639574565052,
            43.912138700940574
          ],
          [
            12.909628140362665,
            43.91208316627006
          ],
          [
            12.909624317192359,
            43.91202709162209
          ],
          [
            12.909628141851913,
            43.911971017026964
          ],
          [
            12.909639577486319,
            43.91191548251292
          ],
          [
            12.909658513943546,
            43.91186102290541
          ],
          [
            12.909684768836154,
            43.911808162676614
          ],
          [
            12.909718089298522,
            43.91175741089446
          ],
          [
            12.909758154422713,
            43.91170925632037
          ],
          [
            12.909804578349519,
            43.91166416270238
          ],
          [
            12.909856913984896,
            43.91162256430925
          ],
          [
            12.90991465730595,
            43.91158486174851
          ],
          [
            12.909977252215052,
            43.91155141810871
          ],
          [
            12.910044095895259,
            43.91152255546298
          ],
          [
            12.910114544615551,
            43.91149855176751
          ],
          [
            12.91018791992991,
            43.91147963818501
          ],
          [
            12.910263515210605,
            43.911465996858695
          ],
          [
            12.910340602452761,
            43.911457759158345
          ],
          [
            12.910418439284712,
            43.911455004415245
          ],
          [
            12.910496276116662,
            43.911457759158345
          ],
          [
            12.910573363358818,
            43.911465996858695
          ],
          [
            12.910648958639513,
            43.91147963818501
          ],
          [
            12.910722333953872,
            43.91149855176751
          ],
          [
            12.910792782674164,
            43.91152255546298
          ],
          [
            12.910859626354371,
            43.91155141810871
          ],
          [
            12.910922221263473,
            43.91158486174851
          ],
          [
            12.910979964584527,
            43.91162256430925
          ],
          [
            12.911032300219905,
            43.91166416270238
          ],
          [
            12.91107872414671,
            43.91170925632037
          ],
          [
            12.911118789270901,
            43.91175741089446
          ],
          [
            12.911152109733269,
            43.911808162676614
          ],
          [
            12.911178364625878,
            43.91186102290541
          ],
          [
            12.911197301083105,
            43.91191548251292
          ],
          [
            12.91120873671751,
            43.911971017026964
          ],
          [
            12.911212561377065,
            43.91202709162209
          ],
          [
            12.911208738206758,
            43.91208316627006
          ],
          [
            12.911197304004371,
            43.912138700940574
          ],
          [
            12.911178368866903,
            43.912193160802175
          ],
          [
            12.911152115131067,
            43.912246021372944
          ],
          [
            12.91111879561804,
            43.91229677357176
          ],
          [
            12.911078731199275,
            43.91234492862122
          ],
          [
            12.911032307706867,
            43.91239002275503
          ],
          [
            12.910979972218168,
            43.91243162168461
          ],
          [
            12.910922228750431,
            43.912469324781775
          ],
          [
            12.910859633406936,
            43.91250276893738
          ],
          [
            12.910792789021302,
            43.91253163205849
          ],
          [
            12.910722339351668,
            43.91255563617064
          ],
          [
            12.910648962880535,
            43.912574550095094
          ],
          [
            12.910573366280087,
            43.9125881916755
          ],
          [
            12.910496277605914,
            43.912596429532336
          ],
          [
            12.910418439284712,
            43.91259918432826
          ]
]]);

// A single point that animates along the route.
// Coordinates are initially set to origin.
const user = {
    'type': 'FeatureCollection',
    'features': [
    {
    'type': 'Feature',
    'properties': {},
    'geometry': {
    'type': 'Point',
    'coordinates': origin
}
}
]
};

// Calculate the distance in kilometers between route start/end point.
const lineDistance = turf.length(percorso.features[0]);

const arc = [];

// Number of steps to use in the arc and animation, more steps means
// a smoother arc and animation, but too many steps will result in a
// low frame rate
const steps = 500;

// Draw an arc between the `origin` & `destination` of the two points
for (let i = 0; i < lineDistance; i += lineDistance / steps) {
const segment = turf.along(percorso.features[0], i);
arc.push(segment.geometry.coordinates);
}

// Update the route with calculated arc coordinates
percorso.features[0].geometry.coordinates = arc;

// Used to increment the value of the point measurement against the route.
let counter = 0;

let mouse = false;
var mouse_pos = {};

map.on('load', () => {
    map.addImage('man', imageMan);

    // Add a source and layer displaying a point which will be animated in a circle.
    map.addSource('route', {
    'type': 'geojson',
    'data': percorso
    });
    
    map.addSource('point', {
    'type': 'geojson',
    'data': user
    });
    
    // rende visibile la linea creata definendone lo stile sulla mappa (percorso)
    map.addLayer({
    'id': 'route',
    'source': 'route',
    'type': 'line',
    'paint': {
        'line-width': 2,
        'line-color': '#007cbf'
    }
    });

    // rende visibile il punto creato definendone lo stile sulla mappa (cat)
    map.addLayer({
    'id': 'point',
    'source': 'point',
    'type': 'symbol',
    'layout': {
        // This icon is a part of the Mapbox Streets style.
        // To view all images available in a Mapbox style, open
        // the style in Mapbox Studio and click the "Images" tab.
        // To add a new image to the style at runtime see
        // https://docs.mapbox.com/mapbox-gl-js/example/add-image/
        'icon-image': 'cat',
        'icon-size': 0.25,
        'icon-rotate': ['get', 'bearing'],
        'icon-rotation-alignment': 'map',
        'icon-allow-overlap': true,
        'icon-ignore-placement': true
    }
    });
    
    let running = false;
    
    document.getElementById('play').addEventListener('click', () => {
        if (running) {
            void 0;
        } else {
            // Set the coordinates of the original point back to origin
            user.features[0].geometry.coordinates = origin;
            
            // Update the source layer
            map.getSource('point').setData(user);
            
            // Reset the counter
            counter = 0;
            
            // Start the animation
            animate(counter);
        }
    });

    

    document.getElementById('mouse').addEventListener('click', () => {
        if (mouse){
            mouse = false;
        } else {
            mouse = true;
        }
    });

    map.on('mousemove', (e) => {
        const json = JSON.stringify(e.lngLat.wrap());
        const json_obj = JSON.parse(json);
        mouse_pos = json_obj;
        let mouse_lat = mouse_pos.lat;
        let mouse_lng = mouse_pos.lng;
        // `e.point` is the x, y coordinates of the `mousemove` event
        // relative to the top-left corner of the map.
        // document.getElementById('info').innerHTML = JSON.stringify(e.lngLat.wrap()) + JSON.stringify(e.point);

        if (mouse){
            user.features[0].geometry.coordinates = [mouse_lng, mouse_lat];
            // Update the source with this new data
            map.getSource('point').setData(user);

            let user_lng = mouse_lng;
            let user_lat = mouse_lat;
            
            // Verificare se e dentro quale campo sonoro si trova l'utente
            let user_turf = turf.point([parseFloat(user_lng), parseFloat(user_lat)]);
            // console.log("user dentro:"+ turf.booleanPointInPolygon(user_turf, campo_sonoro_fronte_economia_corporativa));
        
            if(turf.booleanPointInPolygon(user_turf, campo_sonoro_fronte_economia_corporativa)){
                // console.log("dentro");
                jQuery(".dentro_fuori").text("dentro area fronte economia corporativa, " + user_lng + ", " + user_lat);
                var nuovo_voce_economia_corporativa = voce_narrante_economia_corporativa.cloneNode(true); 
                nuovo_voce_economia_corporativa.play();
            }else{
                // console.log("fuori");
                jQuery(".dentro_fuori").text("fuori, " + user_lng + ", " + user_lat);
            }
        }else{
            // Set the coordinates of the original point back to origin
            user.features[0].geometry.coordinates = origin;
            // Update the source layer
            map.getSource('point').setData(user);
        }
    });
    
});

function animate() {
    mouse = false;
    running = true;
    document.getElementById('play').disabled = true;
    const start =
    percorso.features[0].geometry.coordinates[
        counter >= steps ? counter - 1 : counter
    ];
    const end =
    percorso.features[0].geometry.coordinates[
        counter >= steps ? counter : counter + 1
    ];
    if (!start || !end) {
        running = false;
        document.getElementById('play').disabled = false;
        return;
    }
    // Update point geometry to a new position based on counter denoting
    // the index to access the arc
    user.features[0].geometry.coordinates = percorso.features[0].geometry.coordinates[counter];
    
    let user_lng = user.features[0].geometry.coordinates[0];
    let user_lat = user.features[0].geometry.coordinates[1];
    
    // Verificare se e dentro quale campo sonoro si trova l'utente
    let user_turf = turf.point([parseFloat(user_lng), parseFloat(user_lat)]);
    // console.log("user dentro:"+ turf.booleanPointInPolygon(user_turf, campo_sonoro_fronte_economia_corporativa));

    if(turf.booleanPointInPolygon(user_turf, campo_sonoro_fronte_economia_corporativa)){
        // console.log("dentro");
        jQuery(".dentro_fuori").text("dentro area fronte economia corporativa, " + user_lng + ", " + user_lat);
    }else{
        // console.log("fuori");
        jQuery(".dentro_fuori").text("fuori, " + user_lng + ", " + user_lat);
    }

    // Calculate the bearing to ensure the icon is rotated to match the route arc
    // The bearing is calculated between the current point and the next point, except
    // at the end of the arc, which uses the previous point and the current point
    user.features[0].properties.bearing = turf.bearing(turf.point(start), turf.point(end));
    
    // Update the source with this new data
    map.getSource('point').setData(user);
    
    // Request the next frame of animation as long as the end has not been reached
    if (counter < steps) {
        requestAnimationFrame(animate);
    }
    
    counter = counter + 1;
}