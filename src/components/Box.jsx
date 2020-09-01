import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Image from 'gatsby-image';

const Box = ({ children, to, imageDesktop, imageMobile, alt }) => {
  return (
    <StyledBox>
      <StyledLink to={to} as={Link}>
        <BackgroundContainer>
          {imageDesktop && <StyledImage fluid={imageDesktop} alt={alt} />}
          {imageMobile && <StyledImage fluid={imageMobile} alt={alt} />}
        </BackgroundContainer>
        <ContentContainer>{children}</ContentContainer>
      </StyledLink>
    </StyledBox>
  );
};

const StyledBox = styled.div`
  width: 100%;
  border-radius: 16px;
  background: var(--dark);
  position: relative;
  height: 415px;
  display: block;
  overflow: hidden;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const StyledLink = styled(Link)`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  background-size:cover
  width: 100%;
  height: 100%;
`;

const ContentContainer = styled.div`
  position: absolute;
  z-index: 1;
  color: var(--light);
  padding: 20px;
`;

export default Box;
