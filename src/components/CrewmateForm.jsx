import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';

const CrewmateForm = () => {
  const [name, setName] = useState('');
  const [speed, setSpeed] = useState('');
  const [color, setColor] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name.trim() || !speed.trim() || !color.trim()) {
        throw new Error('Name, speed, and color are required.');
      }

      const { error } = await supabase
        .from('crewmates')
        .insert([{ name, speed, color }]);
      if (error) {
        throw error;
      }
      
      // Reset the form fields after successful submission
      setName('');
      setSpeed('');
      setColor('');
    } catch (error) {
      setError(error.message || 'An error occurred while adding the crewmate.');
    }
  };

  return (
    <div className="crewmate-form-container"> 
      <h1>Add Crewmate</h1>
      {error && <div className="error-message">{error}</div>} 
      <form onSubmit={handleSubmit} className="crewmate-form"> 
        <label className="form-label">
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
          />
        </label>
        <br />
        <label className="form-label">
          Speed (mph):
          <input
            type="number"
            value={speed}
            onChange={(e) => setSpeed(e.target.value)}
            className="form-input"
          />
        </label>
        <br />
        <label className="form-label">
          Color:
          <br />
          <label>
            <input
              type="radio"
              value="red"
              checked={color === 'red'}
              onChange={(e) => setColor(e.target.value)}
            /> Red
          </label>
          <label>
            <input
              type="radio"
              value="blue"
              checked={color === 'blue'}
              onChange={(e) => setColor(e.target.value)}
            /> Blue
          </label>
          <label>
            <input
              type="radio"
              value="green"
              checked={color === 'green'}
              onChange={(e) => setColor(e.target.value)}
            /> Green
          </label>
          <label>
            <input
              type="radio"
              value="yellow"
              checked={color === 'yellow'}
              onChange={(e) => setColor(e.target.value)}
            /> Yellow
          </label>
          <label>
            <input
              type="radio"
              value="orange"
              checked={color === 'orange'}
              onChange={(e) => setColor(e.target.value)}
            /> Orange
          </label>
          <label>
            <input
              type="radio"
              value="white"
              checked={color === 'white'}
              onChange={(e) => setColor(e.target.value)}
            /> White
          </label>
        </label>
        <br />
        <button type="submit" className="form-button">Add</button>
        <Link to="/" className="cancel-link">Cancel</Link>
      </form>
    </div>
  );
};

export default CrewmateForm;
