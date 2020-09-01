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
      file(relativePath: { eq: "background.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
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
        <Box image={data.file.childImageSharp.fluid} alt="test">
          <p>test</p>
        </Box>
      </Container>
    </Layout>
  );
};

export default IndexPage;
