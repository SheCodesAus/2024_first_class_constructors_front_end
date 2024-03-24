import { Link } from "react-router-dom";

function GiftCard(props) {
  const { giftData } = props;

  return (
    <div className="w-full sm:w-1/2 p-4">
      <div to="/GiftDetailPage" className="block"> 
      {/*  <div to="/GiftDetailPage" className="block"> will be changed to link */}
        <div className=" overflow-hidden">
          <img src={giftData.img} alt={giftData.name} className="w-full border border-black " />
          <div className="p-0 mt-2">
            <h3 className="font-fredoka text-h3">{giftData.name}</h3>
            <h4 className="mt-2 font-montserrat">{giftData.price}</h4>
          </div>
        </div>
      </div>
      <button className="border border-primary-200 text-primary-200  mt-4 w-full" type="button">
        ADD TO COMPARE LIST
      </button>
    </div>
  );
}

export default GiftCard;
