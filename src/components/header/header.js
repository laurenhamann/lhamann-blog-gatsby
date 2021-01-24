import React from 'react';
import { Link } from 'gatsby';
import Hero from './hero';
import LargeNav from '../nav-large';
import MobileNav from '../nav-mobile';
import HeaderStyle from './styles/header-section';

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
            <HeaderStyle>
                <div>
                    <Link to="/"><h1 className="logo">Lauren Hamann</h1></Link>
                    {this.state.width < 768 ? <MobileNav opened={this.state.opened} clicked={this.click} /> : <LargeNav />}
                </div>
                <Hero width={this.state.width} />
            </HeaderStyle>
        );
    }
}

export default Header;