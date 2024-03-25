import React from 'react';

const CompareButton = ({ text, onClick }) => {
  return (
    // onClick prop handles the action of adding a gift object to the list.
    <button onClick={onClick} className="flex justify-center border rounded-md border-primary-200 text-primary-200 hover:bg-primary-200 hover:text-white  font-montserrat text-h3 uppercase text-center my-2 w-full p-4 backdrop:tracking-wider">
      add to compare&nbsp;list
    </button>
  );
};

export default CompareButton;

