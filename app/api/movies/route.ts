
import { MoviesForm } from "@/types/routes";
import { createClient } from "@supabase/supabase-js";
import { type NextRequest } from 'next/server';

export async function GET() {
  try {
    const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_KEY!);
    const { data } = await supabase
      .from("movies")
      .select()
      .order("id", { ascending: true })
    return Response.json(data);
  } catch (error) {
    console.log(error);
    return Response.json({ error: 'Something went wrong' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {

  const dataIncoming: MoviesForm = await request.json();

  if (!dataIncoming.Title || !dataIncoming.Director || !dataIncoming.Year || !dataIncoming.Category || !dataIncoming.Link_image) {
    return Response.json({ error: 'Missing data' }, { status: 400 })
  }

  try {
    const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_KEY!);
    const { data } = await supabase
      .from('movies')
      .insert([
        { Title: `${dataIncoming.Title}`, 
          Director: `${dataIncoming.Director}`, 
          Year: `${dataIncoming.Year}`, 
          Category: `${dataIncoming.Category}`, 
          Link_image: `${dataIncoming.Link_image}` },
      ])
      .select()
    return Response.json(data);
  } catch (error) {
    console.log(error);
    return Response.json({ error: 'Something went wrong' }, { status: 500 })
  }

}