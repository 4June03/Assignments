import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import React, { FC } from "react";

interface IProductImage {
  imageUrl: string;
  alt: string;
}

export const ProductImage:FC<IProductImage> = ({imageUrl, alt}) => {
  return (
    <Card className="overflow-hidden border-0 rounded-lg shadow-sm bg-white py-0">
      <CardContent className="p-0">
        <div className="relative aspect-square w-full overflow-hidden rounded-md">
          <Image
            src={
              imageUrl
            }
            alt={alt}
            fill={true}
            // sizes="(max-width: 768px) 100vw, 50vw"
            priority
            className="object-cover"
          />
        </div>
      </CardContent>
    </Card>
  );
};
