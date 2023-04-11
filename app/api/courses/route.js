import { v4 as uuidv4 } from "uuid"
import { NextResponse } from "next/server"
import courses from "./data.json"

// GET /api/courses
// ************************************************************
export async function GET(request) {
  return NextResponse.json(courses)
}

// POST /api/courses passing
// ************************************************************
export async function POST(request) {
  const { title, description, level } = await request.json()

  const newCourse = {
    id: uuidv4(),
    title,
    description,
    level,
  }

  courses.push(newCourse)

  return NextResponse.json(courses)
}
