import { faHouseChimneyWindow, faTree, faMagnifyingGlass, faScroll } from "@fortawesome/free-solid-svg-icons";
import ImpactCard from "./ImpactCard";



const datas = [
    { icon: faHouseChimneyWindow, impact: 'Livelihoods Impacted', amount: 8000 },
    { icon: faMagnifyingGlass, impact: 'Species Discovered', amount: 44 },
    { icon: faTree, impact: 'Hectres of Forest Secured', amount: 100 },
    { icon: faScroll, impact: 'Scientific Papers Published', amount: 20 }
]

const OurImpact = () => {

    return (
        <section className="section our-impact-container">
            <div className="impact-title"><h5>Our <span className="title-green">Impact</span></h5></div>


            <div className='impacts-container'>
                {datas.map((data, i) => <ImpactCard key={i} data={ data} />)}

            </div>
        </section>
    );
};

export default OurImpact;