import React, { useState, useEffect } from 'react';
import guinnessIcon from './icons/guinness_icon.png';
import './CSS Styles/NavBar.css';
import './CSS Styles/LoadingWidget.css';

const PubStats = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [chartUrl, setChartUrl] = useState('');
  const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTyr_AtTh0JhgJSjN8zjvDeKnHVB7viIUHoKSzCHATSzpSZ4ECaPLGAToUFhOGORMIkDmyoEqO-5waO/pub?gid=273829997&single=true&output=csv";
  const chartInteractiveUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTyr_AtTh0JhgJSjN8zjvDeKnHVB7viIUHoKSzCHATSzpSZ4ECaPLGAToUFhOGORMIkDmyoEqO-5waO/pubchart?oid=113665974&format=interactive";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(csvUrl);
        const csvData = await response.text();
        const parsedData = csvData.split('\n').map((row) => row.split(','));
        setData(parsedData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();

    setChartUrl(chartInteractiveUrl); // Set chart URL
  }, [csvUrl]);

  if (loading) {
    return (
      <div className="loading-spinner">
        <img src={guinnessIcon} alt="Loading..." />
      </div>
    );
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Pub Statistics</h1>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: '1' }}>
          <table>
            <thead>
              <tr>
                {data.length > 0 && data[0].map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.length > 1 && data.slice(1).map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ flex: '1' }}>
          <iframe
            width="793"
            height="586"
            seamless
            frameBorder="0"
            scrolling="no"
            src={chartUrl}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default PubStats;