import React from 'react';
import styled from 'styled-components';


const FooterList = styled.div`
  position: relative;
  width: 100%;
  height : 100px;
  background-color: rgb(0, 100, 48);
  font-weight: bold;
  text-align: right;
  line-height: 100px;
`;

const Footer = () => {
    return (
        <FooterList>
            <a
                style={{color:'black'}}
                href = {"https://www.commercebank.com/"}>
                @Commerce Bank 2022                              
            </a>
        </FooterList>
    );
};

export default Footer;