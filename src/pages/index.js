import * as React from "react";
import RecentBlogs from '../components/components/Pages/Home/recent-blogs';
import Layout from "../components/components/Global/layout";
import ProjectSection from '../components/components/Pages/Home/project-section'
import MidSection from '../components/components/Pages/Home/mid-section'

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