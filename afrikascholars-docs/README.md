# AfrikaScholars — PHP → React REST API

> **Conversion & Integration Documentation**

---

| | |
|---|---|
| **Version** | 1.0 |
| **Stack** | React (Frontend) + PHP (Backend API) |
| **Deployment** | cPanel Shared Hosting |

---

## Table of Contents

1. [Overview](./01-overview.md)
2. [Backend File Structure](./02-backend-structure.md)
3. [CORS Configuration](./03-cors-configuration.md)
4. [Articles Endpoint](./04-articles-endpoint.md)
5. [Front Controller](./05-front-controller.md)
6. [React Frontend Integration](./06-react-integration.md)
7. [Deploying to cPanel](./07-deployment.md)
8. [Common Issues & Fixes](./08-troubleshooting.md)

---

> **Quick summary of what changed:**
> PHP now acts purely as a backend — it reads data, processes requests, and returns JSON.
> React handles all UI rendering and calls the PHP endpoints via `fetch()`.
> No PHP is ever sent to the browser.
