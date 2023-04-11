import { NextResponse } from "next/server"
import courses from "../data.json"

export async function GET(request) {
  // Para sacar querys params. Luego con .get(nameDelParam) nos da el valor
  const { searchParams } = new URL(request.url)
  const query = searchParams.get("query")

  const filteredCourses = courses.filter((course) => {
    return course.title.toLowerCase().includes(query.toLowerCase())
  })
  return NextResponse.json(filteredCourses)
}
