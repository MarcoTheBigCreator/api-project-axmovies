
import { createClient } from "@supabase/supabase-js";

export async function GET(request: Request) {
  const supabase =  createClient(
    process.env.SUPABASE_URL!, 
    process.env.SUPABASE_KEY!
    )
    const { data, error } = await supabase
    .from('books')
    .select('*')
    if (error) {
      return new Response(error.message, { status: 500 })
    }
    return new Response(JSON.stringify(data), { status: 200 })
}