import ContactClient from "./ContactClient";

export async function generateMetadata() {
  const response = await fetch(
    "https://vrwebconsulting.com/metadata.json",
    {
      cache: "force-cache",
    }
  );

  const pageMetadata = await response.json();

  return pageMetadata["livedemo"];
}

export default function Page() {
  return <ContactClient />;
}

