import BreadCrumb from "@/components/BreadCrumb";
import Container from "@/components/Container";
import ProductsList from "@/components/ProductsList";
import React from "react";

const Page = () => {
  return (
    <Container>
      <BreadCrumb currentPage="About" />
      <h1 className="text-[24px] leading-[32px] font-semibold text-[#18181B]">About</h1>
    </Container>
  );
};

export default Page;
