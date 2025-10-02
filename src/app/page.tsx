import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Terms from "@/components/Terms";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BCCS Service Web",
  description: "This is Home for BCCS service web",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Terms  title="Terms and Policies"/>
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
    </>
  );
}
