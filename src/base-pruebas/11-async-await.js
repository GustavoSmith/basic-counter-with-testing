import { config } from "dotenv";

config();

export const getImagen = async () => {
  try {
    // eslint-disable-next-line no-undef
    const apiKey = process.env.GIPHY_API_KEY;
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();

    const { url } = data.images.original;
    return url;
  } catch (error) {
    return "No se encontró la imagen :(";
  }
};
