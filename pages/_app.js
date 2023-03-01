import Layout from "../components/Layout";
function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
