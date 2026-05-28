import StudentCard from "./Components/StudentCard.jsx";

function App() {
  const students = [
    { name: "Vivek Sharma", course: "B.Tech DS", marks: 95 },
    { name: "Prashant Chaudhary", course: "B.Tech CS", marks: 89 },
    { name: "Shanu Kumar", course: "B.Tech IT", marks: 99 },
  ];

  return (
    <div className="AppDefault">
      <h1>Student Card App</h1>
      <p className="subtitle">Light Theme | Print Friendly Layout</p>

      <div className="cardGrid">
        {students.map((student) => (
          <StudentCard
            key={student.name}
            name={student.name}
            course={student.course}
            marks={student.marks}
          />
        ))}
      </div>
    </div>
  );
}

export default App;