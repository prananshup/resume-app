import IntroSection from "./IntroSection";
import AboutMeSection from "./AboutMeSection";
import SkillsSection from "./SkillsSection";

const MainContent = (props) => {
    return (
        <main className={"content"}>
            <div className={"container-fluid-limited"}>
                <div className={"row"}>
                    <div className={"col col-xl-9"}>
                        <IntroSection name={props.resume.name} role={props.resume.role} />
                        <AboutMeSection title={props.resume.sections[0].title} description={props.resume.sections[0].description} />
                        <SkillsSection title={props.resume.sections[1].title} skills={props.resume.sections[1].skills}/>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MainContent;