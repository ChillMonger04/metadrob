import FooterCard from "./FooterCard";

const FooterCards = () => {
  const content = [
    {
      header: "Get In Touch",
      title: "Our Presence",
    },
    { header: "Start a Project", title: "Let's get to it, together." },
  ];

  return (
    <div className="w-full px-4 rounded-3xl">
      <div className="max-w-screen-xl mx-auto py-20 flex gap-2">
        <FooterCard
          width={"basis-1/3"}
          start={false}
          para={true}
          hover={false}
          info={true}
          header={content[0].header}
          title={content[0].title}
          title2={true}
          title3={true}
        />
        <FooterCard
          width={"basis-2/3"}
          start={true}
          para={false}
          hover={true}
          info={false}
          header={content[1].header}
          title={content[1].title}
          title2={false}
          title3={false}
        />
      </div>
    </div>
  );
};

export default FooterCards;
