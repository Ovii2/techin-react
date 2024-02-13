import Accordion from "react-bootstrap/Accordion";
import "./CollapsingAccordion.css";
import AccordionData from "./AccordionData";

function CollapsingAccordion() {
  return (
    <Accordion className="bg-primary p-2 pb-5">
      <h3 className="text-white text-center mb-3">Frequently asked question</h3>
      {AccordionData.map((data, index) => (
        <Accordion.Item className="mb-3" key={index} eventKey={index.toString()}>
          <Accordion.Header>{data.title}</Accordion.Header>
          <Accordion.Body>{data.info}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default CollapsingAccordion;
