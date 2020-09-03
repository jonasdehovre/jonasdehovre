import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Image from 'gatsby-image';

const Box = ({
  children,
  to,
  image,
  alt,
  withShadow = false,
  title,
  subtitle,
}) => {
  return (
    <StyledBox withShadow={withShadow}>
      <StyledLink to={to} as={Link}>
        <BackgroundContainer>
          {image && (
            <StyledImage hasBottomBar={title} fluid={image} alt={alt} />
          )}
          <ContentContainer>{children}</ContentContainer>
        </BackgroundContainer>
        {title && (
          <BottomBar>
            <h4>{title}</h4>
            {subtitle && <span>{subtitle}</span>}
          </BottomBar>
        )}
      </StyledLink>
    </StyledBox>
  );
};

const StyledBox = styled.div`
  width: 100%;
  border-radius: 16px;
  border: 0px solid rgba(0, 0, 0, 0);
  position: relative;
  height: 415px;
  display: block;
  overflow: hidden;
  margin-top: 20px;
  margin-bottom: 20px;
  ${(props) =>
    props.withShadow && 'box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 8px;'}
`;

const StyledLink = styled(Link)`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const BackgroundContainer = styled.div`
  flex: 8;
  position: relative;
  overflow: hidden;
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
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  @media (min-width: 768px) {
    padding: 40px;
  }
`;

const BottomBar = styled.div`
  position: relative;
  background: var(--light);
  width: 100%;
  padding: 20px;
  flex: 1;
  box-sizing: border-box;

  h4 {
    margin: 0;
    margin-bottom: 5px;
    font-size: 18px;
  }
  span {
    margin: ;
    color: rgb(113, 113, 113);
    font-size: 14px;
  }
`;

export default Box;
