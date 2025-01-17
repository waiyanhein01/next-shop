import BreadCrumb from "@/components/BreadCrumb";
import Container from "@/components/Container";
import ProductsList from "@/components/feature/products/components/ProductsList";
import React from "react";

const Page = () => {
  return (
    <Container>
      <BreadCrumb currentPage="Products" />
      <ProductsList />
    </Container>
  );
};

export default Page;
