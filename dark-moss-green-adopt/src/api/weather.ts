import { NextApiRequest, NextApiResponse } from "next";

// import the OpenWeatherMap API key from the .env.local file
const apiKey = process.env.OPENWEATHERMAP_API_KEY;
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // extract the query parameters from the request object
  const { q, lat, lon } = req.query;

  // if the API key isn't found in the .env.local file,
  // return a 500 error to the frontend
  if (!apiKey) {
    res.status(500).json({ error: "API key not found." });
    return;
  }

  // if either the city name (q), or coordinates (lat and lon) aren't
  // provided, return a 400 error to the frontend
  if (!q && (!lat || !lon)) {
    res
      .status(400)
      .json({ error: "Please provide either city or coordinates." });
    return;
  }

  // because this is running server-side, we're wrapping the API call
  // in a try / catch block to catch any errors that may occur,
  // and if so, return a 500 error to the frontend
  try {
    const query = q ? `q=${q}` : `lat=${lat}&lon=${lon}`;
    const response = await fetch(
      `${apiUrl}?${query}&appid=${apiKey}&units=metric`
    );
    const data = await response.json();

    res.status(200).json(data);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({
        error: error || "Server error while trying to fetch weather data",
      });
    }
  }
};
