const strongify = (string) => {
  return `
    <strong
      style="
        text-decoration: none;
        text-decoration-color: purple;
      "
    >
      ${string}
    </strong>
    `;
};

export const Projects = [
  {
    image: '/assets/projects/siput.png',
    name: 'Sistem Informasi <br/> Publikasi Terpadu',
    time: 'Feb 2020 – Sep 2020 @ FUKI',
    desc:
      `Appointed as the project's PIC. Implemented new features, such as ${strongify(
        'push notification'
      )} using Django built-in SMTP, ` +
      `${strongify('issue posting feature')}, ${strongify(
        'improved functionality'
      )}, and ${strongify('revamped the front-end')}.`,
    descpoints: [
      `Appointed as the ${strongify(
        `project's PIC`
      )}, In charge of cooperating with the project's owner & managing tasks for a team of two`,
      `Implemented ${strongify(
        `push notification`
      )} using Django built in SMTP`,
      `Implemented other features such as ${strongify(
        `issue posting feature`
      )} & ${strongify(`event management page`)}`,
    ],
    stacks: ['django', 'html', 'css', 'jquery'],
    overlay: 'rgba(41, 110, 115, 0.8)',
    color: '#f2d746',
  },
  {
    image: '/assets/projects/pmb.png',
    name: 'Website Pembinaan <br/> Mahasiswa Baru',
    time: 'Jul 2020 – Sep 2020 @ Ristek',
    desc:
      `Appointed as the project's PIC. Implemented new features, such as ${strongify(
        'push notification'
      )} using Django built-in SMTP, ` +
      `${strongify('issue posting feature')}, ${strongify(
        'improved functionality'
      )}, and ${strongify('revamped the front-end')}.`,
    descpoints: [''],
    stacks: ['react', 'react-hooks', 'redux', 'styled-components'],
    overlay: 'rgba(11, 20, 130, 0.8)',
    color: '#bae0e6',
  },
  {
    image: '/assets/projects/fuki.png',
    name: 'Website Profil <br/> FUKI 2021',
    time: 'Jan 2021 – Feb 2021 @ FUKI',
    desc:
      `Appointed as the project's PIC. Implemented new features, such as ${strongify(
        'push notification'
      )} using Django built-in SMTP, ` +
      `${strongify('issue posting feature')}, ${strongify(
        'improved functionality'
      )}, and ${strongify('revamped the front-end')}.`,
    descpoints: [
      `Appointed as the ${strongify(
        `project's PIC`
      )}, In charge of cooperating with the project's owner & managing tasks for a team of two`,
      `Implemented ${strongify(
        `push notification`
      )} using Django built in SMTP`,
      `Implemented other features such as ${strongify(
        `issue posting feature`
      )} & ${strongify(`event management page`)}`,
    ],
    stacks: ['django', 'html', 'css', 'jquery'],
    overlay: 'rgba(25, 74, 130, 0.9)',
    color: '#a5c255',
  },
  {
    image: '/assets/projects/fuki-oprec.png',
    name: 'Web Recruitment <br/> FUKI 2021',
    time: 'Feb 2021 @ FUKI',
    desc:
      `Appointed as the project's PIC. Implemented new features, such as ${strongify(
        'push notification'
      )} using Django built-in SMTP, ` +
      `${strongify('issue posting feature')}, ${strongify(
        'improved functionality'
      )}, and ${strongify('revamped the front-end')}.`,
    descpoints: [
      `Appointed as the ${strongify(
        `project's PIC`
      )}, In charge of cooperating with the project's owner & managing tasks for a team of two`,
      `Implemented ${strongify(
        `push notification`
      )} using Django built in SMTP`,
      `Implemented other features such as ${strongify(
        `issue posting feature`
      )} & ${strongify(`event management page`)}`,
    ],
    stacks: ['django', 'html', 'css', 'jquery'],
    overlay: 'rgba(140, 150, 163, 0.8)',
    color: '#262626',
  },
  {
    image: '/assets/projects/ristek-oprec.png',
    name: 'Web Recruitment <br/> Ristek 2021',
    time: 'Mar 2020 @ Ristek',
    desc:
      `Appointed as the project's PIC. Implemented new features, such as ${strongify(
        'push notification'
      )} using Django built-in SMTP, ` +
      `${strongify('issue posting feature')}, ${strongify(
        'improved functionality'
      )}, and ${strongify('revamped the front-end')}.`,
    descpoints: [''],
    stacks: ['react', 'react-hooks', 'redux', 'styled-components'],
    overlay: 'rgba(150, 55, 134, 0.8)',
    color: '#fad7f4',
  },
];
