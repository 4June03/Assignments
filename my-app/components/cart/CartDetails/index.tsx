import { Breadcumb } from "./Breadcumb";
import { CartContainer } from "./CartContainer";
import { CartHeader } from "./CartHeader";

const breadcrumbList = ["Giỏ hàng", "Chi tiết giỏ hàng"];

export const CartDetails = () => {
  return (
    <div className="container mx-auto w-full flex flex-col gap-4">
      <Breadcumb breadcrumbList={breadcrumbList}/>
      <CartHeader />
      <CartContainer />
    </div>
  );
};
