import React from 'react';
import { Link} from 'gatsby';
import Logo from './logo';
import LargeNav from './nav-large';
import MobileNav from './nav-mobile';
import HeaderStyle from './header-style';

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
            <HeaderStyle className="align-ends">
                <div>
                    <Link to="/" className="logo"><Logo /></Link>
                    {this.state.width < 768 ? <MobileNav opened={this.state.opened} clicked={this.click} /> : <LargeNav />}
                </div>
            </HeaderStyle>
        );
    }
}

export default Header;