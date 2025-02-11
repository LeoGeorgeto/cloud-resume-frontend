# Cloud Resume Frontend

## Overview
This repository contains the frontend implementation of the **Cloud Resume Challenge**. It features a responsive, modern resume website with an integrated visitor counter, automated deployments, and CDN delivery.

## Directory Structure

```
cloud-resume-frontend/
├── .github/
│   └── workflows/           # GitHub Actions
│       └── frontend-deploy.yml
├── scripts/
│   └── counter.js          # Visitor counter implementation
├── styles/
│   └── main.css           # CSS styling
└── index.html             # Main resume page
```

## Features
- **Responsive Design**
- **Real-time Visitor Counter**
- **Automated Deployments**
- **CDN Integration**
- **HTTPS Security**
- **Cross-browser Compatibility**

## Technologies Used
- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **AWS S3** (hosting)
- **AWS CloudFront** (CDN)
- **GitHub Actions** (CI/CD)

---

## Local Development

1. **Clone the repository**:

   ```bash
   git clone [repository-url]
   cd cloud-resume-frontend
   ```

2. **Open `index.html`** in your browser to view the site locally.

3. **Make changes** to the following files as needed:

   - `index.html`: For content updates
   - `styles/main.css`: For styling changes
   - `scripts/counter.js`: For visitor counter functionality

---

## Deployment

The site automatically deploys to AWS when changes are pushed to the **main** branch.

### Prerequisites
Ensure the following secrets are configured in **GitHub**:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `CLOUDFRONT_DISTRIBUTION_ID`

### Deployment Process

1. **Push changes** to the **main** branch.
2. **GitHub Actions** workflow:
   - Authenticates with AWS
   - Syncs files to S3
   - Invalidates the CloudFront cache

### Manual Deployment
If necessary, deploy manually using the AWS CLI:

```bash
# Sync files to S3
aws s3 sync . s3://[bucket-name]/ --exclude ".git/*" --exclude ".github/*"

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id [distribution-id] --paths "/*"
```

---

## Components

### Resume Content (`index.html`)
- Professional information
- Work experience
- Skills and certifications
- Education
- Contact details

### Styling (`styles/main.css`)
- Responsive layout
- Professional color scheme
- Typography optimization
- Print-friendly styling

### Visitor Counter (`scripts/counter.js`)
- Real-time count updates
- Error handling
- API integration
- CORS support

---

## Best Practices

- **Semantic HTML**
- **Mobile-first design**
- **Accessibility compliance**
- **Performance optimization**
- **Clean code structure**
- **Automated deployments**

---

## Performance Considerations

- Minified CSS
- Optimized images
- CDN delivery
- Browser caching
- Compressed resources

---

## Security

- **HTTPS enforcement**
- **Content security headers**
- **Secure API integration**
- **Protected AWS credentials**

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

