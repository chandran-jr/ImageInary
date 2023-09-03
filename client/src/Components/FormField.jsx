import React from 'react'

const FormField = ({labelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label htmlFor={name} className="block text-sm font-medium text-gray-900">{labelName}</label>
        {isSurpriseMe && <button type="button" className='font-semibold text-xs bg-[#6469ff] py-1 px-2 transition hover:bg-[#5055e3] ease-in-out text-white rounded-sm' onClick={handleSurpriseMe}>Surprise Me</button>}
      </div>
      <input type={type} name={name} id={name} placeholder={placeholder} value={value} onChange={handleChange} required className="bg-gray-50 border-gray-300 text-gray-900 rounded-lg text-sm focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3 border" />
    </div>
  )
}

export default FormField