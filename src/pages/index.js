import * as React from "react";
import PreviewHome from '../components/previews-index';
import Layout from "../components/layout";
import { css } from '@emotion/react';
import MidIndex from '../components/mid-index';
import Footer from '../components/footer';
// markup
class IndexPage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      previewBlog: true
    }
    this.displayChangeOnClick = this.displayChangeOnClick.bind(this);
  }

  displayChangeOnClick(e){
    e.preventDefault();
    console.log(e.target.id);
    if(e.target.id === "project"){
      this.setState({
        previewBlog: false
      })
    } else {
      this.setState({
        previewBlog: true
      })
    }
  }
    render() {
      return (
        <>
        <Layout>
          <div css={css` min-height: 60vh; `}>
            <PreviewHome displayChangeOnClick={this.displayChangeOnClick} previewBlog={this.state.previewBlog} />
          </div>
          </Layout>
          <MidIndex />
          <Footer />
        </>
      );
    }
  }

export default IndexPage;
