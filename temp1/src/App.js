import Accordion from "./Accordian";
import Card from "./components/card";

function App() {
  return (
    <>
      {/* updated card */}
      <Card></Card> 
      <div className='accordion-header'>PROBLEM STATEMENT</div>
      <div>
      <Accordion title="FINTECH" content="Lorem ipsum dolor sit amet." />
      <Accordion title="SUSTAINAIBILITY" content="Consectetur adipiscing elit." />
      <Accordion title="EDUCATION" content="Sed do eiusmod tempor incididunt." />
    </div>
    </>
  );
}

export default App;
