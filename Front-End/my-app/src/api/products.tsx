
import { IProduct } from "../model/product";
import instance from "./instance";

export const list = () => {
  const url = "/products";
  return instance.get(url);
};
export const create = (product: IProduct) => {
  const url = "/product";
  return instance.post(url, product);
};
export const remove = (id: number) => {
  const url = "/product/" + id;
  return instance.delete(url);
};
export const updateProduct = (product: IProduct) => {
  const url = "/product/" + product.slug;
  return instance.patch(url, product);
};
export const readProduct = (slug: any) => {
  
  
  const url = "/product/" + slug;
  return instance.get(url);
};
export const listCategoryProduct = (slug: any) => {
  const url = `/products?category=${slug}`;
  return instance.get(url);
};
export const Search = (name: any) => {
  const url = `/product?name_like=${name}`
  return instance.get(url)
}
export const SearchRange = (gte : number,lte : number) => {
  const url = `/product?price_gte=${gte}&price_lte=${lte}`
  return instance.get(url)
}

