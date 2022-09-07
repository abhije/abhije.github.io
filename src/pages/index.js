import * as React from "react";
import Layout from "templates/layout";
import HomeBanner from "templates/home/banner";
import HomeBrands from "templates/home/brands";
import HomeCtaProducts from "templates/home/cta_products";
import HomeMottoVisionMission from "templates/home/motto_vm";
import { graphql } from "gatsby";
import HomeCtaQuality from "templates/home/cta_quality";
import HomePage from 'src/content/pages/home.yml'

//------------------------------------------------------------------------------
//-- INDEX PAGE --
//------------------------------------------------------------------------------

export default function IndexPage({ data }) {
  const image_sharps = data.allFile.nodes;

  return (
    <Layout>
      <HomeBanner data={HomePage.banner} />
      <HomeBrands data={HomePage.brands} imageSharps={image_sharps} />
      <HomeCtaProducts data={HomePage.products_cta} />
      <HomeMottoVisionMission data={HomePage.motto_vision_mission} />
      <HomeCtaQuality data={HomePage.quality_cta} />
    </Layout>
  );
}

//------------------------------------------------------------------------------
//-- PAGE HEAD CONTENT --
//------------------------------------------------------------------------------

export const Head = () => <title>Home page</title>;

//------------------------------------------------------------------------------
//-- QUERY --
//------------------------------------------------------------------------------

export const query = graphql`
  query MyHomeQuery {
    allFile(filter: { sourceInstanceName: { eq: "images" } }) {
      nodes {
        childImageSharp {
          gatsbyImageData
        }
        base
      }
    }
  }
`;
