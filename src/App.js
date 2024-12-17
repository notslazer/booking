import React, { useState } from "react";
import './App.css';

const destinations = [
  { name: "Reykjavik", price: 645, image: "https://visitreykjavik.is/sites/default/files/styles/original_medium/public/images/2020-01/nordurljos5-.png.webp?itok=28yjGOKo", url: "https://notslazer.github.io/hackathon1/" },
  { name: "Banff National Park", price: 670, image: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", url: "https://notslazer.github.io/hackathon1/" },
  { name: "Cape Town", price: 390, image: "https://images.pexels.com/photos/259447/pexels-photo-259447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", url: "https://notslazer.github.io/capetown/" },
  { name: "Amalfi Coast", price: 690, image: "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", url: "https://notslazer.github.io/hackathon1/" },
  { name: "Queenstown", price: 880, image: "https://images.pexels.com/photos/724963/pexels-photo-724963.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", url: "https://notslazer.github.io/hackathon1/" },
  { name: "Santorini", price: 630, image: "https://plus.unsplash.com/premium_photo-1661964149725-fbf14eabd38c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", url: "https://notslazer.github.io/hackathon1/" },
  { name: "Bali", price: 210, image: "https://plus.unsplash.com/premium_photo-1677829177642-30def98b0963", url: "https://notslazer.github.io/hackathon1/" },
  { name: "Phuket", price: 290, image: "https://images.pexels.com/photos/1481096/pexels-photo-1481096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", url: "https://notslazer.github.io/hackathon1/" },
  { name: "Istanbul", price: 340, image: "https://images.pexels.com/photos/2818045/pexels-photo-2818045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", url: "https://notslazer.github.io/hackathon1/" },
  { name: "Machu Picchu", price: 400, image: "https://images.pexels.com/photos/1570610/pexels-photo-1570610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", url: "https://notslazer.github.io/hackathon1/" },
  { name: "Maldives", price: 1450, image: "https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", url: "https://notslazer.github.io/hackathon1/" },
  { name: "Bora Bora", price: 1300, image: "https://images.pexels.com/photos/1188473/pexels-photo-1188473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", url: "https://notslazer.github.io/hackathon1/tt" },
];

const App = () => {
  const [selectedDestination, setSelectedDestination] = useState("");
  const [numPeople, setNumPeople] = useState(1);
  const [showSummary, setShowSummary] = useState(false);
  const [summaryData, setSummaryData] = useState({});

  const handleSubmit = () => {
    const destination = destinations.find(d => d.name === selectedDestination);
    if (destination) {
      const totalPrice = destination.price * numPeople;
      setSummaryData({ destination, numPeople, totalPrice });
      setShowSummary(true);
    }
  };

  const handleBoxClick = (url) => {
    window.open(url, '_blank');
  };

  if (showSummary) {
    return (
      <div
        className="summary"
        style={{
          background: `url(${summaryData.destination.image}) no-repeat center center fixed`,
          backgroundSize: "cover",
        }}
      >
        <div className="summary-content" style={{ fontSize: '1.8rem', textAlign: 'center', color: '#FFD700' }}>
          <h1>{summaryData.destination.name}</h1>
          <p>Number of Travelers: {summaryData.numPeople}</p>
          <p>Total Price: ${summaryData.totalPrice}</p>
          <button onClick={() => setShowSummary(false)}>Back</button>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <h1>Travel Destinations</h1>
      <div className="grid">
        {destinations.map((destination, index) => (
          <div
            key={index}
            className="box"
            onClick={() => handleBoxClick(destination.url)}
          >
            {destination.name}
          </div>
        ))}
      </div>
      <div className="controls">
        <select value={selectedDestination} onChange={(e) => setSelectedDestination(e.target.value)}>
          <option value="">Select a Destination</option>
          {destinations.map((dest, index) => (
            <option key={index} value={dest.name}>{dest.name}</option>
          ))}
        </select>
        <input
          type="number"
          min="1"
          value={numPeople}
          onChange={(e) => setNumPeople(e.target.value)}
          placeholder="Number of People"
        />
        <button onClick={handleSubmit}>Calculate</button>
      </div>
    </div>
  );
};

export default App;
