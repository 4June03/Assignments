import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IProduct extends Document {
  productId: string;
  title: string;
  description?: string;
  price: string;
  compareAtPrice: string;
  imageUrl: string;
}

const productSchema: Schema<IProduct> = new Schema({
  productId: { type: String, required: true },
  price: { type: String, required: true },
  compareAtPrice: { type: String, required: true },
  description: { type: String },
  imageUrl: { type: String, required: true },
  title: { type: String, required: true },
  
});

// Tránh tạo lại model khi hot-reload
const Product: Model<IProduct> = mongoose.models.Product || mongoose.model<IProduct>('Product', productSchema);
export default Product;