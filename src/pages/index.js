import * as React from "react";
import RecentBlogs from '../components/Pages/Home/recent-blogs';
import Layout from "../components/Global/layout";
import ProjectSection from '../components/Pages/Home/project-section'
import MidSection from '../components/Pages/Home/mid-section'

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