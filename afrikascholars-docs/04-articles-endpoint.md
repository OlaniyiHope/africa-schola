# 4. Articles Endpoint — `api/articles.php`

[← Back to Index](./README.md)

---

This is the primary public data endpoint. It reads from a CSV file (`articles.csv`) and exposes it as a filterable, paginated JSON API.

---

## 4.1 Supported Query Parameters

| Method | Parameter | Description |
|--------|-----------|-------------|
| `GET` | `?id=3` | Fetch a single article by its numeric ID |
| `GET` | `?featured=1` | Return only featured articles |
| `GET` | `?category=STEM` | Filter by category *(case-sensitive)* |
| `GET` | `?type=Review Article` | Filter by article type |
| `GET` | `?search=climate` | Full-text search across title, abstract, authors, keywords |
| `GET` | `?page=2&per_page=6` | Paginate results *(default: page 1, 12 per page, max 50)* |

Parameters can be combined — e.g. `?category=STEM&search=climate&page=2&per_page=6`.

---

## 4.2 Data Normalisation

Raw CSV values are strings. Before returning data, each article is normalised so the React frontend always receives consistent types:

| Field | Raw CSV → Normalised Type | Notes |
|-------|--------------------------|-------|
| `id` | `string` → `integer` | `(int)` cast |
| `year` | `string` → `integer` | `(int)` cast |
| `citations` / `downloads` / `views` | `string` → `integer` | `(int)` cast |
| `featured` / `open_access` | `"1"` or `""` → `boolean` | Truthy string check |
| `authors` / `keywords` | `"a, b, c"` → `["a", "b", "c"]` | `explode()` on comma |
| `type` / `published_date` | `string` | Unchanged |

---

## 4.3 Response Shapes

### Single Article — `GET ?id=3`

```json
{
  "success": true,
  "data": {
    "id": 3,
    "title": "Climate Resilience in Sub-Saharan Africa",
    "authors": ["Amara Diallo", "Chisom Obi"],
    "year": 2023,
    "featured": true,
    "open_access": false,
    "keywords": ["climate", "agriculture", "Africa"],
    "citations": 14,
    "downloads": 382,
    "views": 1204
  }
}
```

### Paginated List — `GET ?page=1&per_page=12`

```json
{
  "success": true,
  "data": {
    "items": [
      { "...article" },
      { "...article" }
    ],
    "total": 48,
    "page": 1,
    "per_page": 12,
    "total_pages": 4
  }
}
```

### Error Response

```json
{
  "success": false,
  "error": "Article not found"
}
```

---

## 4.4 TypeScript Interface (Frontend)

```ts
export interface Article {
  id:             number;
  title:          string;
  authors:        string[];
  year:           number;
  journal:        string;
  abstract:       string;
  category:       string;
  featured:       boolean;
  doi?:           string;
  type:           string;
  keywords:       string[];
  citations:      number;
  downloads:      number;
  views:          number;
  open_access:    boolean;
  published_date: string;
  volume?:        string;
  pages?:         string;
}

export interface PaginatedResponse<T> {
  items:       T[];
  total:       number;
  page:        number;
  per_page:    number;
  total_pages: number;
}
```

---

[← CORS Configuration](./03-cors-configuration.md) · [Front Controller →](./05-front-controller.md)
