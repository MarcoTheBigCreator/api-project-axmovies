
import { MoviesForm, Movies } from "@/types/routes";
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
        {
          Title: `${dataIncoming.Title}`,
          Director: `${dataIncoming.Director}`,
          Year: `${dataIncoming.Year}`,
          Category: `${dataIncoming.Category}`,
          Link_image: `${dataIncoming.Link_image}`
        },
      ])
      .select()
    return Response.json(data);
  } catch (error) {
    console.log(error);
    return Response.json({ error: 'Something went wrong' }, { status: 500 })
  }

}

export async function PATCH(request: NextRequest) {

  const dataIncoming: Movies = await request.json();

  if (!dataIncoming.Title || !dataIncoming.Director || !dataIncoming.Year || !dataIncoming.Category || !dataIncoming.Link_image) {
    return Response.json({ error: 'Missing data' }, { status: 400 })
  }

  try {
    const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_KEY!);
    const { data } = await supabase
      .from('movies')
      .update({
        Title: `${dataIncoming.Title}`,
        Director: `${dataIncoming.Director}`,
        Year: `${dataIncoming.Year}`,
        Category: `${dataIncoming.Category}`,
        Link_image: `${dataIncoming.Link_image}`
      })
      .eq('id', `${dataIncoming.id}`)
      .select()
    return Response.json(data);
  } catch (error) {
    console.log(error);
    return Response.json({ error: 'Something went wrong' }, { status: 500 })
  }

}

export async function PUT(request: NextRequest) {

  const dataIncoming: Movies = await request.json();

  if (!dataIncoming.Title || !dataIncoming.Director || !dataIncoming.Year || !dataIncoming.Category || !dataIncoming.Link_image) {
    return Response.json({ error: 'Missing data' }, { status: 400 })
  }

  try {
    const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_KEY!);
    const { data } = await supabase
      .from('movies')
      .update({
        Title: `${dataIncoming.Title}`,
        Director: `${dataIncoming.Director}`,
        Year: `${dataIncoming.Year}`,
        Category: `${dataIncoming.Category}`,
        Link_image: `${dataIncoming.Link_image}`
      })
      .eq('id', `${dataIncoming.id}`)
      .select()
    return Response.json(data);
  } catch (error) {
    console.log(error);
    return Response.json({ error: 'Something went wrong' }, { status: 500 })
  }

}

export async function DELETE(request: NextRequest) {

  const { id }: { id: number } = await request.json();

  if (!id) {
    return Response.json({ error: 'Missing data' }, { status: 400 })
  }

  try {
    const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_KEY!);
    const { data } = await supabase
      .from('movies')
      .delete()
      .eq('id', `${id}`)
      .select()
    return Response.json(data);
  } catch (error) {
    console.log(error);
    return Response.json({ error: 'Something went wrong' }, { status: 500 })
  }

}

export async function HEAD() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'text/html',
      'Access-Control-Allow-Methods': 'POST, GET, PUT, PATCH, DELETE, HEAD, OPTIONS, TRACE',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
}

