# Blog content maintenance

The live blog archive is rendered from `app/blog/blog.ts`. This is the single source file for imported and manually added blog content.

## Update imported articles

Update `OW Scrape/onewindow_blogs.csv`, then from this `site` directory run `node scripts/import-blogs.mjs`. The importer preserves source titles, URLs, thumbnails, and body text while detecting headings and list lines for readable article sections.

## Add an article manually

Edit `app/blog/blog.ts` and add an object to the manual merge, or use `app/blog/manual-articles.ts` for hand-authored entries. Use a unique lowercase `slug`; it will automatically appear in the archive and be available at `/blog/<slug>`. The importer updates only the generated imported records and preserves manual entries.
