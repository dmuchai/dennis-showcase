# Business consultancy redesign

The website presents Dennis Muchai's software and automation services through Cody Digital Ventures Ltd. It uses factual descriptions of his own business and product work without unverified client statistics or testimonials.

## Enquiries

The default is email-draft mode. The form prepares a mailto link containing the visitor's details, optional context, and brief. The visitor must open their email application, review, and send it. The website does not claim the draft was sent.

The legacy Supabase project's hostname did not resolve during verification. Do not enable database mode until an active project is configured and verified.

To restore database submissions later, configure VITE_CONTACT_MODE=database, VITE_SUPABASE_URL, and VITE_SUPABASE_ANON_KEY in Vercel. Use only the publishable key in the frontend. Review the existing migration's broad authenticated-read policy before collecting enquiries: access to saved enquiries should be restricted to authorised administrators, not every signed-in account. Then test insert, success/error handling, and authorised retrieval.

The extra business, budget, and timeframe context is stored in the existing message column, so no schema expansion is needed.

## Pages

- Home: offer, selected work, services, approach, short biography, FAQ, and enquiry.
- /work: own business/product examples and other projects.
- /work/denncathy and /work/landee: factual case studies.
- /services/business-software, /services/automation, /services/platform-improvements.
- /about and /privacy.

The production Vite configuration and existing npm lockfile are preserved. vite.local.config.ts is a local Windows fallback using Vite's built-in compiler if SWC's native cache cannot load. Run the normal build on Vercel to verify the deployment configuration.

Canonical URLs, sharing metadata, sitemap, and robots.txt use https://dmmuchai.dev. Product screenshots are public homepage captures from October 2026. The social sharing image is a local PNG.
