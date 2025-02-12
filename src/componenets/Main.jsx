import { MdArrowOutward } from "react-icons/md";

const Main = () => {
  return (
    <div className="p-4 md:p-5 lg:m-7">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row md:justify-between gap-8">
        <div className="text-center md:text-left">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl max-w-xl leading-normal">
            Navigating the digital landscape for Success
          </h1>
          <p className="text-lg md:text-xl max-w-xl italic mt-6 md:mt-10">
            Our digital marketing agency helps businesses grow and succeeds
            online through a range of services including SEO, PPC, social media
            marketing and Content creation
          </p>
          <button className="bg-[#030303d9] w-full md:w-[200px] h-[40px] rounded-md text-white text-base tracking-normal mt-6 md:mt-8">
            Book a Consultation
          </button>
        </div>
        <div className="flex justify-center">
          <img
            className="w-full max-w-lg md:w-[500px]"
            src="assets/Illustration.png"
            alt="the illustration"
          />
        </div>
      </div>

      {/* Company Logos */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-10">
        {[...Array(6)].map((_, i) => (
          <img
            key={i}
            src={`assets/Company logo${i === 0 ? "" : ` (${i})`}.png`}
            alt={`company logo ${i + 1}`}
            className="w-full object-contain"
          />
        ))}
      </div>

      {/* Services Header */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-12 mt-10 items-start">
        <h2 className="bg-[#51e65bd9] text-xl md:text-2xl rounded-lg p-2 text-center font-bold w-full md:w-[100px]">
          Services
        </h2>
        <p className="italic max-w-xl">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>

      {/* Services Grid */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {/* Service Cards */}
        {[
          {
            title: "Services engine optimization",
            bgColor: "bg-[#c6cdc6]",
            titleBg: "bg-[#51e65bd9]",
            image: "/assets/Illustration (1).png",
          },
          {
            title: "pay-per-click advertising",
            bgColor: "bg-[#51e65bd9]",
            titleBg: "bg-white",
            image: "/assets/Illustration (2).png",
          },
          {
            title: "Social media marketing",
            bgColor: "bg-[#101010]",
            titleBg: "bg-white",
            image: "/assets/Illustration (3).png",
            textColor: "text-white",
          },
          {
            title: "email marketing",
            bgColor: "bg-[#c6cdc6]",
            titleBg: "bg-[#51e65bd9]",
            image:
              "/assets/tokyo-sending-messages-from-one-place-to-another 1.png",
          },
          {
            title: "content creation",
            bgColor: "bg-[#51e65bd9]",
            titleBg: "bg-white",
            image: "/assets/Illustration (4).png",
          },
          {
            title: "Analytics and Tracking",
            bgColor: "bg-black",
            titleBg: "bg-[#51e65bd9]",
            image: "/assets/Illustration (5).png",
            textColor: "text-white",
          },
        ].map((service, index) => (
          <div
            key={index}
            className={`p-4 rounded-2xl ${service.bgColor} flex flex-col md:flex-row gap-4`}
          >
            <div className="flex-1">
              <p
                className={`italic font-semibold text-lg p-2 text-center ${service.titleBg} max-w-[170px]`}
              >
                {service.title}
              </p>
              <div
                className={`flex items-center gap-2 mt-8 md:mt-48 ${
                  service.textColor || ""
                }`}
              >
                <div
                  className={`${service.titleBg} w-4 h-4 rounded-full flex items-center justify-center`}
                >
                  <MdArrowOutward />
                </div>
                <p>Learn more</p>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <img
                className="h-[150px] md:h-[200px] object-contain"
                src={service.image}
                alt={service.title}
              />
            </div>
          </div>
        ))}
      </div>

      {/* CTA Sections */}
      <div className="mt-20 bg-[#cfcecef7] rounded-xl p-6">
        <div className="flex flex-col md:flex-row gap-8 md:gap-20 items-center">
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold">
              Lets make things happen
            </h3>
            <p className="mt-4">
              Contact us today to learn more about how our digital marketing can
              help your business grow and succeed online
            </p>
            <button className="rounded-xl bg-black text-white p-2 mt-4 font-serif text-sm w-full md:w-auto">
              Get your free proposal
            </button>
          </div>
          <div className="flex justify-center">
            <img
              className="h-[200px] w-full max-w-[300px] object-contain"
              src="/assets/Illustration (6).png"
              alt="CTA illustration"
            />
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="mt-20">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
          <p className="text-2xl md:text-3xl bg-[#51e65bd9] rounded-lg p-2">
            Case studies
          </p>
          <p className="font-bold text-sm md:text-base">
            Explore real life examples of our Proven digital marketing Success
            through our Case studies
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="mt-10 bg-black text-white rounded-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-20">
            {[
              "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
              "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
              "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
            ].map((study, index) => (
              <div key={index}>
                <h3 className="text-lg font-medium">{study}</h3>
                <div className="flex items-center gap-2 mt-4">
                  <div className="bg-[#51e65bd9] w-4 h-4 rounded-full flex items-center justify-center">
                    <MdArrowOutward />
                  </div>
                  <p className="text-[#51e65bd9]">Learn more</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
