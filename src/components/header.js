import React from 'react';
import { Link, graphql } from 'gatsby';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Logo from './logo';

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
            <header className="flex-row align-ends">
                <Link to="/" css={css` min-height: 50px; min-width: 100px; height: 40%; width: 50%; max-width: 400px; max-height: 350px;`}><Logo /></Link>
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