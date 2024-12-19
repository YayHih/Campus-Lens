import React, { useState } from 'react';
import '../styles/FacilityDashboard.css';
import FacilityDetail from './FacilityDetail';

const FacilityDashboard = () => {
  const [facilities, setFacilities] = useState([
    {
      // In the future, we will connect backend database to get actual values
      id: 1,
      name: "Rush Rhees Library",
      currentOccupancy: 75,
      maxCapacity: 200,
      status: "high",
      type: "library",
      operatingHours: "8:00 AM - 12:00 AM",
      peakHours: "11:00 AM - 3:00 PM"
    },
    {
      id: 2,
      name: "iZone",
      currentOccupancy: 45,
      maxCapacity: 150,
      status: "moderate",
      type: "library",
      operatingHours: "9:00 AM - 11:00 PM",
      peakHours: "2:00 PM - 6:00 PM"
    },
    {
      id: 3,
      name: "Arts & Music Library",
      currentOccupancy: 25,
      maxCapacity: 100,
      status: "low",
      type: "library",
      operatingHours: "8:00 AM - 10:00 PM",
      peakHours: "10:00 AM - 2:00 PM"
    },
    {
      id: 4,
      name: "Carlson Library",
      currentOccupancy: 85,
      maxCapacity: 180,
      status: "high",
      type: "library",
      operatingHours: "8:00 AM - 11:00 PM",
      peakHours: "1:00 PM - 5:00 PM"
    },
    {
      id: 5,
      name: "Douglass Dining Center",
      currentOccupancy: 120,
      maxCapacity: 200,
      status: "high",
      type: "dining",
      operatingHours: "7:00 AM - 9:00 PM",
      peakHours: "12:00 PM - 2:00 PM"
    },
    {
      id: 6,
      name: "Danforth Dining Center",
      currentOccupancy: 65,
      maxCapacity: 150,
      status: "moderate",
      type: "dining",
      operatingHours: "7:00 AM - 8:00 PM",
      peakHours: "11:30 AM - 1:30 PM"
    },
    {
      id: 7,
      name: "Goergen Athletic Center",
      currentOccupancy: 25,
      maxCapacity: 100,
      status: "low",
      type: "gym",
      operatingHours: "6:00 AM - 11:00 PM",
      peakHours: "4:00 PM - 7:00 PM"
    }
  ]);

  const [filter, setFilter] = useState('all');
  const [selectedFacility, setSelectedFacility] = useState(null);

  const getStatusColor = (status) => {
    switch(status) {
      case 'high': return '#ff4d4d';
      case 'moderate': return '#ffd700';
      case 'low': return '#4caf50';
      default: return 'var(--primary-color)';
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Campus Facilities Status</h1>
        <div className="filter-controls">
          <button
            className={filter === 'all' ? 'active' : ''}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button
            className={filter === 'library' ? 'active' : ''}
            onClick={() => setFilter('library')}
          >
            Libraries
          </button>
          <button
            className={filter === 'dining' ? 'active' : ''}
            onClick={() => setFilter('dining')}
          >
            Dining Halls
          </button>
          <button
            className={filter === 'gym' ? 'active' : ''}
            onClick={() => setFilter('gym')}
          >
            Gym
          </button>
        </div>
      </div>

      <div className="facilities-grid">
        {facilities
          .filter(f => filter === 'all' || f.type === filter)
          .map(facility => (
            <div
              key={facility.id}
              className="facility-card"
              onClick={() => setSelectedFacility(facility)}
              style={{ cursor: 'pointer' }}
            >
              <h3>{facility.name}</h3>
              <div className="occupancy-meter">
                <div
                  className="occupancy-fill"
                  style={{
                    width: `${(facility.currentOccupancy/facility.maxCapacity) * 100}%`,
                    backgroundColor: getStatusColor(facility.status)
                  }}
                />
              </div>
              <div className="facility-stats">
                <span>{facility.currentOccupancy} / {facility.maxCapacity}</span>
                <span
                  className={`status-badge ${facility.status}`}
                  style={{ backgroundColor: getStatusColor(facility.status) }}
                >
                  {facility.status.toUpperCase()}
                </span>
              </div>
            </div>
          ))}
      </div>

      {selectedFacility && (
        <FacilityDetail
          facility={selectedFacility}
          onClose={() => setSelectedFacility(null)}
        />
      )}
    </div>
  );
};

export default FacilityDashboard;