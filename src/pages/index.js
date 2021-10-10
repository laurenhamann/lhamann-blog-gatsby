import * as React from "react";
import RecentBlogs from '../components/components/recent-blogs';
import Layout from "../components/components/layout";
import ProjectSection from '../components/components/project-section'
import MidSection from '../components/components/mid-section'

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