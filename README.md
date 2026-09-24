# cloudflare_status_bot
A minimal cloudflare worker for serving status of a selection of websites/services.

## Deploy guide:

1. Install [Node.JS](https://nodejs.org/en).
2. Clone repo.
3. navigate to status bot directory.
4. Deploy with `npx wrangler deploy`.
5. In cloudflare dashboard navigate to created worker -> settings -> add environment variable
6. Add Key: "URLS" and Value: \<comma separated list of URLS\>. Example: "https://foo.com, https://bar.com".
   
