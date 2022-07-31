interface NavbarData {
  href: string;
  text: string;
}

interface NavbarProps {
  currentPage: string;
}

interface NavbarItemProps extends NavbarData, NavbarProps {}

interface NavbarItemStyleProps {
  isActive: boolean;
}

interface SocialItemProps {
  href: string;
  src: string;
  alt: string;
}
