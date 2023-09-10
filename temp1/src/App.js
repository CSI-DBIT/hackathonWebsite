import Accordion from "./components/Accordian";
import Card from "./components/Card";
import LandingPage from "./components/LandingPage";
import Sponsors from "./components/Sponsors";

function App() {
  return (
    <>
      <LandingPage/>
      {/* updated card */}
      <Card></Card>
      <Sponsors></Sponsors>
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
