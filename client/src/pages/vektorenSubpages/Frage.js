const Frage = (props) => {
    const title = props.title;
    const question = props.question;
    const questionPart1 = props.questionPart1;
    const questionPart2 = props.questionPart2;
    const questionPart3 = props.questionPart3;

    return (
        <div>
            <h4>{title}</h4>
            <p className={'bold'}>{question}</p>
            <div className={"row"}>
                {questionPart1}
                {questionPart2}
                {questionPart3}
            </div>
        </div>
    )
}

export default Frage;