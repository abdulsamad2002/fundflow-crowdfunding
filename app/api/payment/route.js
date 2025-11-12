import Payment from "@/models/Payment";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get("username");

    console.log("username:", username);
    const users = await Payment.find({ reciever: username });
    users.forEach((element) => {
      console.log(element);
    });
    return new Response(JSON.stringify(users));
  } catch (err) {
    console.error("API ERROR:", err);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
    });
  }
}
