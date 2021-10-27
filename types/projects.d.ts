interface Projects {
  data: Project[];
  error?: boolean;
}

interface Project {
  image: string;
  name: string;
  time: string;
  desc: string;
  descpoints: string[];
  stacks: string[];
  overlay: string;
  color: string;
}
