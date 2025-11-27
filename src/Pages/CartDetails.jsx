import { useParams } from "react-router";

export default function CartDetails({ cart }) {
  const params = useParams();

  console.log(cart, "hh");
  return (
    <>
      <div className="w-full h-screen bg-cyan-700"></div>
    </>
  );
}