export async function OPTIONS() {
  const asciiMeme =
    '⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣰⣇⠀⠀⠀⠀⠀⠀⣠⣴⠶⢤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n' +
    '⠀⠀⠀⢀⣄⠀⠀⠀⠀⠀⡏⠘⣆⢀⣠⠞⠛⠛⠉⣀⣤⣤⣬⣉⡛⠛⠛⠲⢤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n' +
    '⠀⠀⠀⣼⡏⠳⣄⠀⠀⢰⡇⠀⠸⡟⠷⣄⣀⣀⣀⣈⠛⠻⠾⢿⣿⣷⠀⠀⠀⠈⠙⠛⠛⠛⠦⣤⣀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n' +
    '⠀⠀⠀⠸⡇⠀⠈⢳⡀⢸⡇⠀⠀⢿⠀⢀⣍⠉⠉⠉⠙⠶⣤⣄⣀⣀⣶⣦⣤⡀⠀⠀⠀⠀⠀⣬⣭⣉⠉⠛⠳⢦⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n' +
    '⠀⠀⠀⠀⠹⡄⠀⠀⠙⣾⡃⠀⠀⢸⡔⠀⢻⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠻⢭⣉⣀⣀⠀⠀⠀⠈⢙⣛⣁⡀⠀⠀⠈⠙⣛⣛⠓⢶⣄⡀⠀⠀⠀⠀⠀⠀⠀\n' +
    '⢴⡦⠤⠤⣤⣹⣆⠀⢈⣿⣇⠀⠀⢸⣷⣀⡾⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠙⠲⣤⣀⣀⠛⠿⣽⣿⣶⣄⠈⠛⠿⢿⡦⠈⠙⠛⠛⢻⣿⣿⡆⠀\n' +
    '⠈⠳⣄⡀⠀⠈⠛⢿⣻⣿⣿⠛⠛⠛⢻⣶⡦⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠉⠛⠶⣄⣉⠉⠀⠀⠀⠀⣀⣀⣤⠤⢶⡿⣹⠟⠀⠀⠀\n' +
    '⠀⠀⠈⠙⠲⠤⣄⣠⣿⠈⠉⣴⠞⠶⠾⣿⣅⡀⠙⣲⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⠞⠋⠀⠀⠀⠀⣠⡞⠁⢸⠏⠀⠀⠀⠀\n' +
    '⣀⣤⠴⠖⠒⠚⠉⠩⣿⣠⣴⡏⠀⠀⠀⠀⠈⠻⣾⡿⠏⢳⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⠿⠿⣷⣄⡀⠀⠙⢿⣏⠀⠈⠉⠉⠉⠉⠀⠀\n' +
    '⠉⠙⠓⠒⠶⠶⢖⣷⠿⣿⠋⢿⡄⠀⠀⠀⠀⠀⠀⠛⣦⣀⣽⣆⠀⠀⠀⠀⣀⣀⣤⡤⢤⣤⡤⠤⣤⣄⣀⣠⠞⠁⠀⠀⠀⢀⣤⣾⣿⣧⣤⢿⢠⣤⣤⣀⡀\n' +
    '⠀⠀⠀⠀⣠⠴⠋⢁⣀⡽⣦⡴⡿⠷⣄⣀⡀⠀⠀⠀⢸⡿⠋⠘⡓⠒⠛⠻⣿⣇⣠⣤⣼⣿⣧⣄⣀⣾⡿⠛⠳⢤⣤⢤⡶⠛⠋⠉⠀⠀⠀⠀⠀⣀⣤⠾⠋\n' +
    '⠀⠀⠀⠈⠛⠛⢻⡉⠁⠀⠈⠙⢦⣤⣤⣭⣉⣻⣿⡟⠉⠁⠐⣿⡷⠀⣤⠞⠋⠉⠁⠀⠀⠀⠀⠈⠉⠛⠳⣦⢠⣾⡿⠀⣻⣀⣀⣀⣤⣤⠶⣾⠋⠁⠀⠀⠀\n' +
    '⠀⠀⠀⠀⠀⠀⢸⣷⣤⡀⠀⠐⡏⠀⠀⠀⠈⠉⠙⠛⠛⠿⠙⠳⣄⠀⠻⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡾⠉⢈⡟⠋⠉⠙⠛⠿⣽⣴⡟⠀⠀⠀⠀⠀\n' +
    '⠀⠀⠀⠀⠀⣾⡛⠉⣄⣷⠀⠀⠙⢦⣄⣀⣀⣀⣀⣠⡤⠖⠃⠀⠈⠳⣾⡿⠳⢤⣀⣀⣀⣀⣀⣠⣶⣯⠁⣠⠞⠛⢶⣶⢤⣤⣀⣀⣀⣈⣹⣦⣄⠀⠀⠀\n' +
    '⠀⠀⠀⠀⠺⣏⣉⣉⣉⣼⡂⠀⠀⠀⢀⣈⣉⣉⣀⡀⠀⠀⠀⠀⠀⠀⠈⠙⠦⣤⣀⣹⣿⡏⠉⠁⣀⣸⠿⠿⣷⣄⡀⠀⠙⢿⣏⠀⠈⠉⠉⠉⠉⠀⠀⠀\n' +
    '⠀⠀⠀⠀⠀⢿⣉⣉⣁⡼⠁⠀⠀⠈⠉⠉⣽⠉⠉⠉⡿⢲⠦⣄⡀⠀⠀⠀⠀⠀⠈⠉⠉⠉⠉⠉⢷⡀⠀⠹⣿⣿⣷⣦⣤⣙⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀\n' +
    '⠀⠀⠀⠀⠀⠀⠈⣿⠁⠀⠀⠀⠀⠀⠠⡄⠉⠙⠒⠾⠡⣏⡀⠀⢹⠶⣄⠀⠀⠀⠀⢠⡞⠁⠀⣿⠀⢀⡼⠋⣸⣿⣛⣾⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n' +
    '⠀⠀⠀⠀⠀⠀⠀⣿⡀⠀⠀⠀⠀⠀⠀⠉⠓⠂⠐⠶⣄⠀⠉⠛⠋⠀⠘⠂⠀⠀⢠⡞⠁⠀⣾⣡⠴⠿⣿⡾⠁⠀⠀⠀⣠⣡⠀⠀⠉⠉⠉⠉⠀⠀⠀⠀\n' +
    '⠀⠀⠀⠀⠀⠀⠀⣿⣧⠤⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠛⠛⠁⠀⠀⠀⠀⠀⠘⢧⣴⠞⠁⠀⣾⣤⡀⢻⢿⣽⠏⠀⠀⠀⠀⣠⡞⠁⢸⠏⠀⠀⠀⠀\n' +
    '⠀⠀⠀⠀⠀⠀⠀⢻⡿⢧⠀⠈⠙⠲⡦⢤⣤⣤⡤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⣼⠟⠁⠀⠀⢸⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n' +
    '⠀⠀⠀⠀⠀⠀⠀⣿⡿⢧⠀⠈⠙⠲⡦⢤⣤⣤⡤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⠤⢿⣧⣀⣀⡾⠿⠿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n\n' +
    `Iba en la parte de hasta atrás del camión con mi pareja (ahora mi ex) y 
    recuerdo que estaba igual de enferma que yo, asi que nos sentamos en los dos 
    lugares arrinconados y me saque el aparato y ella me dijo “no mames angel hay 
    gente al lado” y le dije” No hay pedo solo no lo hagas muy notable” y que me 
    empezó a chaquetear en corto y llegaron dos vatos que se sentaron alado de 
    nosotros pero ellos iban bien en su pedo platicando sobre halo, asi seguimos 
    hasta que ya me iba a venir y le dije “ya me voy a venir” y ella se bajo en corto 
    a tragarse los mecos, a esas alturas los vatos de alado ya se habían dado cuenta 
    y me voltearon a ver y les dije “que tal buenas noches, halo murio en reach”`

  const lines = asciiMeme.split('\n');
  const formattedString = lines.map(line => `${line}<br>`).join('');

  return new Response(`<p>${formattedString}</p>`, {
    headers: { 'Content-Type': 'text/html' }
  });
}