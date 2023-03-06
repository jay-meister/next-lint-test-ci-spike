import "@/styles/globals.css";

import PropTypes from "prop-types";

App.propTypes = {
  Component: PropTypes.component.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
