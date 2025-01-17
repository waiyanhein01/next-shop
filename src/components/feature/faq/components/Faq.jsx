"use client";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useState } from "react";

const Faq = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "How do I track my order?",
      description:
        "Once your order is shipped, you’ll receive an email with a tracking number to follow your package.",
    },
    {
      id: 2,
      title: "Can I return or exchange an item?",
      description:
        "Yes! We offer easy returns and exchanges within 30 days of your purchase. Simply visit our returns page for more details.",
    },
    {
      id: 3,
      title: "How do I know my size?",
      description:
        "Check out our size guide for detailed measurements. If you’re still unsure, our customer service team is happy to help!",
    },
    {
      id: 4,
      title: "How can I contact customer support?",
      description:
        "You can reach us via email at support@trendflow.com or by using the chat feature on our website. We’re here to help!",
    },
    {
      id: 5,
      title: "Can I cancel my order?",
      description:
        "Orders are processed quickly, but if you need to cancel, contact us as soon as possible, and we’ll try to help before it ships.",
    },
    {
      id: 6,
      title: "Do you offer international shipping?",
      description:
        "Currently, we only ship within the country, but we're working on expanding to more locations soon!",
    },
  ]);
  return (
    <div className="">
      <h1 className="w-auto h-[36px] text-[28px] leading-[32px] font-bold text-[#18181B] uppercase">
        FAQ
      </h1>
      <p className="text-[16px] w-[570px] h-auto leading-[22px] mt-3 font-normal text-[#71717A]">
        Got questions? We’ve got answers. Here’s everything you need to know
        about shopping with us.
      </p>

      <div className=" grid grid-cols-2 gap-5 my-10">
        {cards.map((card) => (
          <Card key={card.id} className="w-auto col-span-1">
            <CardHeader>
              <CardTitle className="text-[16px] leading-[22px] text-[#18181B] font-semibold">
                {card.title}
              </CardTitle>
              <CardDescription className="text-[14px] leading-[20px] text-[#71717A] font-normal">
                {card.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Faq;
