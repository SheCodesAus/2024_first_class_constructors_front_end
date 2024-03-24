import GiftCard from "../components/GiftCard";
import { allGifts } from "../data";
import useGift from "../hooks/use-gift";

export default function HomePage() {
  return (
    <div className="">
      <h1 className="text-3xl font-bold text-center text-primary-300 font-fredoka text-h1">
        This is the home page.
      </h1>
      {allGifts.map((giftData, index) => (
        <GiftCard key={index} giftData={giftData} />
      ))}
    </div>
  );
}
