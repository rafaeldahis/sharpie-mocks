
import React, { useState } from 'react';
import { Eye, EyeOff, Search, Calendar, Plus, Minus, Text, ToggleLeft, ToggleRight, Tag, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export const FormControls = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('mySecurePassword');
  const [searchQuery, setSearchQuery] = useState('');
  const [rangeValue, setRangeValue] = useState(50);
  const [dualRangeValues, setDualRangeValues] = useState([25, 75]);
  const [quantity, setQuantity] = useState(1);
  const [tags, setTags] = useState<string[]>(['React', 'TypeScript']);
  const [newTag, setNewTag] = useState('');
  const [viewToggle, setViewToggle] = useState<'simple' | 'advanced'>('simple');
  const [richText, setRichText] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // Mock search suggestions
  const suggestions = [
    'React Components', 
    'React Hooks', 
    'TypeScript Interfaces', 
    'React Router'
  ].filter(s => s.toLowerCase().includes(searchQuery.toLowerCase()));

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRangeValue(parseInt(e.target.value));
  };

  const handleDualRangeChange = (index: 0 | 1, value: number) => {
    const newValues = [...dualRangeValues];
    newValues[index] = value;
    
    // Make sure values don't cross each other
    if (index === 0 && value > newValues[1]) {
      newValues[0] = newValues[1];
    } else if (index === 1 && value < newValues[0]) {
      newValues[1] = newValues[0];
    } else {
      newValues[index] = value;
    }
    
    setDualRangeValues(newValues);
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prev => prev > 1 ? prev - 1 : 1);
  };

  const addTag = () => {
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
      setNewTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && newTag) {
      e.preventDefault();
      addTag();
    }
  };

  const formatDate = (date: Date | null) => {
    if (!date) return '';
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  return (
    <section className="space-y-12">
      <h2 className="text-2xl font-bold sketch-heading mb-6">2. Form & Input Controls</h2>
      
      {/* Multiline Text Area */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold sketch-heading">Multiline Text Area</h3>
        <div className="border sketch-border p-4">
          <label htmlFor="comment" className="block mb-2 font-medium">Leave a comment:</label>
          <div className="sketch-input flex flex-col">
            <textarea
              id="comment"
              rows={4}
              className="w-full p-2 bg-transparent focus:outline-none"
              placeholder="Type your comment here..."
            ></textarea>
            <div className="flex justify-between text-xs text-gray-500 p-2 border-t">
              <span>Use @ to mention someone</span>
              <span>0/280</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Password Field */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold sketch-heading">Password Field with Show/Hide Toggle</h3>
        <div className="border sketch-border p-4">
          <label htmlFor="password" className="block mb-2 font-medium">Password:</label>
          <div className="sketch-input flex items-center">
            <input
              id="password"
              type={passwordVisible ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 bg-transparent focus:outline-none"
            />
            <button 
              onClick={togglePasswordVisibility}
              className="p-2 text-gray-500 hover:text-gray-700"
              aria-label={passwordVisible ? "Hide password" : "Show password"}
            >
              {passwordVisible ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          <div className="mt-1 text-xs text-gray-500">
            Password strength: Strong
            <div className="mt-1 bg-gray-200 h-1 w-full rounded-full">
              <div className="bg-green-500 h-1 w-3/4 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Search Bar */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold sketch-heading">Search Bar with Autocomplete</h3>
        <div className="border sketch-border p-4">
          <div className="relative">
            <div className="sketch-input flex items-center">
              <Search size={18} className="ml-2 text-gray-400" />
              <input
                type="text"
                placeholder="Search components..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-2 pl-3 bg-transparent focus:outline-none"
              />
            </div>
            
            {searchQuery && suggestions.length > 0 && (
              <div className="absolute z-10 mt-1 w-full border rounded-md sketch-border bg-white">
                <ul className="py-1">
                  {suggestions.map((suggestion, i) => (
                    <li 
                      key={i}
                      className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setSearchQuery(suggestion);
                      }}
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Date Picker */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold sketch-heading">Date Picker</h3>
        <div className="border sketch-border p-4">
          <label htmlFor="date" className="block mb-2 font-medium">Select a date:</label>
          <div className="sketch-input flex items-center cursor-pointer">
            <input
              id="date"
              type="text"
              readOnly
              value={selectedDate ? formatDate(selectedDate) : ''}
              placeholder="Click to select a date"
              className="w-full p-2 bg-transparent focus:outline-none cursor-pointer"
            />
            <Calendar size={18} className="mr-2 text-gray-500" />
          </div>
          <p className="mt-2 text-sm text-gray-500">
            Note: In a real implementation, clicking this would open a date picker calendar component.
          </p>
        </div>
      </div>
      
      {/* Range Slider */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold sketch-heading">Range Slider (Single & Dual-Thumb)</h3>
        <div className="border sketch-border p-4">
          <div className="mb-6">
            <label htmlFor="single-range" className="block mb-2 font-medium">Single Range Slider:</label>
            <div className="flex items-center gap-4">
              <input
                id="single-range"
                type="range"
                min="0"
                max="100"
                value={rangeValue}
                onChange={handleRangeChange}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer sketch-range"
              />
              <span className="w-10 text-center">{rangeValue}%</span>
            </div>
          </div>
          
          <div>
            <label className="block mb-2 font-medium">Dual Thumb Range (Price Range):</label>
            <div className="relative mb-6 pt-6">
              <div className="absolute w-full h-2 bg-gray-200 rounded-lg top-6"></div>
              <div 
                className="absolute h-2 bg-blue-500 rounded-lg top-6"
                style={{
                  left: `${dualRangeValues[0]}%`,
                  width: `${dualRangeValues[1] - dualRangeValues[0]}%`
                }}
              ></div>
              
              {/* Min thumb */}
              <input
                type="range"
                min="0"
                max="100"
                value={dualRangeValues[0]}
                onChange={(e) => handleDualRangeChange(0, parseInt(e.target.value))}
                className="absolute w-full h-2 opacity-0 cursor-pointer top-6"
              />
              
              {/* Max thumb */}
              <input
                type="range"
                min="0"
                max="100"
                value={dualRangeValues[1]}
                onChange={(e) => handleDualRangeChange(1, parseInt(e.target.value))}
                className="absolute w-full h-2 opacity-0 cursor-pointer top-6"
              />
              
              <div className="flex justify-between mt-4">
                <div className="sketch-input w-20">
                  <input 
                    type="number" 
                    value={dualRangeValues[0]} 
                    min="0" 
                    max={dualRangeValues[1]}
                    onChange={(e) => handleDualRangeChange(0, parseInt(e.target.value))}
                    className="w-full text-center p-1 bg-transparent focus:outline-none"
                  />
                </div>
                <span className="text-gray-500">to</span>
                <div className="sketch-input w-20">
                  <input 
                    type="number" 
                    value={dualRangeValues[1]} 
                    min={dualRangeValues[0]} 
                    max="100"
                    onChange={(e) => handleDualRangeChange(1, parseInt(e.target.value))}
                    className="w-full text-center p-1 bg-transparent focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Numeric Stepper */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold sketch-heading">Numeric Stepper / Quantity Input</h3>
        <div className="border sketch-border p-4">
          <label className="block mb-2 font-medium">Quantity:</label>
          <div className="flex sketch-input w-36">
            <button
              onClick={decrementQuantity}
              className="flex-shrink-0 p-2 border-r"
              disabled={quantity <= 1}
            >
              <Minus size={16} />
            </button>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-full text-center bg-transparent focus:outline-none"
            />
            <button
              onClick={incrementQuantity}
              className="flex-shrink-0 p-2 border-l"
            >
              <Plus size={16} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Tag Input */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold sketch-heading">Tag or Chip Input</h3>
        <div className="border sketch-border p-4">
          <label className="block mb-2 font-medium">Add Tags:</label>
          <div className="sketch-input flex flex-wrap items-center gap-2 p-2">
            {tags.map((tag, index) => (
              <div key={index} className="flex items-center bg-gray-200 rounded-full px-3 py-1 text-sm">
                <span>{tag}</span>
                <button 
                  onClick={() => removeTag(tag)}
                  className="ml-2 text-gray-500 hover:text-gray-700"
                >
                  <X size={14} />
                </button>
              </div>
            ))}
            <input
              type="text"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={tags.length === 0 ? "Type tag and press Enter" : ""}
              className="flex-grow bg-transparent focus:outline-none min-w-[120px]"
            />
          </div>
          <div className="mt-2 flex gap-2">
            <button 
              onClick={addTag}
              disabled={!newTag}
              className={`sketch-btn text-xs ${!newTag ? 'sketch-btn-disabled' : ''}`}
            >
              <Tag size={14} />
              <span>Add Tag</span>
            </button>
            <p className="text-xs text-gray-500 mt-1">Press Enter to add</p>
          </div>
        </div>
      </div>
      
      {/* Segmented Control */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold sketch-heading">Segmented Control / Toggle Group</h3>
        <div className="border sketch-border p-4">
          <label className="block mb-2 font-medium">View Mode:</label>
          <div className="sketch-input inline-flex p-1 gap-1">
            <button
              onClick={() => setViewToggle('simple')}
              className={`flex-1 py-1 px-3 rounded-md text-sm flex items-center justify-center gap-1 ${
                viewToggle === 'simple' ? 'bg-gray-200' : ''
              }`}
            >
              <ToggleLeft size={16} />
              <span>Simple</span>
            </button>
            <button
              onClick={() => setViewToggle('advanced')}
              className={`flex-1 py-1 px-3 rounded-md text-sm flex items-center justify-center gap-1 ${
                viewToggle === 'advanced' ? 'bg-gray-200' : ''
              }`}
            >
              <ToggleRight size={16} />
              <span>Advanced</span>
            </button>
          </div>
          <p className="mt-4 text-sm">Currently in: <strong>{viewToggle}</strong> mode</p>
        </div>
      </div>
      
      {/* Rich Text Editor */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold sketch-heading">Rich-Text (WYSIWYG) Editor</h3>
        <div className="border sketch-border">
          <div className="border-b p-2 flex flex-wrap gap-1">
            <button className="sketch-btn-icon">B</button>
            <button className="sketch-btn-icon">I</button>
            <button className="sketch-btn-icon">U</button>
            <div className="border-r mx-1 h-6"></div>
            <button className="sketch-btn-icon">
              <Text size={14} />
            </button>
            <div className="border-r mx-1 h-6"></div>
            <button className="sketch-btn-icon">🔗</button>
            <button className="sketch-btn-icon">📷</button>
            <button className="sketch-btn-icon">📊</button>
          </div>
          <textarea
            value={richText}
            onChange={(e) => setRichText(e.target.value)}
            className="w-full h-48 p-4 focus:outline-none"
            placeholder="Start typing your rich content here. This is a simplified demonstration of a rich text editor."
          ></textarea>
        </div>
      </div>
    </section>
  );
};
