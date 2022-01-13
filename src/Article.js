

function Article(props) {
    return (
        <>
            <article className="{article animation-translate animation-item-2}">
                <p>
                    {props.description}
                </p>
            </article>
        </>
    );
}

export default Article;