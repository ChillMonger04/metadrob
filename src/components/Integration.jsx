const Integration = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-gray-100 rounded-3xl">
      <div className="flex items-center justify-center gap-[15vw] w-full max-w-[80rem] px-6">
        {/* Rotating Circle Container */}
        <div className="relative w-[24rem] h-[24rem] flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Outer Larger Circle */}
            <div className="absolute w-full h-full border-4 border-gray-300 rounded-full"></div>

            {/* Rotating Smaller Circles */}
            <div className="absolute rotating-circle-container">
              <div
                className="absolute w-24 h-24 flex items-center justify-center rounded-full"
                style={{
                  transform: "rotate(0deg) translateX(200px) rotate(0deg)",
                }}
              >
                <img
                  className="w-full h-full object-contain"
                  src="https://www.pngall.com/wp-content/uploads/13/Shopify-Logo-PNG.png"
                  alt="Shopify"
                />
              </div>
              <div
                className="absolute w-24 h-24 flex items-center justify-center rounded-full"
                style={{
                  transform: "rotate(40deg) translateX(200px) rotate(-40deg)",
                }}
              >
                <img
                  className="w-full h-full object-cover"
                  src="src/assets/woo.png"
                  alt="WooCommerce"
                />
              </div>
              <div
                className="absolute w-24 h-24 flex items-center justify-center rounded-full"
                style={{
                  transform: "rotate(80deg) translateX(200px) rotate(-80deg)",
                }}
              >
                <img
                  className="w-full h-full object-contain"
                  src="src/assets/adobe.png"
                  alt="Adobe"
                />
              </div>
              <div
                className="absolute w-24 h-24 flex items-center justify-center rounded-full"
                style={{
                  transform: "rotate(120deg) translateX(200px) rotate(-120deg)",
                }}
              >
                <img
                  className="w-full h-full object-contain"
                  src="src/assets/bigcommerce.png"
                  alt="BigCommerce"
                />
              </div>
              <div
                className="absolute w-24 h-24 flex items-center justify-center rounded-full"
                style={{
                  transform: "rotate(160deg) translateX(200px) rotate(-160deg)",
                }}
              >
                <img
                  className="w-full h-full object-contain"
                  src="src/assets/squarespace.png"
                  alt="SquareSpace"
                />
              </div>
              <div
                className="absolute w-24 h-24 flex items-center justify-center rounded-full"
                style={{
                  transform: "rotate(200deg) translateX(200px) rotate(-200deg)",
                }}
              >
                <img
                  className="w-full h-full object-contain"
                  src="src/assets/wix.png"
                  alt="Wix"
                />
              </div>
              <div
                className="absolute w-24 h-24 flex items-center justify-center rounded-full"
                style={{
                  transform: "rotate(240deg) translateX(200px) rotate(-240deg)",
                }}
              >
                <img
                  className="w-full h-full object-contain"
                  src="src/assets/salesforce.png"
                  alt="Salesforce"
                />
              </div>
              <div
                className="absolute w-24 h-24 flex items-center justify-center rounded-full"
                style={{
                  transform: "rotate(280deg) translateX(200px) rotate(-280deg)",
                }}
              >
                <img
                  className="w-full h-full object-contain"
                  src="src/assets/magento.png"
                  alt="Magento"
                />
              </div>
              <div
                className="absolute w-24 h-24 flex items-center justify-center rounded-full"
                style={{
                  transform: "rotate(320deg) translateX(200px) rotate(-320deg)",
                }}
              >
                <img
                  className="w-full h-full object-contain"
                  src="src/assets/opencart.png"
                  alt="OpenCart"
                />
              </div>
            </div>

            {/* Center Text */}
            <div className="absolute font-['FoundersGrotesk'] text-gray-800 text-4xl font-bold uppercase">
              Effortless E-Commerce
            </div>
          </div>
        </div>

        {/* Additional Text Section */}
        <div className="text-gray-600 text-lg px-6 flex flex-col items-center justify-center w-[40%]">
          <p className="text-xl font-bold font-['FoundersGrotesk'] text-[3vw] mb-7 text-white px-4 py-1 tracking-wide bg-gray-700 rounded-md w-[14vw] text-center">
            INTEGRATE WITH EASE
          </p>
          <p className="text-4xl font-semibold mb-2">E-Commerce Integration</p>
          <p className="text-sm font-light leading-relaxed opacity-80 text-center">
            Transform your e-commerce store with a stunning 3D virtual retail
            experience. Imagine exploring your products in a vibrant, immersive
            3D environment, where every item is showcased in breathtaking
            detail. Customers can now interact with products as if they were
            physically in the store, enhancing their shopping journey. From
            browsing to checkout, enjoy a seamless integration of virtual and
            online shopping, making each purchase feel like an exciting
            adventure.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Integration;
