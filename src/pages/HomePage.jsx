import GiftCard from "../components/GiftCard";
import useGift from "../hooks/use-gift";

// Import Home page components Trending, budget, Birthday, Anniversary
import TrendingSection from "../components/TrendingSection";
// import BudgetSection from "../components/BudgetSection";
import BirthdaySection from "../components/BirthdaySection";
import AnniversarySection from "../components/AnniversarySection";

export default function HomePage() {
  return (
    <div className="my-12 mx-8 md:m-12">
      <div className="flex flex-col space-y-20">
        <TrendingSection />
        {/* <BudgetSection /> */}
        <BirthdaySection />
        <AnniversarySection />
      </div>
    </div>
  );
}
