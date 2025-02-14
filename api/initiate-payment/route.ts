import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

const FLW_SECRET = process.env.FLW_SECRET_KEY as string;

export async function POST(req: NextRequest) {
  try {
    const { amount, email } = await req.json();

    const response = await axios.post(
      "https://api.flutterwave.com/v3/payments",
      {
        amount,
        currency: "NGN",
        customer: { email },
        redirect_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment-success`,
      },
      {
        headers: { Authorization: `Bearer ${FLW_SECRET}` },
      }
    );

    return NextResponse.json({ paymentUrl: response.data.data.link }, { status: 200 });
  } catch (error) {
    console.error("Error initiating payment:", error);
    return NextResponse.json({ message: "Payment initiation failed" }, { status: 500 });
  }
}
