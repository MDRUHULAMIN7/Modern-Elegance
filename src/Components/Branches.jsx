import { useState, useEffect } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

const Branches = () => {
  const [geoData, setGeoData] = useState(null); // State for storing GeoJSON data
  const [selectedBranch, setSelectedBranch] = useState(null); // State for selected branch

  // Sample branch data with geographic coordinates
  const branches = [
    {
      name: "Dhanmondi Branch",
      address: "Green Plaza, 4th Floor Plot-8, Road-5/A Satmasjid Road, Dhanmondi, Dhaka-1209",
      phone: "+880-2-000000",
      mobile: "+8801234567890",
      coordinates: [90.374, 23.746]
    },
    {
      name: "Motijheel Branch",
      address: "Reiken Bhaban, 2nd Floor Room No 201, Motijheel, Dhaka-1000",
      phone: "+880-2-111111",
      mobile: "+8801234567891",
      coordinates: [90.4125, 23.7315]
    },
    {
      name: "Chittagong Branch",
      address: "Some Building, 3rd Floor, Chittagong",
      phone: "+880-31-000000",
      mobile: "+8801234567892",
      coordinates: [91.8317, 22.3569]
    },
  ];

  // Fetch GeoJSON data from the public folder
  useEffect(() => {
    fetch('/bangladesh-districts.json')
      .then((response) => response.json())
      .then((data) => setGeoData(data))
      .catch((error) => console.error("Error loading GeoJSON data:", error));
  }, []);

  const handleMarkerClick = (branch) => {
    setSelectedBranch(branch);
  };

  return (
    <section className="bg-[#F6F6F6] py-10">
      <h1 className="text-center text-3xl">Our Branches</h1>
      <p className="text-center text-[15px] md:w-1/2 mx-auto pt-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation.
      </p>

      {/* Map Section */}
      <div className="flex justify-center mt-8">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            center: [90.5, 23.7],  // Center the projection on Bangladesh
            scale: 3000            // Adjust scale to fit Bangladesh map properly
          }}
          width={600}
          height={500}
        >
          {/* Render the map only if geoData is available */}
          {geoData && (
            <Geographies geography={geoData}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#D6D6DA"
                    stroke="#FFFFFF"
                    strokeWidth={0.5}
                  />
                ))
              }
            </Geographies>
          )}

          {/* Add branch markers */}
          {branches.map((branch, index) => (
            <Marker
              key={index}
              coordinates={branch.coordinates}
              onClick={() => handleMarkerClick(branch)}
              style={{ cursor: "pointer" }}
            >
              <circle r={6} fill="#FF5533" />
            </Marker>
          ))}
        </ComposableMap>
      </div>

      {/* Branch Info Section */}
      {selectedBranch && (
        <div className="mt-6 p-4 bg-white shadow-md rounded-lg max-w-md mx-auto">
          <h2 className="text-xl font-semibold">{selectedBranch.name}</h2>
          <p>{selectedBranch.address}</p>
          <p>Phone: {selectedBranch.phone}</p>
          <p>Mobile: {selectedBranch.mobile}</p>
        </div>
      )}
    </section>
  );
};

export default Branches;
