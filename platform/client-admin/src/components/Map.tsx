
import React from 'react';
import GoogleMapReact from 'google-map-react';
import { IonIcon } from '@ionic/react';

export const Map: React.FC<{}> = () => {
    return (
        // TODO add google maps embed api
        <div style={{ width: "600px", margin: "0 auto", padding: "20px" }}>
            <img alt={"map"} src="https://i.imgur.com/ZBOZ1UW.png">
            </img>
        </div>
    );
};