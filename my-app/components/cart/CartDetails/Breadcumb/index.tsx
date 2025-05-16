import React, { FC } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadcumbProps {
  className?: string;
  breadcrumbList: string [];
}


export const Breadcumb:FC<BreadcumbProps> = ({breadcrumbList}) => {
  return (
    <Breadcrumb className="pt-4">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        {breadcrumbList.map((item, index) => (
          <div key={index} className="flex items-center">
          <BreadcrumbSeparator />
            <BreadcrumbItem key={index}>
            <BreadcrumbLink href="#">{item}</BreadcrumbLink>
          </BreadcrumbItem>
          </div>
        ))}

        
        {/* <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink>Cart</BreadcrumbLink>
        </BreadcrumbItem> */}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
