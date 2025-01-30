"use client";
import Image from "next/image";
import React, { useState } from "react";

const Contact = () => {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      title: "Chat with us",
      description: "Connect with us for personalized support.",
      contact: "support@trendflow.com",
    },
    {
      id: 2,
      title: "Call us",
      description: "Need Help? Call Us Now!",
      contact: "+95 945 6789 120",
    },
    {
      id: 3,
      title: "Visit us",
      description: "We're Waiting to Welcome You!",
      contact:
        "789 Prestige Towers, Suite 405, Downtown District, Central City, 12345",
    },
  ]);
  return (
    <div className="">
      <div className="">
        <h1 className="w-auto h-[36px] text-[28px] leading-[32px] font-bold text-[#18181B] uppercase">
          Get in Touch with Us
        </h1>
        <p className="text-[16px] w-[570px] h-auto leading-[22px] mt-3 font-normal text-[#71717A]">
          Have a question or need help? We’re here for you!
        </p>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 my-10">
        <div className="border border-[#E4E4E7] rounded-[8px] col-span-2 md:col-span-1 p-5">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className=" first:border-b border-b last:border-none border-[#E4E4E7] p-3"
            >
              <h2 className="w-auto h-auto text-[16px] leading-[24px] font-bold text-[#18181B]">
                {contact.title}
              </h2>
              <p className="text-[14px] w-auto h-auto leading-[22px] font-normal text-[#71717A]">
                {contact.description}
              </p>

              <p className="text-[14px] w-[355px] h-auto leading-[22px] mt-3 font-normal text-[#006FEE]">
                {contact.contact}
              </p>
            </div>
          ))}
        </div>

        <div className="col-span-2 md:col-span-1">
          <div className="">
            <input
              type="text"
              className="w-full h-[45px] mb-5 rounded-[8px] outline-none border border-[#E4E4E7] p-3"
              placeholder="Name"
            />
            <input
              type="number"
              className="w-full h-[45px] mb-5 rounded-[8px] outline-none border border-[#E4E4E7] p-3"
              placeholder="Phone Number"
            />
            <textarea
              name=""
              id=""
              className="w-full h-[200px] mb-5 rounded-[8px] outline-none border border-[#E4E4E7] p-3"
              placeholder="Message"
            />

            <button className="w-full h-[45px] text-[14px] rounded-[8px] bg-[#18181B] text-white">
              Send Message
            </button>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <Image src="/MapMaker.svg" alt="contact" width={1920} height={1080} />
      </div>
    </div>
  );
};

export default Contact;
