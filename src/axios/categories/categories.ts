import { Categories } from "@/types/axiosTypes";
import axios from "axios";

type GetCategories = {
  data: Categories[];
};

export const getAllCategories = async () => {
  try {
    const res = await axios.get<GetCategories>("/api/categories");
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCategoryByHandle = async (categoryHandle: string) => {
  try {
    const { data } = await axios.get<Categories>(`/api/categories/${categoryHandle}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
