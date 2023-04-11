import Link from "next/link"

const fetchCourses = async () => {
  const res = await fetch("http://localhost:3000/api/courses", {
    next: { revalidate: 60 },
  })
  const courses = await res.json()
  return courses
}

export default async function Courses() {
  const courses = await fetchCourses()

  return (
    <div className="courses">
      {courses.map((course) => (
        <div key={course.id} className="card">
          <h2>{course.title}</h2>
          <small>Level: {course.level}</small>
          <p>{course.description}</p>
          <Link href={"#"} className="btn">
            Go To Course
          </Link>
        </div>
      ))}
    </div>
  )
}
