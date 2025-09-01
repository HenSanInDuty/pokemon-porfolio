"use client";

import HomePageDescriptionSection from "@/containers/home-page/description-section";
import HomePageTechnologySection from "@/containers/home-page/technology-section";
import HomePageProjectsSection from "@/containers/home-page/projects-section";
import HomePageContactSection from "@/containers/home-page/contact-section";
import useShowOverlay from "@/store/useShowOverlay";
import OverlayType from "@/types/store/OverlayType";

export default function Home() {
  const { hidden, hideOverlay } = useShowOverlay() as OverlayType;

  return (
    <div
      className={`flex flex-col min-h-screen py-2 justify-between items-center`}
    >
      <div
        className={`backdrop-blur-md w-screen h-screen z-1 fixed ${
          hidden ? "hidden" : ""
        }`}
        onClick={hideOverlay}
      ></div>
      <HomePageDescriptionSection />
      <HomePageTechnologySection />
      <HomePageProjectsSection />
      <HomePageContactSection />
    </div>
  );
}
