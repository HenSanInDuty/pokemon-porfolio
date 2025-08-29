import Image from "next/image";
import Navbar from "../components/Navbar";
import HomePageDescriptionSection from "@/containers/home-page/description-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen py-2 justify-between items-center">
      <HomePageDescriptionSection/>
    </div>
  );
}
