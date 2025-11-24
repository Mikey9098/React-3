import { useParams } from "react-router";

export const ProductDetailPage = ({ products }) => {
  const params = useParams();

  const productDetail = products.find(
    (product) => `${product.id}` === `${params.id}`
  );
  console.log(productDetail);
  return <div>detail page</div>;
};
