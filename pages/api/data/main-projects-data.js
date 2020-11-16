// import SiputPNG from 'public/assets/projects/siput.png';
// import PmbPNG from 'public/assets/projects/pmb.png';
import SiputPNG from 'public/assets/projects/siput1.png';
import PmbPNG from 'public/assets/projects/pmb1.png';

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
    name: "Sistem Informasi Publikasi Terpadu",
    time: "Feb 2020 – Sep 2020 @ FUKI",
    desc: `Appointed as the project's PIC. Implemented new features, such as ${strongify('push notification')} using Django built-in SMTP, ` +
          `${strongify('issue posting feature')}, ${strongify('improved functionality')}, and ${strongify('revamped the front-end')}.`,
    descpoints: [
      `Appointed as the ${strongify(`project's PIC`)}, In charge of cooperating with the project's owner & managing tasks for a team of two`  ,
      `Implemented ${strongify(`push notification`)} using Django built in SMTP`,
      `Implemented other features such as ${strongify(`issue posting feature`)} & ${strongify(`event management page`)}`
    ],
    stacks: [
      "django",
      "html",
      "css",
      "jquery"
    ]
  },
  {
    id: 2,
    image: PmbPNG,
    name: "Website Pembinaan Mahasiswa Baru",
    time: "Jul 2020 – Sep 2020 @ Ristek",
    desc: `Appointed as the project's PIC. Implemented new features, such as ${strongify('push notification')} using Django built-in SMTP, ` +
          `${strongify('issue posting feature')}, ${strongify('improved functionality')}, and ${strongify('revamped the front-end')}.`,
    descpoints: [
      ''
    ],
    stacks: [
      "react",
      "react-hooks",
      "redux",
      "styled-components",
    ]
  },
]
