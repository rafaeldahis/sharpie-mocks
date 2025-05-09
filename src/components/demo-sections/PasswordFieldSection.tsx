
import React, { useState } from 'react';
import { SketchCard } from '../marker';
import { Eye, EyeOff } from 'lucide-react';

const PasswordFieldSection: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SketchCard title="Password Field" className="mb-6">
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="sketch-input w-full pr-10"
        />
        <button
          type="button"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
      </div>
    </SketchCard>
  );
};

export default PasswordFieldSection;
