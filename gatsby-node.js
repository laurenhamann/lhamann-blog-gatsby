exports.createPages = async({ actions, graphql, reporter }) => {
    const result = await graphql(`
        query {
            allMdx {
                nodes {
                    frontmatter {
                        slug
                        type
                        tags
                        languages
                    }
                }
            }
        }
    `);
    if (result.errors) {
        reporter.panic('failed to create post', result.errors);
    }
    const entries = result.data.allMdx.nodes;
    const paths = ['', 'blogs/'];
    const posts = entries.filter(entry => entry.frontmatter.type === "post");

    posts.forEach(post => {
        paths.forEach(path => {
            actions.createPage({
                path: `${path}${post.frontmatter.slug}`,
                component: require.resolve('./src/templates/post.js'),
                context: {
                    slug: post.frontmatter.slug
                },
            });
        })
    })

    const allpaths = ['', 'projects/'];
    const projects = entries.filter(entry => entry.frontmatter.type === "project");

    projects.forEach(project => {
        allpaths.forEach(all => {
            actions.createPage({
                path: `${all}${project.frontmatter.slug}`,
                component: require.resolve('./src/templates/project.js'),
                context: {
                    slug: project.frontmatter.slug
                },
            });
        })
    })
}