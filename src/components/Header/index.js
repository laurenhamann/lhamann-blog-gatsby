import React from 'react';
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
class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            opened: false,
            width: 0
        }
        this.click = this.click.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);      
    }
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    updateWindowDimensions() {
        this.setState({ width: window.innerWidth });
    }
    click(x){
        this.setState({
            opened: !this.state.opened
        })
    }
    render() {
        return ( 
            <HeaderStyle width={this.state.width}>
                <div className="nav">
                    <Link to="/"><h1 className="logo">Lauren Hamann</h1></Link>
                    <Nav
                        width={this.state.width}
                        opened={this.state.opened}
                        click={this.click}
                    />
                </div>
                <Hero width={this.state.width} />
            </HeaderStyle>
        );
    }
}

export default Header;