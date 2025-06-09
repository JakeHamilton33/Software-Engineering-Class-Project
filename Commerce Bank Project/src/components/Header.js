import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

const HeaderList = styled.div`
  font-size: 1.5em;
  border : 5px solid rgb(0, 100, 48);
  height : 120px;
  background-color: rgb(250, 237, 218);
`;


const Header = () => {
    return (
        <HeaderList>
            <Navigation></Navigation>
        </HeaderList>
    );
};

export default Header;