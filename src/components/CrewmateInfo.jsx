import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../supabaseClient';

const CrewmateInfo = () => {
  const { id } = useParams();
  const [crewmate, setCrewmate] = useState(null);

  useEffect(() => {
    fetchCrewmate();
  }, []);

  const fetchCrewmate = async () => {
    try {
      const { data, error } = await supabase
        .from('crewmates')
        .select('*')
        .eq('id', id)
        .single();
      if (error) {
        throw error;
      }
      setCrewmate(data);
    } catch (error) {
      console.error('Error fetching crewmate info:', error.message);
    }
  };

  if (!crewmate) {
    return <div className="loading-message">Loading...</div>;
  }

  return (
    <div className="crewmate-info-container">
      <h1>Crewmate Info</h1>
      <p className="info-item">Name: {crewmate.name}</p>
      <p className="info-item">Speed(mph): {crewmate.speed}</p>
      <p className="info-item">Color: {crewmate.color}</p>
    </div>
  );
};

export default CrewmateInfo;
