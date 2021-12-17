import { ICategory } from "../model/category";
import instance from "./instance";

export const listCategory = () => {
  const url = "/categories";
  return instance.get(url);
};
export const createCategory = (category: ICategory) => {
    const url = "/category";
    return instance.post(url, category);
  };
  export const removeCategory = (slug: any) => {
    const url = "/category/" + slug;
    return instance.delete(url);
  };
  export const updateCategory = (category: ICategory) => {
    const url = "/category/" + category.slug;
    return instance.patch(url, category);
  };
  export const readCategory = (slug: any) => {
    const url = "/category/" + slug;
    return instance.get(url);
  };