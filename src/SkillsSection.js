import SectionTitle from "./SectionTitle";
import SkillProgress from "./SkillProgress";

function createElements(skills) {
    let ct = 3, i = 0, parentiv = [], chiliv = [];
    for (let j = 0; j < ct; j++) {
        
        for (; i < skills.length; i++) {
            if ((i + 1) % ct === 0) {
                chiliv.push(<SkillProgress name={skills[i].name} score={ skills[i].score}/>)
                i++
                break;
            }
            chiliv.push(<SkillProgress name={skills[i].name} score={ skills[i].score}/>)
        }
        parentiv.push(<div class="col-12 col-md-6">{chiliv}</div>);
        chiliv = [];
    }
    return parentiv
}
function SkillsSection(props) {
    return (
        <section id="section-03" class="section animation interaction-in">
            <div class="section-body">
                <SectionTitle title={props.title}/>
                <div class="row animation-translate animation-item-2">
                    {createElements(props.skills)}
                </div>
            </div>

        </section>
    );
}

export default SkillsSection