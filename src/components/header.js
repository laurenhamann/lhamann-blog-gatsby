import React from 'react';
import { Link } from 'gatsby';
import Logo from '../images/lhamann-logo.png';

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
            <header className="flex-row">
                <Link to="/"><img src={Logo} alt="lhamann-logo" /></Link>
                <div className={this.state.opened ? "container change" : "container"} onClick={this.click}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                    <nav className={this.state.opened ? "visible" : "hidden"}>
                        <ul>
                            <Link to="/" className="selected"><li className="nav-item">Home</li></Link>
                            <Link to="/" className="selected"><li className="nav-item">Projects</li></Link>
                            <Link to="/" className="selected"><li className="nav-item">Blogs</li></Link>
                            <Link to="/" className="selected"><li className="nav-item">About</li></Link>
                            <Link to="/" className="selected"><li className="nav-item">Contact</li></Link>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;