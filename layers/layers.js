ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:31981").setExtent([772229.889709, 6911159.524517, 795614.466775, 6923444.376498]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_MapadeCalor_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Mapa de Calor",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/MapadeCalor_1.png",
    attributions: ' ',
                                projection: 'EPSG:31981',
                                alwaysInRange: true,
                                imageExtent: [774544.367800, 6913949.183500, 791208.174800, 6920013.807800]
                            })
                        });
var format_Curvas20_2 = new ol.format.GeoJSON();
var features_Curvas20_2 = format_Curvas20_2.readFeatures(json_Curvas20_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31981'});
var jsonSource_Curvas20_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Curvas20_2.addFeatures(features_Curvas20_2);
var lyr_Curvas20_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Curvas20_2, 
                style: style_Curvas20_2,
                interactive: true,
                title: '<img src="styles/legend/Curvas20_2.png" /> Curvas 20'
            });
var format_AA1_3 = new ol.format.GeoJSON();
var features_AA1_3 = format_AA1_3.readFeatures(json_AA1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31981'});
var jsonSource_AA1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AA1_3.addFeatures(features_AA1_3);
var lyr_AA1_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AA1_3, 
                style: style_AA1_3,
                interactive: true,
                title: '<img src="styles/legend/AA1_3.png" /> AA1'
            });
var format_AB1eAB2_4 = new ol.format.GeoJSON();
var features_AB1eAB2_4 = format_AB1eAB2_4.readFeatures(json_AB1eAB2_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31981'});
var jsonSource_AB1eAB2_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AB1eAB2_4.addFeatures(features_AB1eAB2_4);
var lyr_AB1eAB2_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AB1eAB2_4, 
                style: style_AB1eAB2_4,
                interactive: true,
                title: '<img src="styles/legend/AB1eAB2_4.png" /> AB1 e AB2'
            });
var format_AC1eAC2_5 = new ol.format.GeoJSON();
var features_AC1eAC2_5 = format_AC1eAC2_5.readFeatures(json_AC1eAC2_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31981'});
var jsonSource_AC1eAC2_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AC1eAC2_5.addFeatures(features_AC1eAC2_5);
var lyr_AC1eAC2_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AC1eAC2_5, 
                style: style_AC1eAC2_5,
                interactive: true,
                title: '<img src="styles/legend/AC1eAC2_5.png" /> AC1 e AC2'
            });
var format_AE1eAE2_6 = new ol.format.GeoJSON();
var features_AE1eAE2_6 = format_AE1eAE2_6.readFeatures(json_AE1eAE2_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31981'});
var jsonSource_AE1eAE2_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AE1eAE2_6.addFeatures(features_AE1eAE2_6);
var lyr_AE1eAE2_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AE1eAE2_6, 
                style: style_AE1eAE2_6,
                interactive: true,
                title: '<img src="styles/legend/AE1eAE2_6.png" /> AE1 e AE2'
            });
var format_BA1_7 = new ol.format.GeoJSON();
var features_BA1_7 = format_BA1_7.readFeatures(json_BA1_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31981'});
var jsonSource_BA1_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BA1_7.addFeatures(features_BA1_7);
var lyr_BA1_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BA1_7, 
                style: style_BA1_7,
                interactive: true,
                title: '<img src="styles/legend/BA1_7.png" /> BA1'
            });
var format_BA2_8 = new ol.format.GeoJSON();
var features_BA2_8 = format_BA2_8.readFeatures(json_BA2_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31981'});
var jsonSource_BA2_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BA2_8.addFeatures(features_BA2_8);
var lyr_BA2_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BA2_8, 
                style: style_BA2_8,
                interactive: true,
                title: '<img src="styles/legend/BA2_8.png" /> BA2'
            });
var format_BD2_9 = new ol.format.GeoJSON();
var features_BD2_9 = format_BD2_9.readFeatures(json_BD2_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31981'});
var jsonSource_BD2_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BD2_9.addFeatures(features_BD2_9);
var lyr_BD2_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BD2_9, 
                style: style_BD2_9,
                interactive: true,
                title: '<img src="styles/legend/BD2_9.png" /> BD2'
            });
var format_BD1_10 = new ol.format.GeoJSON();
var features_BD1_10 = format_BD1_10.readFeatures(json_BD1_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31981'});
var jsonSource_BD1_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BD1_10.addFeatures(features_BD1_10);
var lyr_BD1_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BD1_10, 
                style: style_BD1_10,
                interactive: true,
                title: '<img src="styles/legend/BD1_10.png" /> BD1'
            });
var format_ViasExistentes_11 = new ol.format.GeoJSON();
var features_ViasExistentes_11 = format_ViasExistentes_11.readFeatures(json_ViasExistentes_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31981'});
var jsonSource_ViasExistentes_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ViasExistentes_11.addFeatures(features_ViasExistentes_11);
var lyr_ViasExistentes_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ViasExistentes_11, 
                style: style_ViasExistentes_11,
                interactive: true,
                title: '<img src="styles/legend/ViasExistentes_11.png" /> Vias Existentes'
            });
