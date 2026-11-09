
export const localInfo = {
  name: "Paul Pizzas",
  address: "Av. Lima Sur 491, Lurigancho-Chosica 15468",
  location: "Chosica, Lima, Perú",
  phoneDisplay: "(01) 7799539",
  phoneHref: "tel:+5117799539",
  hours: "Consulta nuestro horario de atención",
  closingTime: "Google Maps indica cierre a las 12:00 a. m.",
  mapsQuery: "Paul Pizzas, Av. Lima Sur 491, Lurigancho-Chosica, Lima, Perú",
};

export const getGoogleMapsUrl = () => {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    localInfo.mapsQuery
  )}`;
};

export const getGoogleMapsEmbedUrl = () => {
  return `https://maps.google.com/maps?q=${encodeURIComponent(
    localInfo.mapsQuery
  )}&z=16&output=embed`;
};
