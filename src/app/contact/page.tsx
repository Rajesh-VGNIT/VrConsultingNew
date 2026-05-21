import Breadcrumb1 from "@/components/Common/Breadcrumb1";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | VR Consulting",
  description: "Contacts for Software Development in VR Consulting",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb1
        pageName="Contact Page"
        description=""
      />

      <Contact />
    </>
  );
};

export default ContactPage;
