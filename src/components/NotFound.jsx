import React from 'react';

function NotFoundMessage() {
  return(
    <div className="bg-cover bg-center flex justify-center items-center h-full">
      <div className="bg-primary-500 px-6 my-14 md:mx-40 md:px-10 lg:px-20">
        <h1 className="font-fredoka text-slate-100 text-h1 text-center tracking-wider uppercase px-1">
          ERROR Could not find the perfect gift ideas
        </h1>
      </div>
    </div>
  );
}

export default NotFoundMessage;
