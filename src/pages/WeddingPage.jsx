import React from "react";
import useGifts from "../hooks/use-gifts";
import GiftCard from "../components/GiftCard";
import IsLoading from "../components/IsLoading";
import NotFoundMessage from "../components/NotFound";

function WeddingPage() {
  const { gifts, isLoading, error } = useGifts();
  // const [errorMessage, setErrorMessage] = useState(null);

  const WeddingGifts = gifts.filter((gift) =>
    gift.categories.includes(3)
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
      <div className="bg-[url('/assets/Images/pexels-pixabay-59948.jpg')] bg-cover bg-center flex justify-center items-center h-full">
        <div className="bg-primary-200 px-6 my-14 md:mx-40 md:px-10 lg:px-20">
          <h1 className="font-fredoka  text-slate-100 text-h1 text-center tracking-wider uppercase px-1">
            Wedding
          </h1>
        </div>
      </div>

      <div className="flex flex-wrap mx-6 md:mx-6 lg:mx-20 xl:mx-60">
        {WeddingGifts.map((giftData) => (
          <div key={giftData.id} className="w-full sm:w-1/2 md:w-1/3">
            <GiftCard giftData={giftData} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeddingPage;