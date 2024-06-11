export async function POST(request) {
    const { email } = await request.json();
    await fetch(`https://api.moosend.com/v3/subscribers/${process.env.MOOSEND_LIST_ID}/subscribe.json?apikey=${process.env.MOOSEND_API_KEY}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ Email: email })
    });
    return new Response(JSON.stringify("success"));
}