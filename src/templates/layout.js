import * as React from "react";
import Header from "templates/header";
import Footer from "templates/footer";
import siteData from "src/content/site.yml";
import "src/scss/style.scss";

//------------------------------------------------------------------------------
//-- LAYOUT TEMPLATE --
//------------------------------------------------------------------------------

export default function Layout({ children }) {
  return (
    <main className="o-container">
      <Header data={siteData} />
      <div className="c-page">{children}</div>
      <Footer data={siteData} />
    </main>
  );
}
