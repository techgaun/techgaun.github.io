import VentureCard from "./VentureCard";

function Ventures() {

  return (
    <div className="ventureWrapper" id="ventures">
      <div className="ventureTitle">VENTURES</div>
      <div className="ventureContent">
        <div className="ventureLeft">Selected <br/><i className="italicVenture">Ventures</i></div>
        <div className="ventureRight">A curated selection of companies I've built, backed, or<br/> led as a technology executive.</div>
      </div>
      <VentureCard sn={'01'} title={"RamroLink"} subTitle="Founder & CTO" tagline={"Early-stage fund backing South Asian founders"} year={'2020'} status={"Active"}/>
      <VentureCard sn={'02'} title={"Techgaun Nepal"} subTitle="Founder & CTO" tagline={"Early-stage fund backing South Asian founders"} year={'2020'} status={"Active"}/>
      <VentureCard sn={'03'} title={"CarePilot"} subTitle="Founder & CTO" tagline={"Early-stage fund backing South Asian founders"} year={'2020'} status={"Active"}/>

    </div>
  );
}
export default Ventures;
