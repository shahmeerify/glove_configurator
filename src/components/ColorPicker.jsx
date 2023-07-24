import React from "react";

const ColorPicker = ({ label, color, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input type="color" value={color} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
};

export default ColorPicker;
