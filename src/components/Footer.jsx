function Footer() {
  return (
    <div className="bg-primary-400 mt-6 relative">
      <div className="flex flex-auto items-center relative">
        <img
          src="/assets/Images/bow_asset1.png"
          alt="bow asset"
          className=""
        />
        {/* This needs to be fixed responsivness */}
        <div className="absolute top-24 left-24 right-24 bottom-12 lg:top-60 lg:left-60 lg:right-60 lg:bottom-40 flex flex-col justify-center items-center bg-slate-100 gap-2 xl:my-20 xl:mx-60">
          <img
            src="/assets/Images/GIFT_COMPARE_LOGO.svg"
            alt="Footer Logo"
            className="w-40 h-auto bg-slate-100 px-10 py-4"
          />
          <p className="font-fredoka text-[14px] text-primary-200">Thank you for comparing your gifts with us!</p>
          <p className="font-montserrat text-[10px] text-primary-200 mb-2">Gift Compare Pty Ltd 2024</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;