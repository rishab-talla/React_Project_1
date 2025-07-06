import { useState } from 'react';

const Toggle = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={`toggle1 ${
        isActive ? 'bg-orange' : 'bg-gray'
      }`}
      onClick={() => setIsActive(!isActive)}
    >
      <div
        className={`toggle2 ${
          isActive ? 'translate-x-5' : ''
        }`}
      ></div>
    </div>
  );
};

export default Toggle;
