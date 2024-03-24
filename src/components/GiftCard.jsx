import { Link } from "react-router-dom";
import Button from "./button";

function GiftCard(props) {
  const { giftData } = props;

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
      <Link to="/GiftDetailPage" className="block">
        <div className="relative overflow-hidden bg-white border border-black" style={{ paddingBottom: '100%' }}> 
          <img src={giftData.img} alt={giftData.name} className="absolute inset-0 object-cover w-full h-full" /> 
        </div>
        <div className="mt-2">
          <h3 className="font-montserrat text-h3 tracking-wider ">{giftData.name}</h3>
          <h3 className="mt-2 font-montserrat text-h3 font-bold tracking-wider">{giftData.price}</h3>
        </div>
      </Link>
      
      <Button text="ADD TO COMPARE LIST" link="/compare" />
    </div>
  );
}

export default GiftCard;
