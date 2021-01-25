import * as React from "react";
import RecentBlogs from '../components/reusable/blog-section/recent-blogs';
import Layout from "../components/layout";
import ProjectSection from '../components/reusable/project-section/project-section'
import MidSection from '../components/index/mid-section/mid-section'
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
            <RecentBlogs />
            <ProjectSection />
            <MidSection />
          </Layout>
        </>
      );
    }
  }

  export default IndexPage;