import axios from 'axios';
import { NextResponse } from "next/server";

export async function POST(request) {
  const payload = await request.json();
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chat_id = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chat_id) {
    return NextResponse.json({
      success: false,
    }, { status: 200 });
  };

  try {
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const message = `New message from ${payload.name}\n\nEmail: ${payload.email}\n\nMessage:\n ${payload.message}\n\n`;

    const res = await axios.post(url, {
      text: message,
      chat_id: process.env.TELEGRAM_CHAT_ID
    });

    if (res.data.ok) {
      return NextResponse.json({
        success: true,
        message: "Message sent successfully!",
      }, { status: 200 });
    };
  } catch (error) {
    console.log(error.response.data)
    return NextResponse.json({
      message: "Message sending failed!",
      success: false,
    }, { status: 500 });
  }
};

export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000"); // Update with your frontend origin
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    // Preflight request
    res.status(200).end();
    return;
  }

  // Your contact handling logic goes here
  res.status(200).json({ message: "Contact form submitted!" });
}

// pages/api/contact.js

