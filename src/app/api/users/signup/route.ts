import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect(); // connecting the database

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, email, password } = reqBody;
    console.log("reqBody is :", reqBody);

    // Check if user already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      if (existingUser.username === username) {
        throw new Error(
          "Username already exists. Please choose a different username."
        );
      }
      if (existingUser.email === email) {
        throw new Error("Email already exists. Please use a different email.");
      }
    }

    // Basic validation
    if (!username || typeof username !== "string") {
      throw new Error("Username is required and must be a string.");
    }
    if (!email || typeof email !== "string") {
      throw new Error("Email is required and must be a string.");
    }
    if (!password || typeof password !== "string" || password.length < 8) {
      throw new Error(
        "Password is required and must be at least 8 characters long."
      );
    }

    // Hash password with bcrypt
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // Save user to database
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    console.log("saved user is :", savedUser);

    return NextResponse.json({
      message: "User created successfully.",
      success: true,
      savedUser,
    });
  } catch (error: any) {
    console.error("Error creating user:", error.message);

    let errorMessage = "An error occurred during signup. Please try again.";

    if (error.message.includes("Username already exists")) {
      errorMessage =
        "Username already exists. Please choose a different username.";
    } else if (error.message.includes("Email already exists")) {
      errorMessage = "Email already exists. Please use a different email.";
    } else if (error.message.includes("Password is required")) {
      errorMessage = "Password must be at least 8 characters long.";
    } else if (error.message.includes("Username is required")) {
      errorMessage = "Username is required.";
    } else if (error.message.includes("Email is required")) {
      errorMessage = "Email is required.";
    }

    return NextResponse.json({ error: errorMessage }, { status: 400 });
  }
}
