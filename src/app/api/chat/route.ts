import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export const runtime = "nodejs";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const companyInfo = `
We believe in equipping socially focused organizations (nonprofits, social enterprises, foundations, and schools) with the mindsets, frameworks, and tools to create innovators who impact their communities and the world.
Innovation is a key driver of growth in the 21st-century economy. And organizations – of all kinds – increasingly rely on innovators to create and deliver this key driver in a constantly changing, globally competitive environment. We need to understand innovation – what it is, how to harness it, and why it is important.

Our goal is to provide you and your team with the mindset, framework, and tools to develop new insights about your users (whoever they are), create breakthrough ideas based on user feedback, and then help you convince key stakeholders of the value of those ideas. 

But we believe in the essence of a “lab” – places to play and take risks and experiment. We provide workshops on-site as well as team coaching for innovation projects. We also develop community workshops that introduce design thinking principles to organizational leaders and then provide coaching beyond the workshops.
stacy landreth grau, phd, Co Founder
Cedric james, ms, Co Founder

Contact us at stacygrau@designinnovationlab.com

Our company offers innovation workshops and coaching:
- Human-Centered Design
- Design Sprints
- Creative Teams
- Systems Mapping
- Work-Life Design
- Creative Coaching
- Team Design & Coaching
- Strategic Planning
`;

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();
    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "system",
          content: `You are a helpful assistant for an innovation company. 
Answer only using the info below. 
If a question isn't about these services, reply: 
"I'm sorry, I can only answer questions about our company's workshops and coaching."

${companyInfo}`,
        },
        { role: "user", content: message },
      ],
      max_tokens: 200,
      temperature: 0.4,
    });

    const reply = completion.choices[0]?.message?.content?.trim() ?? "";
    return NextResponse.json({ reply });
  } catch (err) {
    console.error("OpenAI Error:", err);
    return NextResponse.json({ error: "Request failed" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ ok: true });
}
