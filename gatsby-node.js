const path = require('path');

exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  // main page
  createPage({
    path: '/',
    component: path.resolve('src/templates/index-page.js'),
  });

  // blog list
  createPage({
    path: '/blog',
    component: path.resolve('src/templates/blog-page.js'),
  });
};
