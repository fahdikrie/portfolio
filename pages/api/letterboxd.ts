import { NextApiRequest, NextApiResponse } from 'next';
import RSSParser from 'rss-parser';
import nc from 'next-connect';
import cors from 'cors';

const handler = nc<NextApiRequest, NextApiResponse>()
  .use(cors())
  .get(async (_, res) => {
    try {
      let parser = new RSSParser({
        customFields: {
          item: [
            'letterboxd:watchedDate',
            'letterboxd:filmTitle',
            'letterboxd:memberRating'
          ],
        },
      });

      let feed = await parser.parseURL(process.env.NEXT_PUBLIC_LETTERBOXD_RSS);

      return res.status(200).json(feed);
    } catch (err) {
      return res.status(500).json({
        message: 'Failed to fetch Letterboxd data',
      });
    }
  });

export default handler;
