function Footer() {
  return (
    <div className="relative bg-primary-400 flex flex-col items-center">
      <div className="items-center relative">
        <img src="src/assets/Images/bow_asset1.png" alt="bow asset" />
        <div className="absolute inset-0 top-24 flex justify-center items-center">
          <div className="bg-slate-100 w-[350px] h-[200px] flex flex-col justify-center items-center md:w-[400px] md:h-[250px] lg:w-[450px] lg:h-[300px] xl:w-[500px] xl:h-[350px]">
            <div className="flex flex-col items-center space-y-2">
              <img
                src="src/assets/Images/GIFT_COMPARE_LOGO.svg"
                alt="Footer Logo"
                className="w-20 m-4"
              />
              <div className="flex flex-col items-center space-y-1">
                <p className="font-fredoka text-[12px] text-primary-200">
                  Thank you for comparing your gifts with us!
                </p>
                <p className="font-montserrat text-[10px] text-primary-200">
                  Gift Compare Pty Ltd 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
