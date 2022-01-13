import SectionTitle from "./SectionTitle";
import Article from "./Article";

const AboutMeSection = (props) => {

    return (
        <section id="section-02" class="section animation interaction-in">
            <div class="section-body">
                <div class="row">
                    <div class="col col-xl-10">
                        <SectionTitle title={props.title}/>
                        <Article description={props.description}/>
                    </div>
                </div>
            </div>
        </section>
    )

};

export default AboutMeSection