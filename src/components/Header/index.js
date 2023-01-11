import React, {useState, useEffect} from 'react';
import { Link } from 'gatsby';
import Hero from './hero';
import Nav from './Navigation/index';
import styled from '@emotion/styled';
import { clamps, margin, flex } from '../Global/Styles/__global';

const HeaderStyle = styled('header')`
    ${flex.flexCol}
    width: ${clamps.header_width};
    ${margin.center}
    > div.nav {
        ${flex.flexRow}
        ${flex.justifySB}
    }
`
const Header = () => {
    const [opened, setOpen] = useState(false);
    const size = useWindowSize();
        return ( 
            <HeaderStyle width={size}>
                <div className="nav">
                    <Link to="/"><h1 className="logo">Lauren Hamann</h1></Link>
                    <Nav
                        width={size}
                        opened={opened}
                        click={() => {setOpen(!opened)}}
                    />
                </div>
                <Hero />
            </HeaderStyle>
        );
}

export default Header;


// Hook
function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState(undefined);
    useEffect(() => {
      // Handler to call on window resize
        function handleResize() {
        // Set window width/height to state
        setWindowSize(window.innerWidth);
        }
      // Add event listener
        window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
        handleResize();
      // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}