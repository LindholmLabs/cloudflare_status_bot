# cloudflare_status_bot
A minimal cloudflare worker for serving status of a selection of websites/services.

## Deploy guide:

1. Install [Node.JS](https://nodejs.org/en).
2. Clone repo.
3. navigate to status bot directory.
4. Deploy with `npx wrangler deploy`.
5. In cloudflare dashboard navigate to created worker -> settings -> add environment variable
6. Add Key: "URLS" and Value: \<comma separated list of URLS\>. Example: "https://foo.com, https://bar.com".
   
## Result
<img width="488" height="409" alt="bild" src="https://github.com/user-attachments/assets/037404b3-8272-45ef-95f5-427be6c810e8" />
A minimal status dashboard, that is incredibly easy to develop and deploy using cloudflare workers. 
