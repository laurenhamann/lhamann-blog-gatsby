import React from 'react';
import { Link } from 'gatsby';
import Logo from '../images/lhamann-logo.png';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const NavDiv = styled('div')`
    background-color: ${props => props.opened ? '#fbfafb' : 'transparent'};
    height: auto;
    padding-bottom: 5px;
    min-width: auto;
    width: ${props => props.opened ? '60vw' : 'auto'};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;


class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            opened: false
        }
        this.click = this.click.bind(this);      
    }
    click(x){
        this.setState({
            opened: !this.state.opened
        })
    }
    render() {
        return ( 
            <header className="flex-header align-ends">
                <Link to="/"><img src={Logo} alt="lhamann-logo" /></Link>
                <NavDiv opened={this.state.opened} css={css`
                            align-self: flex-start;
                            padding: 3px;
                        `}>
                    <nav className={this.state.opened ? "visible" : "hidden"} css={css` padding-top: 5vh;`}>
                        <ul>
                            <Link to="/" activeClassName="active"><li className="nav-item">Home</li></Link>
                            <Link to="/" activeClassName="active"><li className="nav-item">Projects</li></Link>
                            <Link to="/" activeClassName="active"><li className="nav-item">Blogs</li></Link>
                            <Link to="/about" activeClassName="active"><li className="nav-item">About</li></Link>
                            <Link to="/" activeClassName="active"><li className="nav-item">Contact</li></Link>
                        </ul>
                    </nav>
                    <div className={this.state.opened ? "container change" : "container"} onClick={this.click} onKeyDown={this.click} role = "button" tabIndex={0}>
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                </NavDiv>
            </header>
        );
    }
}

export default Header;