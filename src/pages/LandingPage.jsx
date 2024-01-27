import React from "react";
import MailingForm from "../components/MailingForm";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <div>
      <HeroSection />
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 p-8">
        <div className="flex-1">
          <MailingForm />
        </div>
        <div className="flex-1">
          <img
            src="/undraw_subscriber_re_om92.svg"
            alt="subscribe"
            className="max-w-full h-auto"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
