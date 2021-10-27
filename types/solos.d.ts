interface Solos {
  data: Solo[];
  error?: boolean;
}

interface Solo {
  image: string;
  name: string;
  time: string;
  desc: string;
  descpoints: string[];
  stacks: string[];
  overlay: string;
  color: string;
}
