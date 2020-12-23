// exports.createPages = async({ actions, graphql, reporter }) => 
// {
//     const result = await graphql(`
//         query {
//             allMdx {
//                 nodes {
//                     frontmatter {
//                         slug
//                     }
//                 }
//             }
//         }
//     `);
//     if (result.errors) {
//         reporter.panic('failed to create post', result.errors);
//     }
//     const posts = result.data.allMdx.nodes;
//     posts.forEach(post => {
//         actions.createPage({
//             path: post.frontmatter.slug,
//             component: require.resolve('./src/templates/post.js'),
//             context: {
//                 slug: post.frontmatter.slug
//             },
//         });
//     })
// }

exports.createPages = async({ actions, graphql, reporter }) => 
{
    const result = await graphql(`
        query {
            allMdx {
                nodes {
                    frontmatter {
                        slug
                        type
                    }
                }
            }
        }
    `);
    if (result.errors) {
        reporter.panic('failed to create post', result.errors);
    }
    const entries = result.data.allMdx.nodes;

    const posts = entries.filter(entry => entry.frontmatter.type === "post");
    posts.forEach(post => {
        actions.createPage({
            path: post.frontmatter.slug,
            component: require.resolve('./src/templates/post.js'),
            context: {
                slug: post.frontmatter.slug
            },
        });
    })

    const projects = entries.filter(entry => entry.frontmatter.type === "project");

    projects.forEach(project => {
        actions.createPage({
            path: project.frontmatter.slug,
            component: require.resolve('./src/templates/project.js'),
            context: {
                slug: project.frontmatter.slug
            },
        });
    })
}