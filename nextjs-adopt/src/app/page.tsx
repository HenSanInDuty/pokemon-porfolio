"use client"
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import About from "../components/About";
import Services from "../components/Services";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { switchMode, setDarkMode, setLightMode } from "@/lib/features/theme/themeSlice";

export default function Home() {

  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      dispatch(setDarkMode());
    } else {
      dispatch(setLightMode());
    }
  }, []);

  useEffect(() => {
    if(isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [isDarkMode]);

  return (
   <>
    <Navbar/>
    <Header/>
    <About/>
    <Services/>
    <Work/>
    <Contact/>
    <Footer/>
   </>
  );
}
