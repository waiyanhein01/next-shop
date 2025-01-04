import BreadCrumb from "@/components/BreadCrumb";
import Container from "@/components/Container";
import ProductsDetailsList from "@/components/ProductsDetailsList";
import React from "react";

const Page = async ({ params }) => {
  const { id } = await params;
  // console.log(id)
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await res.json();
  // console.log(data);
  return (
    <Container>
      <BreadCrumb
        currentPage="Products-Details"
        links={[{ title: "Products", path: "/products" }]}
      />
      <ProductsDetailsList product={data} />
    </Container>
  );
};

export default Page;
