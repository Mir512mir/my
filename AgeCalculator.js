import React, { useState } from 'react';

const AgeCalculator = () => {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState('');

  const handleInputChange = (event) => {
    setBirthdate(event.target.value);
  };

  const calculateAge = () => {
    const birthdateArray = birthdate.split('.');
    const birthYear = birthdateArray[2];
    const currentYear = new Date().getFullYear();
    const userAge = currentYear - birthYear;
    setAge(userAge);
  };

  return (
    <div>
      <input type="text" value={birthdate} onChange={handleInputChange} />
      <button onClick={calculateAge}>Calculate Age</button>
      {age && <p>{`You are ${age} years old.`}</p>}
    </div>
  );
};

export default AgeCalculator;