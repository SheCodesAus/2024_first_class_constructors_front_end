function Footer() {
  return (
    <div className="bg-primary-400 mt-6 relative">
      <div className="flex flex-auto items-center relative">
        <img
          src="src/assets/Images/bow_asset1.png"
          alt="bow asset"
          className=""
        />
        {/* This needs to be fixed responsivness */}
        <div className="absolute top-24 left-12 right-12 bottom-4 sm:top-48 sm:left-40 mt-0 sm:right-40 sm:bottom-28 md:top-60 md:left-18 md:right-18 md:bottom-26 lg:top-72 lg:left-56 lg:right-56 lg:bottom-28 xl:top-1/2 xl:left-72 xl:right-72 xl:bottom-32 flex flex-col justify-center items-center bg-slate-100 gap-2">
          <img
            src="src/assets/Images/GIFT_COMPARE_LOGO.svg"
            alt="Footer Logo"
            className="w-48 h-48 pb-0 bg-slate-100 px-14 py-0"
          />
          <p className="font-fredoka text-[12px] text-primary-200 ">Thank you for comparing your gifts with us!</p>
          <p className="font-montserrat text-[10px] text-primary-200 ">Gift Compare Pty Ltd 2024</p>
        </div>
      </div>
    </div>
  );
}
export default Footer;