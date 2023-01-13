const API_KEY = "be4afa03f168cfa15bf1a322864f9c1e";

async function getInfoAPi() {
  try {
    const request = await fetch(
      `https:api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=${API_KEY}`
    );

    if (!request.ok) {
      throw new Error(`Erreur: ${request.status}`);
    }

    const data = await request.json();
    console.log("data", data);
  } catch (error) {
    console.log(error);
  }
}

window.addEventListener("load", getInfoAPi);