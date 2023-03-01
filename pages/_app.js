import { motion } from "framer-motion";
import Layout from "../components/Layout";
import "../styles/globals.scss";
function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        transition={{
          opacity: { duration: 1 },
          default: { ease: "linear" },
        }}
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </Layout>
  );
}

export default MyApp;
