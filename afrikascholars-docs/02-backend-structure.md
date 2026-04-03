# 2. Backend File Structure

[← Back to Index](./README.md)

---

The PHP backend was reorganised into a clean, router-based structure inside a dedicated `api/` folder.

## Directory Layout

```
api/
├── index.php           ← Front controller (single entry point)
├── cors.php            ← Shared CORS + helper functions
├── helpers.php         ← read_csv() and other utilities
│
├── routes/
│   ├── auth.php        ← /sch-register, /sch-login, /sch-onboarding
│   └── payments.php    ← /sch-initialize, /sch/webhook, /sch/verify/
│
└── articles.php        ← /api/articles.php (standalone endpoint)
```

---

## File Responsibilities

| File | Responsibility |
|------|---------------|
| `index.php` | Single entry point — receives all dynamic API requests and routes them |
| `cors.php` | Sets CORS headers and handles `OPTIONS` preflight requests |
| `helpers.php` | Utility functions including `read_csv()` for loading article data |
| `routes/auth.php` | Handles scholar registration, login, and onboarding |
| `routes/payments.php` | Handles Paystack payment initialisation, webhook, and verification |
| `articles.php` | Standalone endpoint — reads `articles.csv` and returns filtered, paginated JSON |

---

## Why a Front Controller?

Rather than having dozens of separate PHP files for every route, a single `index.php` acts as the entry point (similar to Express.js). Apache is configured via `.htaccess` to rewrite all unmatched requests to this file.

This means:

- All request routing logic is in one place
- New routes are added by editing `index.php`, not by creating new files
- Consistent CORS and error handling applies to every route automatically

---

[← Overview](./01-overview.md) · [CORS Configuration →](./03-cors-configuration.md)
