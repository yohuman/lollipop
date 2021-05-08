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
        description="Fully responsive, includes search, signin, mobile navigation and basket buttons."
        markup={`<Header
          searchText={searchText}
          setSearchText={setSearchText}
          submitSearch={submitSearch}
        />`}
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
