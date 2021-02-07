import React from 'react';

export const Form = ({ handleChange, handleSubmit, getWeather, cityName }) => {
  return (
    <form className="search-input" onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search city"
        name="city"
        onChange={handleChange}
        value={cityName}
      />
      <button
        type="submit"
        onClick={() => {
          getWeather();
        }}
      >
        <i className="fas fa-search"></i> Search
      </button>
    </form>
  );
};
