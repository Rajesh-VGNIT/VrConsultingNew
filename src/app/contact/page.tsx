import Breadcrumb1 from "@/components/Common/Breadcrumb1";
import Contact from "@/components/Contact";
import portfolioData from "@/data/portfolio.json";

export async function generateMetadata() {
  const response = await fetch(
    "https://vrwebconsulting.com/metadata.json",
    {
      cache: "force-cache",
    }
  );
  const pageMetadata = await response.json();
  return pageMetadata["contact"];
}

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
