import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar1 from "../components/header";

// Handles map click and marker placement
function LocationPicker({ onLocationSelect }) {
  const [markerPos, setMarkerPos] = useState(null);

  useMapEvents({
    click(e) {
      setMarkerPos(e.latlng);
      onLocationSelect(e.latlng);
    },
  });

  return markerPos ? <Marker position={markerPos} /> : null;
}

// React JS Page (JavaScript, not TypeScript)
export default function LostFoundPage() {
  const [mode, setMode] = useState("lost");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState(null);
  const [images, setImages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      type: mode,
      title,
      description,
      location,
      images,
    };

    console.log("Submitted data:", payload);
    alert("Form submitted! Check console for data.");
  };

  return (
    <>
    <Navbar1/>
    <div className="min-h-screen bg-gray-300 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 rounded-2xl shadow-lg w-full max-w-3xl p-6"
      >
        <h1 className="text-2xl font-bold mb-4">Report Lost / Found Item</h1>

        {/* Toggle */}
        <div className="btn-group w-full mb-4">
          <button
            type="button"
            className={`btn ${mode === "lost" ? "btn-dark" : "btn-outline-dark"}`}
            onClick={() => setMode("lost")}
          >
            I Lost Something
          </button>
          <button
            type="button"
            className={`btn ${mode === "found" ? "btn-dark" : "btn-outline-dark"}`}
            onClick={() => setMode("found")}
          >
            I Found Something
          </button>
        </div>

        {/* Title */}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-control mb-3"
          placeholder="Item title (e.g., Black Backpack)"
          required
        />

        {/* Description */}
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-control mb-4"
          rows="4"
          placeholder="Describe the item, when/where it was lost/found..."
          required
        />

        {/* Map */}
        <label className="font-semibold mb-2 block">Select Location on Map</label>
        <div className="h-64 w-full rounded-lg overflow-hidden border mb-2">
          <MapContainer
            center={[22.46, 111.23]}
            zoom={4}
            className="h-full w-full"
          >
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationPicker onLocationSelect={setLocation} />
          </MapContainer>
        </div>

        {location && (
          <p className="text-sm text-gray-600 mb-4">
            Clicked location: {location.lat.toFixed(5)}, {location.lng.toFixed(5)}
          </p>
        )}

        {/* Upload */}
        <label className="font-semibold mb-1 block">Upload Images</label>
        <input
          type="file"
          multiple
          className="form-control mb-4"
          onChange={(e) => setImages([...e.target.files])}
        />

        {/* Submit */}
        <button type="submit" className="btn btn-dark w-full py-2">
          Submit
        </button>
      </form>
    </div>
    </>
  );
}
