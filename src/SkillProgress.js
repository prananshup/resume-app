
function SkillProgress(props) {
    return (
        <>
            <strong class="progress-label">{props.name}</strong>
            <div class="progress progress-animated mb-9">
                <div class="progress-bar" role="progressbar" style={{width: props.score + '%'}} aria-valuenow={props.score} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </>
    );
}

export default SkillProgress;