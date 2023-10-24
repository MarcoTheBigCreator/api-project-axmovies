
import { createClient } from "@supabase/supabase-js";

export async function GET() {
  try {
    const supabase = createClient(process.env.SUPABASE_URL!,process.env.SUPABASE_KEY!);
    const { data } = await supabase
      .from("books")
      .select()
    return Response.json(data);
  } catch (error) {
    console.log(error);
    return Response.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
