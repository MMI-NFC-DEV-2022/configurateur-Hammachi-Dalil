export interface Basket {
  semelle?: string;
  empeigne?: string;
  pointe?: string;
  oeillet?: string;
  bande?: string;
  languette?: string;
  lacet?: string;
  trimestre?: string;
}

export const colors = {
  "#000000": "Noir",
  "#FFFFFF": "Blanc",
  "#FF0000": "Rouge",
  "#00FF00": "Vert",
  "#0000FF": "Bleu",
  "#FFFF00": "Jaune",
  "#FF00FF": "Magenta",
  "#00FFFF": "Cyan",
  "#C0C0C0": "Gris clair",
  "#808080": "Gris",
  "#800000": "Marron",
  "#808000": "Olive",
};

export const materiaux = [
  {
    value: "/images/cuir.jpg",
    label: "Cuir",
  },
  {
    value: "https://th.bing.com/th/id/OIP.hmgEREm7jNOuoYEI3xh1CAHaHa?rs=1&pid=ImgDetMain",
    label: "Tissu",
  },
  {
    value: "https://th.bing.com/th/id/R.b298d42fbb57e922feb1c5c7759b2998?rik=pftTtir1vOTQBw&pid=ImgRaw&r=0",
    label: "Synthétique",
  },
];
