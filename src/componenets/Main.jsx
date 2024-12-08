import { MdArrowOutward } from "react-icons/md";

const Main = () => {
  return (
    <div className=" p-5 m-5">
      <div className="flex justify-between">
        <div>
          <h1 className="font-bold text-5xl w-[400px] leading-normal">
            {" "}
            Naviating the digital landscape for Success
          </h1>
          <p className="text-xl w-[500px] italic mt-10">
            {" "}
            Our digital marketing agency helps businessess grow and succeeds
            online throuh a range of services including SEO,PPC,social media
            marketting and Content creation{" "}
          </p>
          <button className="bg-[#030303d9] w-[200px] h-[40px] rounded-md text-white text-base tracking-normal justify-center mt-8">
            {" "}
            Book a Consultation
          </button>
        </div>
        <div>
          <img
            className="w-[500px] mr-1"
            src="assets/Illustration.png"
            alt="the illustration "
          />
        </div>
      </div>

      <div className="flex gap-16 mt-10 ">
        <img src="/assets/Company logo (5).png" alt="jku" />
        <img src="/assets/Company logo.png" alt="companylo" />
        <img src="/assets/Company logo (1).png" alt="clo" />
        <img src="/assets/Company logo (2).png" alt="ccc" />
        <img src="/src/assets/Company logo (3).png" alt="cvc" />
        <img src="/src/assets/Company logo (4).png" alt="vkj" />
      </div>
      <div className=" flex gap-12 mt-10">
        <h2 className="bg-[#51e65bd9] text-2xl rounded-lg w-[100px] h-[40px] text-center font-bold">
          Services
        </h2>
        <p className=" italic w-[500px]">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>
      <div className="mt-10">
        <div className="flex gap-10 ">
          <div className="p-2 flex bg-[#c6cdc6] rounded-2xl w-[500px] ">
            <div className="">
              {" "}
              <p className="italics font-semibold text-lg w-[170px] text-center bg-[#51e65bd9]">
                {" "}
                Services engine optimization{" "}
              </p>
              <div className="flex mt-48 ">
                <div className=" bg-[#51e65bd9] w-4 h-4 rounded-full text-center">
                  {" "}
                  <MdArrowOutward />
                </div>
                <p>Learn more </p>
              </div>
            </div>

            <img
              className="h-[200px] gap-4 mt-7 ml-11 "
              src="/src/assets/Illustration (1).png"
              alt="ond"
            />
          </div>
          <div className="p-2 flex bg-[#51e65bd9] rounded-2xl w-[500px] ">
            <div className="">
              {" "}
              <p className="italics font-semibold text-lg w-[170px] text-center bg-[white] ">
                {" "}
                pay-per-click advertising{" "}
              </p>
              <div className="flex mt-48 ">
                <div className=" bg-[white] w-4 h-4 rounded-full text-center">
                  {" "}
                  <MdArrowOutward />
                </div>
                <p>Learn more </p>
              </div>
            </div>

            <img
              className="h-[150px] gap-8 mt-16 ml-20"
              src="/src/assets/Illustration (2).png"
              alt="ond"
            />
          </div>
        </div>
        <div className="flex gap-10 mt-10 ">
          <div className="p-2 flex bg-[#101010] rounded-2xl w-[500px] ">
            <div className="">
              {" "}
              <p className="italics font-semibold text-lg w-[170px]  mt-5 text-center bg-[white]">
                {" "}
                Social media marketting{" "}
              </p>
              <div className="flex mt-48 ">
                <div className=" bg-[white] w-4 h-4 rounded-full text-center">
                  {" "}
                  <MdArrowOutward />
                </div>
                <p className="text-white">Learn more </p>
              </div>
            </div>

            <img
              className="h-[200px] gap-4 mt-7 ml-14 "
              src="/src/assets/Illustration (3).png"
              alt="ond"
            />
          </div>
          <div className="p-2 flex bg-[#c6cdc6] rounded-2xl w-[500px] ">
            <div className="">
              {" "}
              <p className="italics font-semibold text-lg w-[170px]  mt-5 text-center bg-[#51e65bd9] ">
                {" "}
                email <br />
                marketting{" "}
              </p>
              <div className="flex mt-48 ">
                <div className=" bg-[white] w-4 h-4 rounded-full text-center">
                  {" "}
                  <MdArrowOutward />
                </div>
                <p>Learn more </p>
              </div>
            </div>

            <img
              className="h-[150px] gap-8 mt-16 ml-20"
              src="/src/assets/tokyo-sending-messages-from-one-place-to-another 1.png"
              alt="ond"
            />
          </div>
        </div>
        <div className="flex gap-10 mt-10 ">
          <div className="p-2 flex  bg-[#51e65bd9] rounded-2xl w-[500px] ">
            <div className="">
              {" "}
              <p className="italics font-semibold text-lg w-[170px] mt-5 text-center bg-[white]">
                {" "}
                content <br /> creation{" "}
              </p>
              <div className="flex mt-48 ">
                <div className=" bg-white w-4 h-4 rounded-full text-center">
                  {" "}
                  <MdArrowOutward />
                </div>
                <p>Learn more </p>
              </div>
            </div>

            <img
              className="h-[200px] gap-4 mt-20 ml-20 "
              src="/src/assets/Illustration (4).png"
              alt="ond"
            />
          </div>
          <div className="p-2 flex bg-[black] rounded-2xl w-[500px] ">
            <div className="">
              {" "}
              <p className="italics font-semibold text-lg w-[170px] text-center bg-[#51e65bd9] ">
                {" "}
                Analytics and Tracking{" "}
              </p>
              <div className="flex mt-48 ">
                <div className=" bg-[white] w-4 h-4 rounded-full text-center">
                  {" "}
                  <MdArrowOutward />
                </div>
                <p className="text-white">Learn more </p>
              </div>
            </div>

            <img
              className="h-[150px] gap-8 mt-16 ml-20"
              src="/src/assets/Illustration (5).png"
              alt="ond"
            />
          </div>
        </div>
      </div>

      <div className="mt-20 text-white bg-black rounded-xl w-[1000px]">
        <div className="flex gap-20 m-4 p-4 ml-16">
          <div className="">
            <h3 className="w-[220px] text-start mt-5">
              For a local restaurant, we implemented a targeted PPC campaign
              that resulted in a 50% increase in website traffic and a 25%
              increase in sales.
            </h3>
            <div className="flex mt-10">
              <div className=" bg-[#51e65bd9] w-4 h-4 rounded-full text-center">
                {" "}
                <MdArrowOutward />
              </div>
              <p className="text-[#51e65bd9]">Learn more </p>
            </div>
          </div>

          <vr />

          <div className="vertical">
            <div>
              <h3 className="w-[220px] text-start mt-5">
                For a B2B software company, we developed an SEO strategy that
                resulted in a first page ranking for key keywords and a 200%
                increase in organic traffic.
              </h3>
              <div className="flex mt-5 ">
                <div className=" bg-[#51e65bd9] w-4 h-4 rounded-full text-center">
                  {" "}
                  <MdArrowOutward />
                </div>
                <p className="text-[#51e65bd9]">Learn more </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="w-[220px] text-start mt-5">
              For a national retail chain, we created a social media marketing
              campaign that increased followers by 25% and generated a 20%
              increase in online sales.
            </h3>
            <div className="flex mt-5 ">
              <div className=" bg-[#51e65bd9] w-4 h-4 rounded-full text-center">
                {" "}
                <MdArrowOutward />
              </div>
              <p className="text-[#51e65bd9]">Learn more </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
