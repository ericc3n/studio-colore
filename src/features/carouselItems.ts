interface CarouselType {
  imgSrc: string,
  title: string,
  date: string
}

const carouselItems: CarouselType[] = [
  {
    imgSrc: "/carouselItems/smartBox.jpg",
    title: "Punto vendita smartbox",
    date: "30 Maggio 2020",
  },
  {
    imgSrc: "/carouselItems/immCoordinata.jpg",
    title: "IC Studio Colore",
    date: "30 Maggio 2020",
  },
  {
    imgSrc: "/carouselItems/elettorali.jpg",
    title: "Comunicazione elettorale",
    date: "30 Maggio 2020",
  },
  {
    imgSrc: "/carouselItems/giostra-2048x1229.jpg",
    title: "Allestimento Vetrina BB",
    date: "1 Giugno 2020",
  },
];

export { carouselItems };
export type { CarouselType };