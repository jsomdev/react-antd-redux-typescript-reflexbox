const {
  addLessLoader,
  // addBabelPlugin,
  override,
  fixBabelImports
} = require("customize-cra");

module.exports = override(
  /* ANTD FIX */
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    modifyVars: {
      "@primary-color": "#45ADA8",
      "@layout-header-background": "#fafafa"
    },
    javascriptEnabled: true
  })
);
