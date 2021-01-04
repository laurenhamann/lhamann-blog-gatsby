import React from 'react';
import { Link} from 'gatsby';
import { css } from '@emotion/react';
import Logo from './logo';
import LargeNav from './large-nav';
import MobileNav from './mobile-nav';


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
            <header className="flex-row align-ends">
                <Link to="/" css={css` min-height: 50px; min-width: 100px; height: 40%; width: 50%; max-width: 400px; max-height: 350px;`}><Logo /></Link>
                {this.state.width < 768 ? <MobileNav opened={this.state.opened} clicked={this.click} /> : <LargeNav />}
                
            </header>
        );
    }
}

export default Header;