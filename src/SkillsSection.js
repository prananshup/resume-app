import SectionTitle from "./SectionTitle";

function SkillsSection(props) {
    return (
        <section id="section-03" class="section animation interaction-in">
            <div class="section-body">
                <SectionTitle title={props.title}/>
                <div class="row animation-translate animation-item-2">
                    <div class="col-12 col-md-6">
                        <strong class="progress-label">CSS</strong>
                        <div class="progress progress-animated mb-9">
                            <div class="progress-bar" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        
                    </div>
                    <div class="col-12 col-md-6">
                        
                    </div>
                </div>
            </div>

        </section>
    );
}

export default SkillsSection;