const {
  experimental_extendTheme: extendTheme,
} = require("@mui/material/styles");
const { withZeroPlugin } = require("@mui/zero-next-plugin");

/** @type {import('next').NextConfig} */
const nextConfig = {};

const theme = extendTheme({
  cssVarPrefix: "app",
  components: {
    MuiBadge: {
      defaultProps: {
        color: "primary",
      },
    },
  },
});

module.exports = withZeroPlugin(nextConfig, {
  theme,
  cssVariablesPrefix: "app",
  transformLibraries: ["@mui/material"],
});
