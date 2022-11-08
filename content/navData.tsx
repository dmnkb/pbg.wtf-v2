export interface NavElem {
  id: number;
  title: string;
  slug: string;
}

const navData: NavElem[] = [
  {
    id: 0,
    title: "Impressum",
    slug: "impressum",
  },
  {
    id: 1,
    title: "Datenschutz",
    slug: "datenschutz",
  },
];

export default navData;
