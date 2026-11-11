import Cards from "../services/Cards";
import { caseStudies } from "./casestudy";
const Revolution = () => {
  return (
    <>
      <Cards data={caseStudies} caseStudy={true} />
    </>
  );
};

export default Revolution;