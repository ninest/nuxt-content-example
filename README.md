# Nuxt Content Example
> A quick and easy example of the new Nuxt Content and Components library

![Made with Nuxt](https://img.shields.io/badge/Made%20With-Nuxt-008c78?style=flat-square)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
![GitHub](https://img.shields.io/github/license/ninest/nuxt-content-example?style=flat-square)

## 🚀 Features
- [x] Using Nuxt content
- [x] Using Nuxt components
- [x] Index and about pages
- [x] Posts page, which lists out posts
- [x] Separate page for each post
- [x] Custom components for page layouts
- [x] Style with normalize.css and custom styles

## 🛠 Build setup
Clone or fork this repository then download it, then run this command to start the development server:

```
npm run dev
```

Make changes in components and markdown files and see them reflected live in your website.

To generate a full static site, run

```
npm run generate
```

This will generate the static site in the `dist/` directory

### Pages
Any markdown file in the `content/` folder directory will create a new page. For example, try creating the page `privacypolicy.md` with the following content:

```
---
title: Privacy policy
description: How our services value your privacy
---

This is the privacy policy for my company.
```

Save the file, and head over to 