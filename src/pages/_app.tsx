import { AppProps } from "next/app";
import React from "react";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import { store, persistor } from "../redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NEXT</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <meta
          name="description"
          content="TS, React, Redux, Saga, NextJS and Chakra-UI"
        />
      </Head>

      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <ChakraProvider>
            <Component {...pageProps} />
          </ChakraProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
