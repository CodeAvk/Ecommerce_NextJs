import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

// Load environment variables
require("dotenv").config();

// Ensure your database connection is established
connect();

export async function POST(request: NextRequest) {
  try {
    console.log("Entering POST function");

    const { email, password } = await request.json();
    console.log("Received email:", email);
    console.log("Received password:", password);

    console.log("Searching for user in database");
    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found");
      return NextResponse.json(
        { message: "Invalid username or password" },
        { status: 401 }
      );
    }
    console.log("User found:", user.email);

    console.log("Comparing passwords");
    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
      console.log("Invalid password");
      return NextResponse.json(
        { message: "Invalid username or password" },
        { status: 401 }
      );
    }
    console.log("Password is valid");

    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };
    console.log("Token data prepared:", tokenData);

    console.log(
      "Checking TOKEN_SECRET:",
      process.env.TOKEN_SECRET ? "exists" : "does not exist"
    );

    if (!process.env.TOKEN_SECRET) {
      console.error("TOKEN_SECRET is not set in the environment");
      return NextResponse.json(
        { message: "Server configuration error" },
        { status: 500 }
      );
    }

    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {
      expiresIn: "1h",
    });
    console.log("Token generated");

    const response = NextResponse.json({
      message: "Login Successful",
      success: true,
    });

    response.cookies.set("token", token, {
      httpOnly: true,
    });
    console.log("Cookie set");

    console.log("Returning successful response");
    return response;
  } catch (error: any) {
    console.error("Error during login:", error);
    console.error("Error stack:", error.stack);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
