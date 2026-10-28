# Mobile UI notes

Keep these behaviours when updating the site or reusing the USA and UK landing page layout.

- Check at 320 px and 390 px as well as desktop widths. Keep the document free of horizontal overflow; the landing page section tabs may scroll inside their own strip.
- Keep the global header compact and its touch targets usable. On landing pages, Free counselling links directly to the page's embedded Zoho form. On other pages it retains the home consultation link.
- Landing pages always render in light mode, including the first frame when the saved site theme is dark. Restore the saved site theme on leaving a landing page.
- The landing page mobile call and enquiry bar appears after the hero has passed. It must not cover the hero button, and its guidance link should bring the embedded form into view.
- Student story cards use the full phone width with readable names, courses and university labels. University names must wrap rather than disappear in a narrow pill.
- Country choices keep their full labels visible on phones, including New Zealand and Dubai / UAE.
- Utility pages such as Premium, Newsroom and Free Resources need a dark hero surface when the saved site theme is dark so headings remain legible. Institution hero secondary links also need readable contrast.
- Keyboard focus should remain visible across links, buttons and form controls, and phone inputs should use at least 16 px text to avoid mobile browser zoom.
- When adding another destination landing page, edit its content file and check for country-specific copy, official links and image alt text. Keep the shared section structure and verify the mobile hero, horizontal tabs, cost table, visa section, consultation links and footer.

Before shipping a mobile change, review the home page, countries list and detail, student stories, country chooser, and every landing page in a phone viewport. Also check the landing consultation links, header menu, section tabs, phone link and saved dark theme navigation. Run `npm run build` from the repository root.
