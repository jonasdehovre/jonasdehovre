import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Container from '../components/Container';
import Button from '../components/Button';
import Box from '../components/Box';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      mobileImage: file(relativePath: { eq: "bg-mobile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tabletImage: file(relativePath: { eq: "bg-desktop.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      desktopImage: file(relativePath: { eq: "bg-desktop.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      comingsoon1: file(relativePath: { eq: "comingsoon_1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      comingsoon2: file(relativePath: { eq: "comingsoon_2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      comingsoon3: file(relativePath: { eq: "comingsoon_3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const sources = [
    data.mobileImage.childImageSharp.fluid,
    {
      ...data.desktopImage.childImageSharp.fluid,
      media: `(min-width: 1200px)`,
    },
    {
      ...data.tabletImage.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ];

  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <Box image={sources} alt="test">
          <BoxContent>
            <h1>Stay up to date!</h1>
            <span>
              Note: I will never share your email or spam you with nonsense.
            </span>
            <form>
              <input type="email" id="email" name="email" />
              <Button variant="light">subscribe</Button>
            </form>
          </BoxContent>
        </Box>
        <Grid>
          <Box
            withShadow
            image={data.comingsoon1.childImageSharp.fluid}
            alt="Gatsby"
            title="Gatsby and Netlify CMS"
            subtitle="Set up a complete Gatsby site and source data from Netlify CMS."
          />
          <Box
            withShadow
            image={data.comingsoon2.childImageSharp.fluid}
            alt="Coming soon!"
            title="Coming soon!"
            subtitle="One minute of patience, ten years of peace."
          />
          <Box
            withShadow
            image={data.comingsoon3.childImageSharp.fluid}
            alt="Coming soon!"
            title="Coming soon!"
            subtitle="With love and patience, nothing is impossible."
          />
        </Grid>
      </Container>
    </Layout>
  );
};

const BoxContent = styled.div`
  h1 {
    margin: 0;
  }
  span {
    font-size: 14px;
  }
  form {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    input {
      margin-right: 5px;
      margin-bottom: 5px;
    }
    a {
      margin-bottom: 5px;
    }
  }
`;

// const DarkContainer = styled(Container)`
//   margin-top: 20px;
//   color: var(--light);
//   span {
//     font-size: 14px;
//   }
// `;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(415px, 1fr));
  grid-column-gap: 20px;
`;

export default IndexPage;
