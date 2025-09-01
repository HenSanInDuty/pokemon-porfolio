import Image from "next/image";
import Navbar from "../components/Navbar";
import HomePageDescriptionSection from "@/containers/home-page/description-section";
import HomePageTechnologySection from "@/containers/home-page/technology-section";
import HomePageProjectsSection from "@/containers/home-page/projects-section";
import HomePageContactSection from "@/containers/home-page/contact-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen py-2 justify-between items-center">
      <HomePageDescriptionSection/>
      <HomePageTechnologySection/>
      <HomePageProjectsSection/>
      <HomePageContactSection/>
    </div>
  );
}
