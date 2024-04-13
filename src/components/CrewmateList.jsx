import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';

const CrewmateList = () => {
  const [crewmates, setCrewmates] = useState([]);

  useEffect(() => {
    fetchCrewmates();
  }, []);

  const fetchCrewmates = async () => {
    try {
      const { data, error } = await supabase
        .from('crewmates')
        .select('*');
      if (error) {
        throw error;
      }
      setCrewmates(data);
    } catch (error) {
      console.error('Error fetching crewmates:', error.message);
    }
  };

  const deleteCrewmate = async (id) => {
    try {
      const { error } = await supabase
        .from('crewmates')
        .delete()
        .eq('id', id);
      if (error) {
        throw error;
      }
      fetchCrewmates();
    } catch (error) {
      console.error('Error deleting crewmate:', error.message);
    }
  };

  return (
    <div className="crewmate-list-container"> 
      <h1>Crewmate List</h1>
      <ul className="crewmate-list"> 
        {crewmates.map((crewmate) => (
          <li key={crewmate.id}>
            <Link to={`/crewmate/${crewmate.id}`} className="crewmate-link">{crewmate.name}</Link>{' '} 
            <button onClick={() => deleteCrewmate(crewmate.id)} className="delete-button">Delete</button> 
          </li>
        ))}
      </ul>
      <Link to="/add-crewmate" className="add-crewmate-link">Add Crewmate</Link> 
    </div>
  );
};

export default CrewmateList;
