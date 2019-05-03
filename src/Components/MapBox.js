
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

MapboxGL.setAccessToken('pk.eyJ1IjoiZGllZ29taXIiLCJhIjoiY2p1ZWdjM2JpMDM5ZzRjdTlrcGFqazZuNiJ9.Ik8y3az5a-pEKDtI70iCcw');



export default class MapBox extends Component {

    constructor(props) {
        super(props);
    }

    renderAnnotations() {
        return (
            <MapboxGL.PointAnnotation
                id='rocketseat'
                coordinate={[this.props.long, this.props.lat]}
            >
                <View style={styles.annotationContainer}>
                    <View style={styles.annotationFill} />
                </View>
                <MapboxGL.Callout title='Entrega Realizada' />
            </MapboxGL.PointAnnotation>
        )
    }

    render() {
        return (
            <MapboxGL.MapView
                centerCoordinate={[this.props.long, this.props.lat]}
                style={styles.container}
                showUserLocation
                zoomLevel={14}
                logoEnabled={false}

                // MapboxGL.StyleURL.Street
                // MapboxGL.StyleURL.Dark
                styleURL={MapboxGL.StyleURL.Dark}
            >
                {this.renderAnnotations()}
            </MapboxGL.MapView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 300,
        width: 400,

    },
    annotationContainer: {
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 15,
    },
    annotationFill: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#7159C1',
        transform: [{ scale: 0.8 }],
    }
});