import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Image from 'gatsby-image';

const Box = ({ children, to, image, alt }) => {
  return (
    <StyledBox>
      <StyledBox as={Link}>
        <BackgroundContainer>
          {image && <StyledImage fluid={image} alt={alt} />}
        </BackgroundContainer>
        {children}
      </StyledBox>
    </StyledBox>
  );
};

const StyledBox = styled(Link)`
  width: 100%;
  border-radius: 16px;
  background: var(--dark);
  position: relative;
  height: 200px;
`;

const BackgroundContainer = styled.div`
  position: absolute;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
`;

export default Box;
