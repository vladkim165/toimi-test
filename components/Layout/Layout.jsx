import Head from "next/head";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Toimi Test Project</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
