import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    console.log("Entering GET function for logout");

    const response = NextResponse.json(
      {
        message: "Logout successful",
        success: true,
      },
      { status: 200 }
    );

    console.log("Clearing token cookie");
    response.cookies.set("token", "", {
      httpOnly: true,
      expires: new Date(0),
    });

    console.log("Logout successful");
    return response;
  } catch (error: any) {
    console.error("Error during logout:", error);
    console.error("Error stack:", error.stack);
    return NextResponse.json(
      { message: "Error during logout" },
      { status: 500 }
    );
  }
}
