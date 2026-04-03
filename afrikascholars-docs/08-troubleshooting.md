# 8. Common Issues & Fixes

[← Back to Index](./README.md)

---

## Quick Reference

| Issue | Fix |
|-------|-----|
| CORS error in browser console | Check `$allowed` array in `cors.php` includes your exact origin (including `https` vs `http`) |
| 404 on all API routes | Confirm `api/.htaccess` exists and `mod_rewrite` is enabled in cPanel |
| React page refreshes give 404 | The `public_html/.htaccess` SPA rewrite is missing or incorrect |
| `articles.php` returns empty | Check path in `read_csv()` — must be relative to `__DIR__` |
| OPTIONS request fails (preflight) | Make sure the OPTIONS method check and `204` exit is at the top of every endpoint |
| JSON parse error in React | API is returning HTML (PHP error page) — enable PHP error logging and check `error_log` |

---

## Detailed Fixes

### 🔴 CORS Error in Browser Console

**Symptom:** `Access to fetch at '...' from origin '...' has been blocked by CORS policy`

**Causes and fixes:**

1. **Origin not in allowlist** — Open `cors.php` and add your exact origin to `$allowed`:
   ```php
   $allowed = [
       'http://localhost:5173',       // ← must match exactly
       'https://afrikascholars.com',
   ];
   ```
   Note: `http://` and `https://` are different origins. `localhost:5173` and `localhost:5174` are different origins.

2. **OPTIONS preflight not handled** — Every PHP file that handles requests must have this block **before** any output:
   ```php
   if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
       http_response_code(204);
       exit;
   }
   ```

3. **PHP error output before headers** — A PHP warning before `header()` calls will corrupt the response. Enable error logging to file instead of output:
   ```php
   ini_set('display_errors', 0);
   ini_set('log_errors', 1);
   ```

---

### 🔴 404 on All API Routes

**Symptom:** `POST https://afrikascholars.com/api/sch-login` returns 404

**Causes and fixes:**

1. **`api/.htaccess` missing** — The file must exist at `public_html/api/.htaccess` with:
   ```apacheconf
   RewriteEngine On
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteRule ^ index.php [QSA,L]
   ```

2. **`mod_rewrite` not enabled** — Go to cPanel → Apache Handlers, or contact your host to confirm `mod_rewrite` is on.

3. **`AllowOverride` not set** — Your host's Apache config must allow `.htaccess` files in `public_html/`. Contact support if unsure.

---

### 🔴 React Page Refreshes Give 404

**Symptom:** Navigating to `/dashboard/researcher` directly or refreshing returns a 404 from the server.

**Fix:** Create (or correct) `public_html/.htaccess`:

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

> This is a **different file** from `api/.htaccess`. Both must exist.

---

### 🔴 `articles.php` Returns Empty Array

**Symptom:** `/api/articles.php` returns `{"success": true, "data": {"items": [], "total": 0, ...}}`

**Fix:** Check the path passed to `read_csv()`. It must use `__DIR__` to be relative to the PHP file's location:

```php
// ✅ Correct
$articles = read_csv(__DIR__ . '/articles.csv');

// ❌ Wrong — relative to the working directory, not the file
$articles = read_csv('articles.csv');
```

Also confirm `articles.csv` was actually uploaded to the server.

---

### 🔴 OPTIONS Request Fails (Preflight)

**Symptom:** Browser shows a CORS error specifically on `OPTIONS` requests, before the actual request is even sent.

**Fix:** Every endpoint file must handle `OPTIONS` **before** any business logic or output:

```php
<?php
require_once __DIR__ . '/../cors.php'; // sets headers + handles OPTIONS

// cors.php must contain:
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;               // ← critical: must exit here
}
```

---

### 🔴 JSON Parse Error in React

**Symptom:** `SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON`

**Cause:** The PHP script is returning an HTML error page instead of JSON.

**Fix:**

1. Open the failing URL directly in your browser — you'll see the raw PHP error
2. In cPanel, enable PHP error logging to a file:
   ```php
   ini_set('log_errors', 1);
   ini_set('error_log', __DIR__ . '/../php-errors.log');
   ini_set('display_errors', 0);
   ```
3. Check `php-errors.log` in File Manager for the actual error message

Common culprits:
- Syntax error in a PHP file
- Missing `require_once` for a file that doesn't exist
- Database connection failure
- `articles.csv` not found

---

## Still Stuck?

1. Open browser DevTools → Network tab
2. Find the failing request and click it
3. Check the **Response** tab — is it JSON or HTML?
4. Check the **Headers** tab — are CORS headers present?
5. Check **cPanel → Error Logs** for server-side PHP errors

---

[← Deployment](./07-deployment.md) · [Back to Index](./README.md)
