import './Results.css';
import React, { useState, useEffect } from 'react';
import { BarChart, Tooltip, XAxis, YAxis, Bar } from 'recharts';
import axios from 'axios';
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
const L = require('leaflet');

function Results() {
  const [bookingDistanceBins, setBookingDistanceBins] = useState(null);
  const [mostPopularPickupPoints, setMostPopularPickupPoints] = useState({features: []});
  const [mostPopularDropoffPoints, setMostPopularDropoffPoints] = useState({features: []});

  useEffect(() => {
    axios.post('/simulate', {
      noOfRequests: 20,
      boundingBox: [13.34014892578125, 52.52791908000258, 13.506317138671875, 52.562995039558004]
    })
    .then(function (response) {
      var bookingDistanceBins = [];
      for (const [key, value] of Object.entries(response.data.bookingDistanceBins)) {
        bookingDistanceBins.push({
          distance: key.replace('From ', ''),
          count: value
        });
      }
      setBookingDistanceBins(bookingDistanceBins);
      setMostPopularDropoffPoints(JSON.parse(response.data.mostPopularDropoffPoints));
      setMostPopularPickupPoints(JSON.parse(response.data.mostPopularPickupPoints));
    })
    .catch(function (error) {
      console.log(error);
    });
  }, []);

  const berlinCenter = {
    lat: 52.520008,
    lng: 13.404954,
  }

  const dropoffIcon = L.icon({
      iconUrl: '/assets/dropoff-marker.png',
      iconSize: [25,41]
  });

  return (
    <div>
      <h2>Simulation results</h2>

      <h3>Bookings per 'km bin'</h3>
      <BarChart width={400} height={250} className="Distance-bins-chart" data={bookingDistanceBins}>
        <XAxis dataKey="distance" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" fill="#82ca9d" />
      </BarChart>

      <h3>Most common pickup (<span className="Pickup-icon"></span>) and drop-off points (<span className="Dropoff-icon"></span>)</h3>
        <MapContainer  className="Map" center={[berlinCenter.lat, berlinCenter.lng]} zoom={11} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {mostPopularPickupPoints.features.map((point, idx) => (
          <Marker key={`pickup-${idx}`} position={[point.geometry.coordinates[1], point.geometry.coordinates[0]]}>
            <Popup>
              {point.properties.name}
            </Popup>
          </Marker>
          ))}
          
          {mostPopularDropoffPoints.features.map((point, idx) => (
            <div className="Dropoff-marker">
              <Marker icon={dropoffIcon} image="https://www.hofbauer.de/wp-content/uploads/2015/05/google-maps-marker-for-residencelamontagne-hi.png" key={`dropoff-${idx}`} position={[point.geometry.coordinates[1], point.geometry.coordinates[0]]}>
                <Popup>
                  {point.properties.name}
                </Popup>
              </Marker>
            </div>
          ))}
          
        </MapContainer>
    </div>
  );
}

export default Results;

