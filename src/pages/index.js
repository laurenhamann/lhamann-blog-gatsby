import * as React from "react";
import Layout from "../components/layout";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <div className="flex-row">
        <a href="/" className="selected page-links">Projects</a>
        <a href="/" className="page-links">Blogs</a>
      </div>
    </Layout>
  );
};

export default IndexPage;
