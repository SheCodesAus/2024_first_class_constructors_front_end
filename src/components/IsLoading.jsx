import React from 'react';

function IsLoading() {
  return(
    <div className="bg-cover bg-center flex justify-center items-center h-full">
      <div className="bg-primary-600/15 shadow rounded-md p-6 px-10 mx-16 my-14 md:mx-40 md:px-10 lg:px-20 space-x-1">
        <h1 className="font-fredoka text-primary-500 text-h2 font-semibold text-center tracking-wider px-1">
          One Sec...
        </h1>
        <h2 className="font-montserrat text-primary-500 text-center tracking-wider px-1">
        We are finding you the perfect gift ideas!
        </h2>
      </div>
    </div>
  );
}

export default IsLoading;
