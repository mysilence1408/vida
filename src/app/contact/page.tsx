import ContactPage from "@/components/Contact/ContactPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach VIDA Medicals for mammography AI inquiries, collaborations, press, or support. Send a message and the team will respond.",
};

const Contact = () => {
  return (
    <div>
      <ContactPage />
    </div>
  );
};

export default Contact;
