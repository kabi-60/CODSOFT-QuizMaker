import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Name = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [isValid, setIsValid] = useState(true);

  const validateName = (name) => {
    // Simple validation: name should be at least 3 characters long
    return name.length >= 3;
  };

  const handleInputChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    setIsValid(validateName(newName));
  };

  const nextpage = (e) => {
    e.preventDefault();
    if (isValid && name !== '') {
      navigate('/page5');
    } else {
      alert('Please enter a valid name with at least 3 characters.');
    }
  };

  return (
    <div className="w-full flex flex-col sm:justify-center sm:pt-0">
      <div className="w-full sm:max-w-md p-5 mx-auto">
        <h2 className="mb-12 text-center text-5xl font-extrabold text-[#39383a]">Fill the Form..!</h2>
        <form onSubmit={nextpage}>
          <div className="mb-4">
            <label className="block mb-1 text-[#39383a] font-bold" htmlFor="name">Name</label>
            <input 
              id="name" 
              type="text" 
              name="name" 
              value={name}
              onChange={handleInputChange} 
              placeholder="Enter the Name"
              className={`py-2 px-3 border ${isValid ? 'border-gray-300' : 'border-red-500'} focus:border-yellow-300 focus:outline-none focus:ring focus:ring-yellow-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full`}
            />
          </div>
          <div className="mt-6">
            <button 
              type="submit"
              className="w-full inline-flex items-center justify-center px-4 py-2 bg-[#fbbb01] border border-transparent rounded-md font-semibold capitalize text-white hover:bg-[#fbc835] active:bg-yellow-700 focus:outline-none focus:border-yellow-700 focus:ring focus:ring-yellow-200 disabled:opacity-25 transition"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Name;
