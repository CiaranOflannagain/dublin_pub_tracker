import React, { useEffect, useState } from 'react';
import axios from 'axios';
import guinnessIcon from './icons/guinness_icon.png';
import './CSS Styles/NavBar.css';
import './CSS Styles/LoadingWidget.css';
function GoogleFormsEmbed() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate loading delay with setTimeout
        const timer = setTimeout(() => {
          setLoading(false);
        }, 1000); // Adjust delay time as needed

        return () => clearTimeout(timer);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="loading-spinner">
        <img src={guinnessIcon} alt="Loading..." />
      </div>
    );
  }

  return (
    <div>
      <iframe
        src="https://forms.gle/76uWNi7T6vMkeHwv9"
        width="100%"
        height="800px"
        frameBorder="0"
        marginHeight="0"
        marginWidth="50px"
        title="Google Form"
      >
        Loading...
      </iframe>
    </div>
  );
}

export default GoogleFormsEmbed;