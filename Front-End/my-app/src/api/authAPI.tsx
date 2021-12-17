import { Iuser } from "../model/user";
import instance from "./instance";

export const signup = (user: Iuser) => {
  const url = "/signup";
  return instance.post(url, user);
};
export const signin = (user : Iuser) => {
  const url = "/signin";
  return instance.post(url, user);
};
export const signout = () => {
  const url = "/signout";
  return instance.post(url);
};
export const listUser = () => {
  const url = "/users";
  return instance.get(url);
};

