import VConsole from "vconsole";

if (process.env.NODE_ENV === "test") {
  new VConsole();
}
