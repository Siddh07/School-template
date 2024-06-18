import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Location = () => {
  // Replace with your actual address and contact information
  const address = "123 School Street, City, Country";
  const phone = "+123 456 789";
  const email = "info@example.com";

  return (
    <div className="p-4 bg-white rounded shadow mt-8">
      <h3 className="text-xl font-bold mb-2">Location</h3>
      <div style={{ height: '200px' }}>
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[51.505, -0.09]}> 
            <Popup>
              A pretty CSS3 popup.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <p className="text-base mt-2">Address: {address}</p>
      <p className="text-base">Phone: {phone}</p>
      <p className="text-base">Email: {email}</p>
    </div>
  );
};

export default Location;
