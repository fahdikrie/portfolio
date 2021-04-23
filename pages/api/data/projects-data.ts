import SiputPNG from 'public/assets/projects/siput.png'
import PmbPNG from 'public/assets/projects/pmb.png'

const strongify = (string) => {
  return(
    `
    <strong
      style="
        text-decoration: none;
        text-decoration-color: purple;
      "
    >
      ${string}
    </strong>
    `
)};

export const Projects = [
  {
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
    ],
    overlay:"rgba(41, 110, 115, 0.8)"
  },
  {
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
    ],
    overlay:"rgba(11, 20, 130, 0.8)"
  },
  {
    image: SiputPNG,
    name: "Website Profil FUKI 2021",
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
    ],
    overlay:"rgba(41, 110, 115, 0.8)"
  },
  {
    image: PmbPNG,
    name: "Web Pembinaan Mahasiswa Baru",
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
    ],
    overlay:"rgba(11, 20, 130, 0.8)"
  },
  {
    image: SiputPNG,
    name: "Web Recruitment FUKI 2021",
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
    ],
    overlay:"rgba(41, 110, 115, 0.8)"
  },
  {
    image: PmbPNG,
    name: "Web Recruitment Ristek 2021",
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
    ],
    overlay:"rgba(11, 20, 130, 0.8)"
  },
]
