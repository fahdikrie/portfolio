import RSSParser from 'rss-parser'
import nc from "next-connect";
import useSWR from "swr";
import cors from "cors";

const handler = nc()
  // use connect based middleware
  .use(cors())
  .get(async (req, res:any) => {
    try {
      let parser = new RSSParser({
        customFields: {
          item: ['letterboxd:watchedDate']
        }
      })

      let feed = await parser.parseURL(process.env.NEXT_PUBLIC_LETTERBOXD_RSS)
      console.log(feed)
      return res.status(200).json(feed)

    } catch(err) {
      console.log(err)
    }
  })


export default handler;