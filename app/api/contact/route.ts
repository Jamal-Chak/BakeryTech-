import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, service, message, honeypot } = body;

        // Simple spam protection
        if (honeypot) {
            return NextResponse.json({ message: "Spam detected" }, { status: 400 });
        }

        // Input validation (basic)
        if (!name || !email || !message) {
            return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
        }

        // In a real app, you would send an email here using SendGrid/Resend/etc.
        console.log("Contact form submission:", { name, email, phone, service, message });

        // Simulate database or email delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        return NextResponse.json({ message: "Success" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
}
