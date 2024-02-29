import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import GoogleSheetsTable from './GoogleSheetsTable';
import GoogleFormsEmbed from './GoogleFormEmbed';
import './App.css';
import React, { useEffect, useState } from 'react';
import PubStats from './PubStats'; 
import NavigationBar from './NavigationBar';

function Main() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Dublin Boozer Tracker</h1>
      <div>
        <GoogleSheetsTable />
      </div>
    </div>
  );
}

function Submission() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Contribute to the boozer tracker!</h1>
      <GoogleFormsEmbed />
    </div>
  );
}

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/dublin_pub_tracker" element={<Main />} />
        <Route path="/dublin_pub_tracker/submission" element={<Submission />} />
        <Route path="/dublin_pub_tracker/pubstats" element={<PubStats />} />
      </Routes>
    </Router>
  );
}

export default App;
