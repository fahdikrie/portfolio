interface PostPreview {
  id: string;
  date?: string;
  type?: string[];
  slug?: string;
  tags?: string[];
  summary?: string;
  title?: string;
  status?: string[];
}

interface PostDetail extends PostPreview {
  readTime?: string;
}
