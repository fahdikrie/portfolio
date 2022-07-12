interface LayoutProps {
  children: React.ReactNode;
  pageTitle: string;
  pageDescription: string;
}

interface RegularLayoutProps extends LayoutProps {
  currentPage?: string;
}
