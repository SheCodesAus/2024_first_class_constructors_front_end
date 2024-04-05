import React from "react";
import useGifts from "../hooks/use-gifts";
import IsLoading from "../components/IsLoading";
import GiftCard from "../components/GiftCard";
import NotFoundMessage from "../components/NotFound";

function AnniversaryPage() {
  const { gifts, isLoading, error } = useGifts();
  // const [errorMessage, setErrorMessage] = useState(null);

  const AnniversaryGifts = gifts.filter((gift) =>
    gift.categories.includes(2)
  );

  if (isLoading) {
    return <IsLoading />
  }

  if (error) {
    return (<div> <NotFoundMessage />
      <p>{error.message}</p> </div>)
  }

  return (
    <div className="flex flex-col justify-center align-center space-y-8 m-12">
      <div className="bg-[url('/assets/Images/iStock-1825131978L.jpg')] bg-cover bg-center flex justify-center items-center h-full">
        <div className="bg-primary-600 px-6 my-14 md:mx-40 md:px-10 lg:px-20">
        <h1 className="font-fredoka text-primary-200 text-h1 text-center tracking-wider uppercase px-1">
          Anniversary
        </h1>
        </div>
      </div>

      <div className="flex flex-wrap md:mx-6 lg:mx-20">
        {AnniversaryGifts.map((giftData) => (
          <div key={giftData.id} className="w-full sm:w-1/2 md:w-1/3">
            <GiftCard giftData={giftData} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnniversaryPage;