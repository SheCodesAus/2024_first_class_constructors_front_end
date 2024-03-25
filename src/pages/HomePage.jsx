import GiftCard from "../components/GiftCard";
import { allGifts } from "../data";
// import useGift from "../hooks/use-gift";

export default function HomePage() {
  return (
    <div className="m-10">
      <div>
      <h1 className="font-bold text-center text-primary-300 font-fredoka text-h1">
        This is the home page.
      </h1>
      </div>
      <div className="flex flex-col justify-center">
      {allGifts.map((giftData, index) => (
        <GiftCard key={index} giftData={giftData} />
      ))}
      </div>
    </div>
  );
}
