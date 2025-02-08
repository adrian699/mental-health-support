import { NextResponse } from "next/server"
import { MongoClient } from "mongodb"
import bcrypt from "bcryptjs"

const uri = process.env.MONGODB_URI
const client = new MongoClient(uri)

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    await client.connect()
    const database = client.db("mental_health_support")
    const users = database.collection("users")

    // Check if user exists
    const user = await users.findOne({ email })

    if (user) {
      // User exists, verify password
      const isMatch = await bcrypt.compare(password, user.password)
      if (isMatch) {
        return NextResponse.json({ message: "Login successful" }, { status: 200 })
      } else {
        return NextResponse.json({ message: "Invalid credentials" }, { status: 401 })
      }
    } else {
      // User doesn't exist, create new user
      const hashedPassword = await bcrypt.hash(password, 10)
      const result = await users.insertOne({ email, password: hashedPassword })
      return NextResponse.json({ message: "User created successfully" }, { status: 201 })
    }
  } catch (error) {
    console.error("An error occurred", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  } finally {
    await client.close()
  }
}

