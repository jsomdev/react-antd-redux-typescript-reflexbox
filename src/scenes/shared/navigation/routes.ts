import * as _ from "lodash";

export const getActiveRoute = (): "home" | "contact" | "error" => {
  const pathName: string = window.location.pathname;

  if (pathName === "" || pathName.includes("home")) {
    return "home";
  }
  if (pathName.includes("contact")) {
    return "contact";
  }
  return "error";
};
