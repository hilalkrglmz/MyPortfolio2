import { ThemeProvider } from 'next-themes'
import { fuchsia } from "tailwindcss/colors";
import "../styles/global.css";
import { Component } from "react";
import NextProgress from "nextjs-progressbar"



function MyApp({Component, pageProps}) {
  return (
    <ThemeProvider attribute='class'>
    <NextProgress color={fuchsia[500]} height={4}/>
      <Component {...pageProps}/>
    </ThemeProvider>
  );
}

export default MyApp;