# 5. Front Controller — `api/index.php`

[← Back to Index](./README.md)

---

All dynamic API routes (auth, payments) pass through a single `index.php` that acts like an Express router. Apache rewrites every request that isn't a real file to this controller.

---

## 5.1 `.htaccess` Rewrite Rule

A `.htaccess` file inside `api/` is required to route all requests to `index.php`:

```apacheconf
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.php [QSA,L]
```

**What this does:** If the request doesn't match a real file on disk (e.g. `articles.php` is a real file and bypasses this), rewrite the request to `index.php` with the original query string intact (`QSA`).

---

## 5.2 Route Groups

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/sch-register` | Auth — new scholar registration |
| `POST` | `/sch-login` | Auth — login, returns session / token |
| `POST` | `/sch-onboarding` | Auth — post-registration profile setup |
| `POST` | `/sch-initialize` | Payment — initialise Paystack transaction |
| `POST` | `/sch/webhook` | Payment — Paystack webhook handler |
| `GET` | `/sch/access` | Payment — check subscription access |
| `GET` | `/sch/verify/{ref}` | Payment — verify a transaction by reference |

---

## 5.3 How Routing Works

The front controller extracts the path from `REQUEST_URI`, strips the `/api` prefix, and matches against arrays of known routes. Routes are grouped by concern (auth vs payments) and loaded via `require_once`:

```php
$routePath = '/' . ltrim(substr($requestUri, strlen($scriptDir)), '/');

// ── Auth group — exact match ──────────────────────────────────────────────
$authRoutes = ['/sch-register', '/sch-login', '/sch-onboarding'];

if (in_array($routePath, $authRoutes)) {
    require_once __DIR__ . '/routes/auth.php';
    exit;
}

// ── Payment group — prefix match ──────────────────────────────────────────
$paymentPrefixes = ['/sch-initialize', '/sch/webhook', '/sch/access', '/sch/verify/'];

foreach ($paymentPrefixes as $prefix) {
    if (str_starts_with($routePath, $prefix)) {
        require_once __DIR__ . '/routes/payments.php';
        exit;
    }
}

// ── 404 fallback ──────────────────────────────────────────────────────────
jsonResponse(404, ['success' => false, 'message' => "Cannot {$method} {$routePath}"]);
```

### Route Resolution Flow

```
Incoming request: POST /api/sch-login
          │
          ▼
   api/.htaccess
   RewriteRule → index.php
          │
          ▼
   index.php
   $routePath = '/sch-login'
          │
          ├── in $authRoutes? ──── YES ──→ require routes/auth.php → exit
          │
          ├── starts with payment prefix? ──── routes/payments.php → exit
          │
          └── no match ──────────── 404 JSON response
```

---

## 5.4 Adding a New Route

1. Add the path to the appropriate group array (or create a new group)
2. Create the handler in `routes/` or inline in `index.php`
3. Ensure `cors.php` is included at the top of the handler

```php
// Example: adding a new /sch-profile route to the auth group
$authRoutes = ['/sch-register', '/sch-login', '/sch-onboarding', '/sch-profile'];
```

---

[← Articles Endpoint](./04-articles-endpoint.md) · [React Integration →](./06-react-integration.md)
