function StudentCard({ name, course, marks }) {
    return (
        <article className="studentCard">
            <h2>{name}</h2>
            <p><strong>Course:</strong> {course}</p>
            <p><strong>Marks:</strong> {marks}</p>
        </article>
    );
}

export default StudentCard;