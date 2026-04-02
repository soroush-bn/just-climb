import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // 1. Receive the FormData (the image) from your frontend UI
    const formData = await request.formData();
    
    // 2. Forward it securely from the Next.js server to your AWS EC2 server
    const awsUrl = 'http://ec2-35-182-4-62.ca-central-1.compute.amazonaws.com:8000/api/v1/segment-holds';
    
    const awsResponse = await fetch(awsUrl, {
      method: 'POST',
      body: formData,
      // We pass the exact FormData object without manually setting headers
    });

    if (!awsResponse.ok) {
      throw new Error(`AWS Server Error: ${awsResponse.status}`);
    }

    // 3. Get the results from AWS
    const data = await awsResponse.json();

    // 4. Send the results back to your frontend UI
    return NextResponse.json(data);

  } catch (error: any) {
    console.error("Proxy Error:", error);
    return NextResponse.json(
      { error: 'Failed to process image' }, 
      { status: 500 }
    );
  }
}