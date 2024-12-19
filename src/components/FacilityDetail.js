import React, { useRef, useEffect } from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import '../styles/FacilityDetail.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const FacilityDetail = ({ facility, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const predictions = {
    nextHour: Math.min(100, Math.round(facility.currentOccupancy * 1.2)),
    peakTime: facility.type === 'dining' ? '12:00 PM' : '2:00 PM',
    quietTime: facility.type === 'dining' ? '3:00 PM' : '8:00 AM',
    weeklyPattern: facility.type === 'dining'
      ? [45, 50, 55, 60, 75, 85, 40] // Dining halls
      : facility.type === 'library'
        ? [65, 80, 75, 70, 85, 45, 30] // Libraries
        : [40, 55, 60, 65, 70, 85, 75], // Gym
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#ffffff'
        }
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: '#ffffff'
        }
      },
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: '#ffffff'
        }
      }
    }
  };

  const hourlyData = {
    labels: ['8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'],
    datasets: [{
      label: 'Occupancy Level',
      data: facility.type === 'dining'
        ? [20, 35, 60, 90, 95, 85, 50, 45, 40, 30] // Dining pattern
        : facility.type === 'library'
          ? [30, 45, 65, 75, 80, 85, 90, 70, 50, 35] // Library pattern
          : [25, 40, 60, 75, 65, 80, 95, 85, 60, 40], // Gym pattern
      borderColor: 'rgb(97, 218, 251)',
      backgroundColor: 'rgba(97, 218, 251, 0.5)',
      tension: 0.4,
      fill: true
    }]
  };

  const getStatusColor = (percentage) => {
    if (percentage >= 80) return '#ff4d4d';
    if (percentage >= 50) return '#ffd700';
    return '#4caf50';
  };

  return (
    <div className="facility-detail-modal">
      <div className="modal-content" ref={modalRef}>
        <h2>{facility.name}</h2>
        <div className="occupancy-info">
          <div className="current-status">
            <div className="floating-close" onClick={onClose}>×</div>
            <h3>Current Status</h3>
            <div className="status-display">
              <div className="percentage">
                {Math.round((facility.currentOccupancy / facility.maxCapacity) * 100)}%
              </div>
              <div className="capacity">
                {facility.currentOccupancy} / {facility.maxCapacity} people
              </div>
            </div>
          </div>

          <div className="predictions-section">
            <h3>Real-time Analytics</h3>
            <div className="prediction-grid">
              <div className="prediction-card">
                <h4>Next Hour Prediction</h4>
                <div className="prediction-value">{predictions.nextHour}%</div>
                <div className="prediction-label">Expected Occupancy</div>
              </div>
              <div className="prediction-card">
                <h4>Today's Peak Time</h4>
                <div className="prediction-value">{predictions.peakTime}</div>
                <div className="prediction-label">Highest Traffic Expected</div>
              </div>
              <div className="prediction-card">
                <h4>Recommended Time</h4>
                <div className="prediction-value">{predictions.quietTime}</div>
                <div className="prediction-label">Lowest Traffic Expected</div>
              </div>
            </div>
          </div>
          <div className="peak-hours">
            <h3>Today's Occupancy Trend</h3>
            <div className="occupancy-trend">
              {hourlyData.labels.map((hour, index) => (
                <div key={hour} className="hour-bar">
                  <div className="bar-label">{hourlyData.datasets[0].data[index]}%</div>
                  <div
                    className="bar-fill"
                    style={{
                      height: `${hourlyData.datasets[0].data[index]}%`,
                      backgroundColor: getStatusColor(hourlyData.datasets[0].data[index])
                    }}
                  />
                  <div className="hour-label">{hour}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="weekly-pattern">
            <h3>Weekly Traffic Pattern</h3>
            <div className="day-bars">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
                <div key={day} className="day-bar">
                  <div className="bar-fill" style={{height: `${predictions.weeklyPattern[i]}%`}}></div>
                  <div className="day-label">{day}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="facility-recommendations">
            <h3>Best Times to Visit</h3>
            <div className="time-slots">
              <div className="time-slot">
                <span className="time">8:00 AM - 10:00 AM</span>
                <span className="occupancy-level low">Low Occupancy</span>
              </div>
              <div className="time-slot">
                <span className="time">2:00 PM - 4:00 PM</span>
                <span className="occupancy-level moderate">Moderate</span>
              </div>
            </div>
          </div>
          <div className="facility-info">
            <h3>Additional Information</h3>
            <div className="info-grid">
              <div className="info-item">
                <span className="label">Operating Hours</span>
                <span className="value">{facility.operatingHours}</span>
              </div>
              <div className="info-item">
                <span className="label">Peak Hours</span>
                <span className="value">{facility.peakHours}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilityDetail;