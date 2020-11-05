import SiputPNG from 'public/assets/projects/siput.png';
import PmbPNG from 'public/assets/projects/pmb.png';

const strongify = (string) => {
  return(
    `<strong
      style="text-decoration: none;
             text-decoration-color: purple;">
      ${string}</strong>`
)};

export const Projects = [
  {
    id: 1,
    image: SiputPNG,
    name: "Sistem Informasi Publikasi Terpadu (SIPUT) — FUKI",
    time: "Feb 2020 – Present",
    desc: `Appointed as the project's PIC. Implemented new features, such as ${strongify('push notification')} using Django built-in SMTP, ` +
          `${strongify('issue posting feature')}, ${strongify('improved functionality')}, and ${strongify('revamped the front-end')}.`,
    stacks: [
      "html",
      "css",
      "django"
    ]
  },
  {
    id: 2,
    image: PmbPNG,
    name: "Website Pembinaan Mahasiswa Baru (Web PMB) — Ristek",
    time: "July 2020 – Present",
    desc: `Appointed as the project's PIC. Implemented new features, such as ${strongify('push notification')} using Django built-in SMTP, ` +
          `${strongify('issue posting feature')}, ${strongify('improved functionality')}, and ${strongify('revamped the front-end')}.`,
    stacks: [
      "react",
      "react-hooks",
      "redux",
      "styled-components",
      "django-rest-api"
    ]
  },
]
