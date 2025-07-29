import { PageProps } from 'types/pages';

import Layout from '@/components/layout/Regular';
import Projects from 'components/containers/Projects';

const DESCRIPTION = "Stuff that I've worked on in the past.";

const ProjectsPage = ({ router }: PageProps): JSX.Element => (
  <Layout
    pageDescription={DESCRIPTION}
    currentPage={router.pathname}
    pageTitle="Projects"
  >
    <Projects />
  </Layout>
);

export default ProjectsPage;
