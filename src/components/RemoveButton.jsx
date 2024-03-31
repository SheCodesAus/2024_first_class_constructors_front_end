import React from 'react';

function RemoveButton({ giftData }) {
    const handleRemoveClick = () => {
        // Retrieve the existing gifts from localStorage
        const existingGifts = JSON.parse(localStorage.getItem("gifts")) || [];

        // Filter out the current gift
        const updatedGifts = existingGifts.filter(gift => gift.id !== giftData.id);

        // Save the updated gifts array to localStorage
        localStorage.setItem("gifts", JSON.stringify(updatedGifts));

        alert("Gift removed from compare list!");
        // Refresh the page
        window.location.reload();
    };

    return (
        <button 
            className="flex justify-center border rounded-md bg-white border-primary-200 text-primary-200 hover:bg-primary-200 hover:text-white font-montserrat text-h3 uppercase text-center my-2 w-full p-4 backdrop:tracking-wider"
            onClick={handleRemoveClick}
        >
            REMOVE
        </button>
    );
}

export default RemoveButton;