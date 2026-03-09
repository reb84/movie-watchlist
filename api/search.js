export default async function handler(req, res) {
  const { s, i } = req.query;
  const apiKey = process.env.OMDB_API_KEY;

  const param = s ? `s=${s}` : `i=${i}`;
  const response = await fetch(
    `https://www.omdbapi.com/?${param}&type=movie&apikey=${apiKey}`,
  );
  const data = await response.json();

  res.status(200).json(data);
}
