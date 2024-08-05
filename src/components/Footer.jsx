const Footer = () => {
  return (
    <div className="w-full px-4">
      <div className="max-w-screen-xl mx-auto py-10 flex gap-32">
        <div className="basis-1/2">
          <h1 className="text-[11.5rem] font-semibold leading-none tracking-tight">
            Metadrob.
          </h1>
        </div>

        <div className="basis-1/2 flex gap-4">
          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-500">Socials</h4>
            {["Instagram", "Twitter", "LinkedIn"].map((item, index) => (
              <a
                key={index}
                href={`#${item}`}
                className="block mt-2 text-zinc-600"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="basis-1/3">
            <h4 className="mb-10 text-zinc-500">Sitemaps</h4>
            {["Home", "Solutions", "Careers", "Contact"].map((item, index) => (
              <a
                key={index}
                href={`#${item}`}
                className="block mt-2 text-zinc-300"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="basis-1/2 flex flex-col items-end">
            <p className="text-right">
              Metadrob is your go-to partner for virtual retail, providing tools
              to effortlessly build, customize, and launch your virtual store.
            </p>
            <img
              src="public\Images\metadrob-logo.png"
              alt=""
              className="mt-5"
            />
          </div>
        </div>
      </div>

      <div className="mx-4 mt-3 mb-2 border-t-[0.1vw] border-zinc-500">
        <div className="flex items-center justify-between pt-3">
          <p>
            Copyright 2024 Metadrob | Powered by Tech Mangal Private Limited.
          </p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Shipping And Delivery</p>
          <p>Cancelation and Refund</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
