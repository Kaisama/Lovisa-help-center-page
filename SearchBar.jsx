import React from 'react';
import { BiSearch } from 'react-icons/bi';

const SearchBar = () => {
  return (
    <div style={{ marginTop: '2rem', marginBottom: '2rem', position: 'relative' }}>
      <div style={{ position: 'relative ' }}>
        <input
          type="text"
          placeholder=""
          style={{
            padding: "1.4rem 16rem", // Keep the original padding
            borderRadius: "5px",
            border: "1px solid #ccc",
            backgroundImage: `url('data:image/svg+xml;base64,${btoa(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#e68ec1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`
            )}')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left .75rem center",
            backgroundSize: "1rem",
            height: "2.5rem",
            position: "relative",
            left: ".4rem",
            bottom: "1rem",
            fontSize: "10px",
            textAlign: "left",
            width: "100%", 
            
          }}
        />
        <button
        style={{
            position: "absolute",
            top: "16%",
            
            transform: "translateY(-50%)",
            padding: ".7rem 1.4rem",
            backgroundColor: "pink",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >Search</button>
      </div>
    </div>
  );
};

export default SearchBar;