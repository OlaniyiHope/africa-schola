# 7. Deploying to cPanel

[← Back to Index](./README.md)

---

Both the PHP API and the React build are hosted on the same cPanel account. The domain serves the React build; the API lives in a subdirectory.

---

## 7.1 Deploying the PHP API

1. Log into **cPanel → File Manager** and navigate to `public_html/`

2. Create a new folder: `public_html/api/`

3. Upload your PHP files into `public_html/api/`:
   ```
   index.php
   cors.php
   helpers.php
   articles.php
   articles.csv
   routes/auth.php
   routes/payments.php
   ```

4. Upload `articles.csv` alongside `helpers.php` — or adjust the path inside `read_csv()` to match where you place it. The path **must** be relative to `__DIR__`.

5. Create `public_html/api/.htaccess` with this content:
   ```apacheconf
   RewriteEngine On
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteRule ^ index.php [QSA,L]
   ```

6. **Test:** Visit `https://afrikascholars.com/api/articles.php` in your browser — you should see JSON.

---

## 7.2 Building & Deploying the React App

7. Set the production API URL in your `.env` file:
   ```env
   VITE_API_URL=https://afrikascholars.com/api
   ```

8. Run the production build:
   ```bash
   npm run build
   ```

9. This creates a `dist/` folder. Upload **all contents** of `dist/` into `public_html/` — **not the `dist` folder itself.**

10. Create `public_html/.htaccess` so React Router handles client-side navigation correctly:
    ```apacheconf
    <IfModule mod_rewrite.c>
      RewriteEngine On
      RewriteBase /
      RewriteRule ^index\.html$ - [L]
      RewriteCond %{REQUEST_FILENAME} !-f
      RewriteCond %{REQUEST_FILENAME} !-d
      RewriteRule . /index.html [L]
    </IfModule>
    ```

> ⚠️ **Important:** The `public_html/.htaccess` above is for the **React SPA router**. It is different from `api/.htaccess` which routes PHP requests. **Both files must exist and must not overwrite each other.**

---

## 7.3 Folder Layout After Deployment

```
public_html/
├── index.html          ← React entry point
├── assets/             ← Bundled JS/CSS from Vite
├── .htaccess           ← SPA fallback rewrite (React Router)
└── api/
    ├── index.php       ← PHP front controller
    ├── cors.php
    ├── helpers.php
    ├── articles.php
    ├── articles.csv
    ├── .htaccess       ← PHP route rewrite
    └── routes/
        ├── auth.php
        └── payments.php
```

---

## 7.4 Vercel Alternative (Frontend Only)

If you prefer to host the React app on Vercel and keep PHP on cPanel:

1. Connect your GitHub repository to Vercel
2. Set environment variables in the Vercel dashboard:
   ```
   VITE_PHP_API_URL  = https://afrikascholars.com/api
   VITE_SUPABASE_URL = <your-supabase-url>
   VITE_SUPABASE_PUBLISHABLE_KEY = <your-supabase-anon-key>
   ```
3. Vercel automatically runs `npm run build` and serves `dist/`
4. The `vercel.json` at the project root handles SPA routing — no manual `.htaccess` needed

---

## 7.5 Deployment Checklist

**PHP API**
- [ ] All PHP files uploaded to `public_html/api/`
- [ ] `articles.csv` is present and path in `read_csv()` is correct
- [ ] `api/.htaccess` exists with the rewrite rule
- [ ] `mod_rewrite` is enabled in cPanel (Apache settings)
- [ ] CORS `$allowed` array includes the production frontend domain
- [ ] Visit `/api/articles.php` and confirm JSON response

**React App**
- [ ] `.env` / Vercel env vars set to production API URL
- [ ] `npm run build` completed without errors
- [ ] `dist/` contents (not the folder) uploaded to `public_html/`
- [ ] `public_html/.htaccess` created with SPA rewrite rule
- [ ] Visit the site and confirm page refreshes don't 404

---

[← React Integration](./06-react-integration.md) · [Troubleshooting →](./08-troubleshooting.md)
