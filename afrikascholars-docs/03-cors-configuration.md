# 3. CORS Configuration

[← Back to Index](./README.md)

---

Because the React app runs on a different origin from the PHP server (e.g. `localhost:5173` in development, `afrikascholars.com` in production), every PHP endpoint must send the correct CORS headers.

## Allowed Origins

```php
$allowed = [
    'http://localhost:5173',               // Vite dev server
    'http://localhost:3000',               // CRA dev server
    'http://localhost:8001',               // Alternative local
    'https://afrikascholars.com',
    'https://afrika-scholar.vercel.app',
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';

header('Access-Control-Allow-Origin: ' . (in_array($origin, $allowed) ? $origin : '*'));
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}
```

---

## Why OPTIONS Matters

> ⚠️ **Browsers send a preflight `OPTIONS` request** before any cross-origin `POST`/`PUT`/`DELETE` or a `GET` with custom headers.
> The PHP script **must** respond with `204` and `exit` — otherwise React `fetch()` calls will silently fail.

### Preflight Flow

```
React (localhost:5173)
        │
        │  OPTIONS /api/sch-login
        │  Origin: http://localhost:5173
        ▼
    PHP Server
        │
        │  204 No Content
        │  Access-Control-Allow-Origin: http://localhost:5173
        │  Access-Control-Allow-Methods: GET, POST, OPTIONS
        ▼
React confirms OK — sends actual POST request
```

---

## Checklist

- [ ] Every PHP endpoint file imports / calls `cors.php` at the top
- [ ] `OPTIONS` method is handled before any business logic
- [ ] Your dev origin (`localhost:5173` or similar) is in the `$allowed` array
- [ ] Production domain (`https://afrikascholars.com`) is in the `$allowed` array

---

[← Backend Structure](./02-backend-structure.md) · [Articles Endpoint →](./04-articles-endpoint.md)
