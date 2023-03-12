import { PageProps } from 'types/pages';

import Projects from 'components/containers/Projects';
import Layout from '@/components/layout/Regular';

const DESCRIPTION =
  "A page that displays Fahdii's bio, educations, and experiences.";

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
