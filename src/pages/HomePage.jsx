import GiftCard from "../components/GiftCard";
import { allGifts } from "../data";
// import useGift from "../hooks/use-gift";

// Import Home page components Trending, budget, Birthday, Anniversary
import TrendingSection from "../components/TrendingSection";

export default function HomePage() {
  return (
    <div className="m-10">
      <div>
        <TrendingSection />
      </div>
    </div>
  );
}
