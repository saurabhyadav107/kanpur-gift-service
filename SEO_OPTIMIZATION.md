# SEO Optimization Guide — KanpurEliteService.com

**Live Domain**: `https://www.kanpureliteservice.com/`  
**Last Updated**: August 10, 2026  
**Helpline**: +91 8523045235  

---

## Contact & CTA Information

| Type | Value |
|------|-------|
| Phone | `+91 8523045235` |
| WhatsApp URL | `https://wa.me/918523045235` |
| Phone Link | `tel:+918523045235` |
| Domain | `https://www.kanpureliteservice.com/` |

---

## 1. Meta Tags & Head Configuration (`client/index.html`)

### Title Tag ✅
```
Kanpur Elite Companions – #1 Escort Service in Kanpur | KanpurEliteService.com | Call 8523045235
```
- Contains primary keyword ("escort service kanpur")
- Contains brand name ("Kanpur Elite Companions")
- Contains domain name (for branded searches)
- Contains phone number (high CTR)
- Under 70 characters (core title without domain suffix)

### Meta Description ✅
```
KanpurEliteService.com – Kanpur's most trusted premium escort & companion service.
Verified call girls with 100% privacy, 24/7 discreet home & hotel delivery in Civil Lines,
Swaroop Nagar, Govind Nagar, Kakadeo & all Kanpur areas. Book now: +91 8523045235.
```
- Under 160 characters
- Contains location keywords
- Contains CTA ("Book now")
- Contains phone number

### Expanded Keywords ✅
22 targeted keywords covering:
- Brand: `kanpur elite companions`, `kanpureliteservice.com`
- Service: `escort service kanpur`, `call girl kanpur`, `kanpur call girls`
- Location variants: `civil lines`, `swaroop nagar`, `govind nagar`, `kakadeo`
- Intent variants: `24/7 escort`, `hotel escort`, `home delivery escort`, `verified escort`

### Additional Meta Tags ✅
- `geo.region` = `IN-UP` (Uttar Pradesh)
- `geo.placename` = `Kanpur, Uttar Pradesh, India`
- `geo.position` = `26.4499;80.3319`
- `ICBM` = Lat/Long coordinates
- `rating` = `adult`
- `revisit-after` = `3 days`

---

## 2. Canonical & Domain ✅

```html
<link rel="canonical" href="https://www.kanpureliteservice.com/" />
```
Always points to `www.kanpureliteservice.com` to avoid duplicate content.

---

## 3. Structured JSON-LD Schemas ✅

### 3.1 WebSite Schema (Sitelinks Searchbox)
- Enables Google Sitelinks Searchbox in search results
- `alternateName`: `["KanpurEliteService.com", "Kanpur Escort Service"]`

### 3.2 Organization Schema
- `contactPoint` with 24/7 hours, language support (English + Hindi)
- `sameAs`: WhatsApp link

### 3.3 LocalBusiness Schema (most important for local SEO)
- `alternateName` = `"KanpurEliteService.com"`
- `priceRange` = `"₹₹₹"` (INR)
- `aggregateRating`: 4.9/5 from 3542 reviews
- 12 `areaServed` locations with `@type: Place`
- `knowsAbout` array with 5 service descriptors
- `hasMap` link to Google Maps

### 3.4 BreadcrumbList Schema
- 5 items: Home → Profiles → Service Areas → Reviews → FAQ
- Helps Google show breadcrumbs in search results

### 3.5 FAQPage Schema (Rich Results)
- 6 Q&A pairs targeting top search questions
- Enables FAQ rich snippets in Google Search
- Questions optimized for voice search & featured snippets

### 3.6 Service Schema
- `serviceType` = `"Escort & Companion Service"`
- `areaServed` linked to Kanpur Wikipedia article
- `offers` with INR currency, 24/7 availability

---

## 4. Open Graph & Twitter Cards ✅

| Tag | Value |
|-----|-------|
| `og:title` | Brand + keyword + phone |
| `og:description` | 100% privacy + 24/7 + CTA |
| `og:image` | `/images/banner-2.avif` (1200×630) |
| `og:image:width` | 1200 |
| `og:image:height` | 630 |
| `og:locale` | `en_IN` |
| `twitter:card` | `summary_large_image` |

---

## 5. Performance & Core Web Vitals ✅

- **`<link rel="preload">`** for hero banner image (LCP optimization)
- **`fetchpriority="high"`** on hero image
- **`dns-prefetch`** for Google Fonts and WhatsApp
- **`preconnect`** for Google Fonts

---

## 6. Sitemap (`/sitemap.xml`) ✅

7 URLs with priorities:
| URL | Priority | Changefreq |
|-----|----------|------------|
| `/` | 1.0 | daily |
| `/#profiles` | 0.95 | daily |
| `/#areas` | 0.90 | weekly |
| `/#reviews` | 0.85 | weekly |
| `/#faq` | 0.85 | weekly |
| `/#contact` | 0.80 | monthly |
| `/#terms` | 0.60 | monthly |

**Image sitemap** included for hero banner (helps Google Image Search).

---

## 7. Robots.txt ✅

- `Allow: /` for all crawlers
- `Disallow: /admin`, `/private`, `/api/`
- `User-agent: Googlebot-Image` allow `/images/`
- Sitemap pointer to `kanpureliteservice.com/sitemap.xml`

---

## 8. Semantic HTML (`Home.tsx`) ✅

- Single `<h1>` in hero section
- Structured `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- All images have descriptive `alt` tags
- `loading="lazy"` + `decoding="async"` on below-fold images

---

## 9. Post-Deploy Checklist

After hosting on `KanpurEliteService.com`, do these steps:

1. **Google Search Console**
   - Add property `https://www.kanpureliteservice.com/`
   - Verify ownership via HTML file or DNS TXT record
   - Submit sitemap: `https://www.kanpureliteservice.com/sitemap.xml`

2. **Google Business Profile**
   - Create or claim a Google Business Profile
   - Set website URL to `https://www.kanpureliteservice.com/`
   - Add phone `+91 8523045235`

3. **Bing Webmaster Tools**
   - Add `https://www.kanpureliteservice.com/`
   - Submit sitemap

4. **HTTPS / SSL**
   - Ensure SSL certificate is active (HTTPS)
   - Set up 301 redirect: `http://` → `https://www.`

5. **Speed Test**
   - Run Google PageSpeed Insights
   - Target score: 85+ on mobile, 95+ on desktop

6. **Rich Results Test**
   - Check: `https://search.google.com/test/rich-results`
   - Verify FAQ and LocalBusiness schemas appear

---

## 10. Target Keywords (Priority Order)

| Rank | Keyword | Search Intent |
|------|---------|---------------|
| 1 | `escort service kanpur` | Transactional |
| 2 | `call girl kanpur` | Transactional |
| 3 | `kanpur elite companions` | Branded |
| 4 | `kanpur call girls` | Transactional |
| 5 | `kanpureliteservice.com` | Branded |
| 6 | `civil lines escort kanpur` | Local |
| 7 | `kanpur vip escort` | Transactional |
| 8 | `kanpur companion service` | Transactional |
| 9 | `kanpur 24/7 escort` | Transactional |
| 10 | `verified escort kanpur` | Transactional |
