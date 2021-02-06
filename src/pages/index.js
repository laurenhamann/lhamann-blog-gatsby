import * as React from "react";
import RecentBlogs from '../components/reusable/blog-section/recent-blogs';
import Layout from "../components/layout";
import ProjectSection from '../components/reusable/project-section/project-section'
import MidSection from '../components/index/mid-section/mid-section'
// markup
const IndexPage = () => {
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

  export default IndexPage;