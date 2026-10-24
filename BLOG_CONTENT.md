# Blog content maintenance

The live blog archive is rendered from `app/blog/articles.ts`.

## Update imported articles

Update `OW Scrape/onewindow_blogs.csv`, then from this `site` directory run `node scripts/import-blogs.mjs`. The importer preserves source titles, URLs, thumbnails, and body text while detecting headings and list lines for readable article sections.

## Add an article manually

Edit `app/blog/manual-articles.ts` and add an object matching `BlogArticle`. Use a unique lowercase `slug`; it will automatically appear in the archive and be available at `/blog/<slug>`. Manual articles are merged after CSV records and are not overwritten by the importer.
