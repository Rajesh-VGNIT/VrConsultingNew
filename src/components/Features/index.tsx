import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (

    <>
      {/* <section id="features" className="py-5 md:py-10 lg:py-10"> */}
      <section id="features" className="pt-5  md:py-10 lg:py-10" >
        <div className="container">
          <SectionTitle
            title="Expertise Area"
            paragraph="Comes with everything you need to get started !"
            center
          />

          <div className="grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2 lg:grid-cols-4">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
              
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
