# Publishing checklist

## Automatic on every build (nothing to do)
- Sitemap entry with an accurate lastmod, taken from pubDate / updatedDate
- BlogPosting JSON-LD (author, dates, summary, tags, image), canonical and OG tags
- Related articles at the bottom of every post, picked by shared tags, so older posts link to new ones
- /llms.txt and /rss.xml list the new post
- IndexNow ping to Bing and other engines once the deploy is live (.github/workflows/indexnow.yml)
- Warnings in the build log from scripts/check-posts.mjs

## Per article, in the CMS
1. Summary: answer-first, 2-3 sentences. Sentence 1 answers the question the article is about.
2. One H2 phrased as a question people actually ask, answered in its first sentence.
3. Alt text on the hero image and every inline image.
4. 3 to 5 tags, reusing existing ones so related links connect.
5. Run `npm run check:posts` (or read the warnings in the build log).
6. When you revise a live post, set Updated Date.

## After it is live
7. Search Console: URL Inspection, then Request indexing. Google has no automatic option for blog posts.
8. Medium: set the canonical link to the website URL before publishing.
9. LinkedIn: post without links, put both links in the first comment.
10. After 2 to 4 weeks, ask ChatGPT, Perplexity and Gemini the question the article answers and note whether herruadi.com is cited.
