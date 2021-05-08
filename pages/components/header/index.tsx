import React, { useEffect, useRef } from "react";

interface IProps {
  maxWidth?: number;
  breakPoint?: number;
  logoSrc?: string;
  searchSrc?: string;
  navSrc?: string;
  basketSrc?: string;
  closeSrc?: string;
  logoWidth?: number;
  logoWidthDesktop?: number;
  searchWidth?: number;
  searchHeight?: number;
  navWidth?: number;
  navHeight?: number;
  basketWidth?: number;
  basketHeight?: number;
  basketNumber?: number;
  searchText: string;
  setSearchText: any;
  submitSearch: any;
  searchResults: any;
  clickBasket: any;
  clickLogo: any;
  clickSignIn: any;
  clickNavigation: any;
  imageUrlPrefix: string;
  imageUrlPostfix: string;
  selectedResult: any;
}

export default function ShoppingHeader({
                 maxWidth = 1280,
                 breakPoint = 900,
                 logoSrc = "/logo.svg",
                 searchSrc = "/search.svg",
                 navSrc = "/nav.svg",
                 basketSrc = "/basket.svg",
                 closeSrc = "/close.svg",
                 logoWidth = 80,
                 logoWidthDesktop = 110,
                 searchWidth = 26,
                 searchHeight = 20,
                 navWidth = 23,
                 navHeight = 20,
                 basketWidth = 26,
                 basketHeight = 23,
                 basketNumber,
                 searchText,
                 setSearchText,
                 submitSearch,
                 searchResults,
                 clickBasket,
                 clickLogo,
                 clickSignIn,
                 clickNavigation,
                 imageUrlPrefix,
                 imageUrlPostfix,
                 selectedResult,
               }: IProps) {
                 const ref = useRef<HTMLDivElement>(null);
                 const clickSignInCheck = () => {
                   const width = Math.max(
                     document.body.scrollWidth,
                     document.documentElement.scrollWidth,
                     document.body.offsetWidth,
                     document.documentElement.offsetWidth,
                     document.documentElement.clientWidth
                   );
                   clickSignIn(width <= breakPoint ? "mobile" : "desktop");
                 };

                 const itemTypeArray = (type: string) => {
                   const itemTypeArray = searchResults.filter(
                     (x: { type: string }) => {
                       return x.type == type;
                     }
                   );
                   return itemTypeArray;
                 };

                 const makeMeBold = (str: any, searchTxt: string) => {

                   const regEscape = (v: any) =>
                     v.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
                     
                   const strArr = str.split(
                     new RegExp(regEscape(searchTxt), "ig")
                   );
                   
                   return strArr.map((str: string, index: number) => {
                     if (index === 0 && str === "") {
                       return <b key={index}>{searchTxt}</b>;
                     } else {
                       if (index + 1 === strArr.length) {
                         return <span key={index}>{str}</span>;
                       } else {
                         return (
                           <span key={index}>
                             {str}
                             <b>{searchTxt}</b>
                           </span>
                         );
                       }
                     }
                   });
                 };

                   const handleBlur = (e: any) => {
                     if (ref.current && !ref.current.contains(e.target as Node))
                     setSearchText("");
                   };
                   useEffect(() => {
                     document.addEventListener("click", handleBlur, true);
                     return () => {
                       document.removeEventListener("click", handleBlur, true);
                     };
                   });

                 return (
                   <header className="container">
                     <nav className="iner-container">
                       <div className="nav">
                         <button
                           className="navigation-btn"
                           onClick={clickNavigation}
                         />
                       </div>
                       <div className="search">
                         <button className="search-btn" />
                       </div>
                       <div className="logo" onClick={clickLogo}>
                         <img
                           className="logo-img"
                           src={logoSrc}
                           alt="logo"
                           width={`${logoWidth}px`}
                           height="20px"
                         />
                       </div>
                       <div className="search-box">
                         <form onSubmit={submitSearch}>
                           <input
                             type="text"
                             placeholder="Search for anything..."
                             className="search-input"
                             value={searchText}
                             onChange={e => setSearchText(e.target.value)}
                           ></input>
                           {searchText && (
                             <img
                               src={closeSrc}
                               className="mini-close"
                               width="16px"
                               height="13px"
                               alt="cancel"
                               onClick={e => setSearchText("")}
                             />
                           )}
                           <input
                             type="submit"
                             value=""
                             className="mini-search"
                           />
                           {searchResults && searchResults.length >= 1 &&
                             searchText && (
                               <div
                                 className="search-results-dropdown"
                                 ref={ref}
                               >
                                 {itemTypeArray("item").map(
                                   (item: any, index: number) => {
                                     return (
                                       <div
                                         key={`item-search-result-${index}`}
                                         className="search-result-item"
                                         onClick={() => {
                                           selectedResult(
                                             itemTypeArray("item")[index]
                                           );
                                         }}
                                       >
                                         {makeMeBold(item.result, searchText)}
                                       </div>
                                     );
                                   }
                                 )}
                                 <div className="search-people-title">
                                   People
                                 </div>
                                 {itemTypeArray("person").map(
                                   (item: any, index: number) => {
                                     return (
                                       <div
                                         key={`person-search-result-${index}`}
                                         className="search-result-person"
                                         onClick={() => {
                                           selectedResult(
                                             itemTypeArray("person")[index]
                                           );
                                         }}
                                       >
                                         <img
                                           src={`${imageUrlPrefix}${item.id}${imageUrlPostfix}`}
                                           alt={item.name}
                                           className="search-result-avatar"
                                         />
                                         <span className="search-result-name">
                                           {makeMeBold(item.name, searchText)}
                                         </span>
                                         <span className="search-result-username">
                                           {"("}
                                           {makeMeBold(
                                             item.username,
                                             searchText
                                           )}
                                           {")"}
                                         </span>
                                       </div>
                                     );
                                   }
                                 )}
                               </div>
                             )}
                         </form>
                       </div>
                       <div className="sign-in">
                         <button
                           className="sign-in-btn"
                           onClick={clickSignInCheck}
                         >
                           Sign in
                         </button>
                       </div>
                       <div className="basket">
                         <button className="basket-btn" onClick={clickBasket} />
                         <span className="basket-number">{basketNumber}</span>
                       </div>
                     </nav>

                     <style jsx>{`
                       form {
                         width: 100%;
                         position: relative;
                       }

                       .container {
                         display: grid;
                         grid-template-columns:
                           1fr
                           minmax(0, ${maxWidth}px)
                           1fr;
                       }
                       .iner-container {
                         grid-column: 2;
                         grid-gap: 5px;
                         display: grid;
                         grid-template-columns:
                           auto
                           auto
                           1fr
                           auto
                           auto;
                       }
                       .nav {
                         grid-column: 1;
                         justify-self: center;
                         align-self: center;
                       }
                       .navigation-btn {
                         height: 34px;
                         width: 34px;
                         background-image: url(${navSrc});
                         border: none;
                         background-color: transparent;
                         background-repeat: no-repeat;
                         background-position: center;
                         padding: 0;
                         cursor: pointer;
                         background-size: ${navWidth}px ${navHeight}px;
                       }
                       .search {
                         grid-column: 2;
                         justify-self: left;
                         align-self: center;
                       }
                       .search-results-dropdown {
                         position: absolute;
                         background: white;
                         width: calc(100% + 18px);
                         padding: 11px 0;
                         border: 1px solid #c4c4c4;
                         border-radius: 4px;
                         top: 40px;
                         font-weight: 300;
                         font-size: 14px;
                         color: #393d4d;
                       }

                       .search-result-item {
                         line-height: 30px;
                         padding: 0 22px;
                         cursor: pointer;
                       }
                       .search-result-item:hover {
                         background: #f1f1f1;
                       }

                       .search-people-title {
                         margin: 20px 22px 10px 22px;
                         font-weight: 700;
                         color: #b0b4bc;
                         font-size: 16px;
                       }

                       .search-result-person {
                         line-height: 30px;
                         padding: 0 22px;
                         cursor: pointer;
                         display: grid;
                         grid-template-columns: 25px auto 1fr;
                         grid-gap: 10px;
                       }
                       .search-result-person:hover {
                         background: #f1f1f1;
                       }

                       .search-result-avatar {
                         width: 25px;
                         height: 25px;
                         background: #b0b4bc;
                         border-radius: 50%;
                         overflow: hidden;
                         display: inline-block;
                         margin: 2px 0;
                       }

                       .search-result-name {
                         text-transform: capitalize;
                       }

                       .search-btn {
                         height: 34px;
                         width: 34px;
                         background-image: url(${searchSrc});
                         border: none;
                         background-color: transparent;
                         background-repeat: no-repeat;
                         background-position: center;
                         padding: 0;
                         cursor: pointer;
                         background-size: ${searchWidth}px ${searchHeight}px;
                       }
                       .basket {
                         grid-column: 5;
                         text-align: right;
                         justify-self: center;
                         align-self: center;
                         position: relative;
                       }
                       .basket-number {
                         font-size: 12px;
                         position: absolute;
                         left: 13px;
                         top: 10px;
                         text-align: center;
                         width: 13px;
                         color: #3f434b;
                       }

                       .basket-btn {
                         height: 34px;
                         width: 34px;
                         background-image: url(${basketSrc});
                         border: none;
                         background-color: transparent;
                         background-repeat: no-repeat;
                         background-position: center;
                         padding: 0;
                         cursor: pointer;
                         background-size: ${basketWidth}px ${basketHeight}px;
                       }

                       .mini-search {
                         right: -10px;
                         top: 6px;
                         position: absolute;
                         height: 13px;
                         cursor: pointer;
                         padding: 10px;
                         background-image: url(${searchSrc});
                         background-color: transparent;
                         background-repeat: no-repeat;
                         background-position: center;
                         border: none;
                         background-size: 16px 16px;
                       }

                       .mini-close {
                         right: 10px;
                         top: 0px;
                         position: absolute;
                         height: 13px;
                         cursor: pointer;
                         padding: 10px;
                       }

                       .search-box {
                         display: none;
                       }

                       .logo {
                         grid-column: 3;
                         display: grid;
                         align-content: center;
                         cursor: pointer;
                       }
                       .logo-img {
                         justify-self: center;
                         align-self: center;
                         height: 20px;
                         width: ${logoWidth}px;
                       }
                       .sign-in {
                         grid-column: 4;
                         text-align: right;
                         justify-self: center;
                         align-self: center;
                         min-width: 60px;
                         padding: 12px 6px;
                       }

                       .sign-in-btn {
                         border: none;
                         height: 24px;
                         font-size: 12px;
                         color: #3f434b;
                         padding: 0 9px;
                         cursor: pointer;
                         border-radius: 3px;
                         letter-spacing: 0.02rem;
                       }
                       @media screen and (min-width: ${breakPoint}px) {
                         .iner-container {
                           grid-gap: 20px;
                           grid-template-columns:
                             auto
                             1fr
                             auto
                             auto;
                         }
                         .nav {
                           display: none;
                         }
                         .search-box {
                           grid-column: 2;
                           display: block;
                           align-self: center;
                         }

                         .search-input {
                           width: 100%;
                           padding: 9px;
                           border: 1px solid #c4c4c4;
                           border-radius: 4px;
                           outline: none;
                           color: #393d4d;
                           font-size: 12px;
                           text-indent: 6px;
                         }
                         .search-input::placeholder {
                           color: #b0b4bc;
                           font-weight: 300;
                           letter-spacing: 0.02rem;
                         }
                         .logo {
                           grid-column: 1;
                           width: 110px;
                         }
                         .logo-img {
                           height: 30px;
                           width: ${logoWidthDesktop}px;
                         }
                         .search {
                           display: none;
                         }
                         .sign-in-btn {
                           height: 34px;
                           font-size: 14px;
                           padding: 8px 20px;
                         }
                       }
                     `}</style>
                   </header>
                 );
               }
