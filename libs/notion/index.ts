import { NotionAPI } from 'notion-client';

export const NOTION_BLOG_PAGE_ID = process.env.NOTION_BLOG_PAGE_ID;

export const NOTION_JOURNAL_PAGE_ID = process.env.NOTION_JOURNAL_PAGE_ID;

const notion = new NotionAPI();
export default notion;
