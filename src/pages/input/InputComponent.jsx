/* eslint-disable react/prop-types */
import  { useState } from 'react';

const InputComponent = ({ label, type, required, name, onChange, onFocus, onBlur, initialValue = '' }) => {
  const [focused, setFocused] = useState(false);
  const [valid, setValid] = useState(initialValue !== '');

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
    setValid(event.target.value !== ''); // Set valid based on input value
  };

  const handleChange = (event) => {
    onChange(event.target.value);
    setValid(event.target.value !== ''); // Update valid state for validation purposes
  };

  return (
    <div className="input-data">
      <input
      className={styles.input}
        type={type}
        required={required}
        value={initialValue} // Use initialValue state for initial value
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        name={name}
      />
      <div className={styles.underline} />
      <label
        className={focused || valid ? 'label-up' : ''}
        htmlFor={name} // Include htmlFor prop for accessibility
      >
        {label}
      </label>
    </div>
  );
};

const styles = {
    container: {
      position: 'relative',
      width: '100%',    
      height: '40px',
      margin: '0 20px',
    },
    input: {
      display: 'block',
      width: '100%',
      height: '100%',
      border: 'none',
      fontSize: '17px',
      borderBottom: '2px solid rgba(0, 0, 0, 0.12)',
    },
    underline: {
      position: 'absolute',
      bottom: '0',
      height: '2px',
      width: '100%',
    },
    label: {
      position: 'absolute',
      pointerEvents: 'none',
      bottom: '10px',
      fontSize: '16px',
      transition: 'all 0.3s ease',
      fontWeight: '600',
    },
  };


export default InputComponent;