var format_TrechoDrenagem_12 = new ol.format.GeoJSON();
var features_TrechoDrenagem_12 = format_TrechoDrenagem_12.readFeatures(json_TrechoDrenagem_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31981'});
var jsonSource_TrechoDrenagem_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrechoDrenagem_12.addFeatures(features_TrechoDrenagem_12);
var lyr_TrechoDrenagem_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TrechoDrenagem_12, 
                style: style_TrechoDrenagem_12,
                interactive: true,
                title: '<img src="styles/legend/TrechoDrenagem_12.png" /> Trecho Drenagem'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_MapadeCalor_1.setVisible(true);lyr_Curvas20_2.setVisible(true);lyr_AA1_3.setVisible(true);lyr_AB1eAB2_4.setVisible(true);lyr_AC1eAC2_5.setVisible(true);lyr_AE1eAE2_6.setVisible(true);lyr_BA1_7.setVisible(true);lyr_BA2_8.setVisible(true);lyr_BD2_9.setVisible(true);lyr_BD1_10.setVisible(true);lyr_ViasExistentes_11.setVisible(true);lyr_TrechoDrenagem_12.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_MapadeCalor_1,lyr_Curvas20_2,lyr_AA1_3,lyr_AB1eAB2_4,lyr_AC1eAC2_5,lyr_AE1eAE2_6,lyr_BA1_7,lyr_BA2_8,lyr_BD2_9,lyr_BD1_10,lyr_ViasExistentes_11,lyr_TrechoDrenagem_12];
lyr_Curvas20_2.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_AA1_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_AB1eAB2_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'layer': 'layer', 'path': 'path', });
lyr_AC1eAC2_5.set('fieldAliases', {'FID': 'FID', });
lyr_AE1eAE2_6.set('fieldAliases', {'id': 'id', });
lyr_BA1_7.set('fieldAliases', {'fid': 'fid', });
lyr_BA2_8.set('fieldAliases', {'id': 'id', });
lyr_BD2_9.set('fieldAliases', {'FID': 'FID', });
lyr_BD1_10.set('fieldAliases', {'fid': 'fid', });
lyr_ViasExistentes_11.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_TrechoDrenagem_12.set('fieldAliases', {'fid': 'fid', 'nome': 'nome', 'larguraMed': 'larguraMed', 'nomeAbrev': 'nomeAbrev', 'd_geometri': 'd_geometri', 'd_coincide': 'd_coincide', 'd_dentroDe': 'd_dentroDe', 'd_regime': 'd_regime', });
lyr_Curvas20_2.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'ELEV': 'TextEdit', });
lyr_AA1_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', });
lyr_AB1eAB2_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_AC1eAC2_5.set('fieldImages', {'FID': 'TextEdit', });
lyr_AE1eAE2_6.set('fieldImages', {'id': 'TextEdit', });
lyr_BA1_7.set('fieldImages', {'fid': 'TextEdit', });
lyr_BA2_8.set('fieldImages', {'id': 'TextEdit', });
lyr_BD2_9.set('fieldImages', {'FID': 'TextEdit', });
lyr_BD1_10.set('fieldImages', {'fid': 'TextEdit', });
lyr_ViasExistentes_11.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'highway': 'TextEdit', 'waterway': 'TextEdit', 'aerialway': 'TextEdit', 'barrier': 'TextEdit', 'man_made': 'TextEdit', 'z_order': 'TextEdit', 'other_tags': 'TextEdit', });
lyr_TrechoDrenagem_12.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'larguraMed': 'TextEdit', 'nomeAbrev': 'TextEdit', 'd_geometri': 'TextEdit', 'd_coincide': 'TextEdit', 'd_dentroDe': 'TextEdit', 'd_regime': 'TextEdit', });
lyr_Curvas20_2.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'no label', });
lyr_AA1_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_AB1eAB2_4.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_AC1eAC2_5.set('fieldLabels', {'FID': 'no label', });
lyr_AE1eAE2_6.set('fieldLabels', {'id': 'no label', });
lyr_BA1_7.set('fieldLabels', {'fid': 'no label', });
lyr_BA2_8.set('fieldLabels', {'id': 'no label', });
lyr_BD2_9.set('fieldLabels', {'FID': 'no label', });
lyr_BD1_10.set('fieldLabels', {'fid': 'no label', });
lyr_ViasExistentes_11.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'highway': 'no label', 'waterway': 'no label', 'aerialway': 'header label', 'barrier': 'header label', 'man_made': 'no label', 'z_order': 'no label', 'other_tags': 'no label', });
lyr_TrechoDrenagem_12.set('fieldLabels', {'fid': 'no label', 'nome': 'no label', 'larguraMed': 'no label', 'nomeAbrev': 'no label', 'd_geometri': 'no label', 'd_coincide': 'no label', 'd_dentroDe': 'no label', 'd_regime': 'no label', });
lyr_TrechoDrenagem_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});