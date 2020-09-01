import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Container from '../components/Container';
import Button from '../components/Button';
import Box from '../components/Box';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      desktopImage: file(relativePath: { eq: "bg-desktop.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      mobileImage: file(relativePath: { eq: "bg-mobile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <p>Subscribe and stay up to date!</p>
        <Button to="/courses">test</Button>
        <Box
          imageDesktop={data.desktopImage.childImageSharp.fluid}
          imageMobile={data.mobileImage.childImageSharp.fluid}
          alt="test"
        >
          <div>
            <h1>Join our newsletter</h1>
            <p>
              Note: I will never share your email or spam you with nonsense.
              Because I’m not a dick.
            </p>
          </div>
        </Box>
      </Container>
    </Layout>
  );
};

export default IndexPage;
