import React, { useState } from "react";
import DisplayMount from "./components/displayMount";
import ShoppingHeader from "./components/header";

export default function shoppingHeader() {
  const [searchText, setSearchText] = useState<string>("");
  const [searchResults, setSearchResults] = useState<any>([]);
  const submitSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const results = [
      {
        type: "person",
        id: "abfazODg",
        name: "Redrigo",
        username: "redrigo64"
      },
      {
        type: "person",
        id: "abfazODg",
        name: "Redrigo",
        username: "redrigo64"
      },
      {
        type: "person",
        id: "abfazODg",
        name: "Redrigo",
        username: "redrigo64"
      },
      { type: "item", id: "abfazODg", result: "red" },
      { type: "item", id: "fbfazODs", result: "redburn" },
      { type: "item", id: "vbfazODe", result: "red flame" },
      { type: "item", id: "xbfazODn", result: "red flame roses" },
      { type: "item", id: "tbfazODw", result: "my red face" }
    ];
    setSearchResults(results);
    console.log("Search Submited", searchText);
  };
  const clickBasket = () => console.log("Basket clicked");
  const clickLogo = () => console.log("Logo clicked");
  const clickSignIn = (e: string) => console.log("SignIn clicked on", e);
  const clickNavigation = () => console.log("Navigation clicked");
  const selectedResult = (e: string) => console.log("Selected result:", e);
  const imageUrlPrefix =
    "https://pbs.twimg.com/profile_images/741290730170122240/";
  const imageUrlPostfix = "_400x400.jpg";

  return (
    <main>
      <DisplayMount
        title="Shopping Header"
        description="Ideally included in the layout file, this header is the heart of the applications navigation. Demo: search for the word 'red'"
        github="https://github.com/yohuman/lollipop/tree/main/pages/components/header"
        markup={`<Header
          searchText={searchText}
          setSearchText={setSearchText}
          submitSearch={submitSearch}
        />`}
        params={[
          {
            name: "maxWidth",
            type: "number",
            description:
              "The maximum width the component will take up before being centered on the screen",
            default: "1280",
            required: false
          },
          {
            name: "breakPoint",
            type: "number",
            description:
              "The width of the screen when the component switches from mobile to desktop layout",
            default: "900",
            required: false
          },
          {
            name: "logoSrc",
            type: "string",
            description: "The path to the logo file",
            default: "/logo.svg",
            required: false
          },
          {
            name: "searchSrc",
            type: "string",
            description: "The path to the search icon file",
            default: "/search.svg",
            required: false
          },
          {
            name: "navSrc",
            type: "string",
            description: "The path to the mobile navigation icon file",
            default: "/nav.svg",
            required: false
          },
          {
            name: "basketSrc",
            type: "string",
            description: "The path to the basket icon file",
            default: "/basket.svg",
            required: false
          },
          {
            name: "closeSrc",
            type: "string",
            description: "The path to the close search icon file",
            default: "/close.svg",
            required: false
          },
          {
            name: "logoWidth",
            type: "number",
            description: "The width of the logo on mobile",
            default: "80",
            required: false
          },
          {
            name: "logoWidthDesktop",
            type: "number",
            description: "The width of the logo on dektop",
            default: "100",
            required: false
          },
          {
            name: "searchWidth",
            type: "number",
            description: "The width of the search icon",
            default: "26",
            required: false
          },
          {
            name: "searchHeight",
            type: "number",
            description: "The height of the search icon",
            default: "20",
            required: false
          },
          {
            name: "navWidth",
            type: "number",
            description: "The width of the nav icon",
            default: "23",
            required: false
          },
          {
            name: "navHeight",
            type: "number",
            description: "The height of the nav icon",
            default: "20",
            required: false
          },
          {
            name: "basketWidth",
            type: "number",
            description: "The width of the basket icon",
            default: "23",
            required: false
          },
          {
            name: "basketHeight",
            type: "number",
            description: "The height of the basket icon",
            default: "20",
            required: false
          },
          {
            name: "basketNumber",
            type: "number",
            description: "The number of items in the basket",
            default: "",
            required: false
          },
          {
            name: "searchText",
            type: "string",
            description: "The text to show in the search box",
            default: "",
            required: true
          },
          {
            name: "setSearchText",
            type: "function",
            description:
              "The name of the function to call when the search text changes",
            default: "",
            required: true
          },
          {
            name: "submitSearch",
            type: "function",
            description:
              "The name of the function to call when the search form is submitted",
            default: "",
            required: true
          },
          {
            name: "searchResults",
            type: "array",
            description: "An array of search results to display",
            default: "",
            required: false
          },
          {
            name: "clickBasket",
            type: "function",
            description:
              "The name of the function to call when the basket is clicked",
            default: "",
            required: true
          },
          {
            name: "clickLogo",
            type: "function",
            description:
              "The name of the function to call when the logo is clicked",
            default: "",
            required: true
          },
          {
            name: "clickSignIn",
            type: "function",
            description:
              "The name of the function to call when the sign in button is clicked",
            default: "",
            required: true
          },
          {
            name: "clickNavigation",
            type: "function",
            description:
              "The name of the function to call when the mobile navigation button is clicked",
            default: "",
            required: true
          },
          {
            name: "imageUrlPrefix",
            type: "string",
            description: "The peoples icon in seachresults iumage prefix",
            default: "",
            required: true
          },
          {
            name: "imageUrlPostfix",
            type: "string",
            description: "The peoples icon in seachresults iumage postfix",
            default: "",
            required: true
          },
          {
            name: "selectedResult",
            type: "function",
            description:
              "The name of the function to call when the a search result is clicked",
            default: "",
            required: true
          }
        ]}
      >
        <ShoppingHeader
          searchText={searchText}
          setSearchText={setSearchText}
          submitSearch={submitSearch}
          clickBasket={clickBasket}
          clickLogo={clickLogo}
          clickSignIn={clickSignIn}
          clickNavigation={clickNavigation}
          searchResults={searchResults}
          imageUrlPrefix={imageUrlPrefix}
          imageUrlPostfix={imageUrlPostfix}
          selectedResult={selectedResult}
        />
      </DisplayMount>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600&display=swap");
        * {
          font-family: "Nunito", sans-serif;
        }
      `}</style>
    </main>
  );
}
