# **Cloud Resume Challenge - Frontend**

A fully responsive, static frontend for the Cloud Resume Challenge, deployed on **AWS S3** and distributed via **CloudFront**. This frontend integrates with the **serverless backend API** to track visitor counts in real-time.

---

## 🚀 **Features**

- **Static Hosting on AWS S3**: Uses S3 for secure, scalable website hosting.
- **Global CDN via CloudFront**: Ensures fast, low-latency delivery worldwide.
- **Visitor Counter Integration**: Fetches and updates visitor count via an **AWS API Gateway + Lambda function**.
- **CI/CD Automation**: Uses **GitHub Actions** for deployment and CloudFront cache invalidation.
- **Responsive Design**: Optimized for **mobile, tablet, and desktop**.

---

## 📂 **Project Structure**

```
cloud-resume-frontend/
│
├── .github/workflows/              # GitHub Actions workflows
│   ├── frontend-deploy.yml          # CI/CD pipeline for frontend deployment
│
├── scripts/                         # JavaScript logic
│   ├── counter.js                   # Visitor counter API integration
│
├── styles/                          # Styling and layout files
│   ├── main.css                      # Responsive design and UI styles
│
├── index.html                        # Main static webpage (resume)
├── README.md                         # Project documentation
```

---

## 🛠 **Technologies Used**

### **Frontend Development**
- **HTML5 & CSS3** – Structured and styled resume webpage.
- **JavaScript (ES6)** – Fetches API data and dynamically updates visitor count.
- **AWS S3** – Serves static files securely.
- **AWS CloudFront** – CDN for low-latency, global content delivery.

### **Deployment & CI/CD**
- **GitHub Actions** – Automates deployments to S3.
- **AWS CLI** – Syncs website files and manages CloudFront cache invalidation.

---

## 🔧 **Setup and Deployment**

### **Prerequisites**
Ensure you have the following installed:
- **AWS CLI** – For interacting with AWS services.
- **Git** – Version control system.

### **1. Clone the Repository**
```bash
git clone <repository-url>
cd cloud-resume-frontend
```

### **2. Configure AWS Credentials**
```bash
aws configure
```

### **3. Deploy to S3**
```bash
aws s3 sync . s3://leogeo-cloudresume.com/ --delete --exclude ".git/*" --exclude ".github/*" --exclude "README.md"
```

### **4. Invalidate CloudFront Cache**
```bash
aws cloudfront create-invalidation --distribution-id <CLOUDFRONT_DISTRIBUTION_ID> --paths "/*"
```

---

## 📦 **Available Resources**

| Resource             | Description                                |
|---------------------|--------------------------------------------|
| `index.html`       | Main resume page.                         |
| `scripts/counter.js` | Fetches visitor count via API Gateway.    |
| `styles/main.css`  | Defines layout, fonts, and responsiveness. |
| `GitHub Actions`   | Automates deployment to AWS S3.            |

---

## 🚨 **Troubleshooting**

### **Common Issues & Fixes**
| Issue | Solution |
|--------|----------|
| Changes not showing | Run `aws cloudfront create-invalidation --distribution-id <ID> --paths "/*"`. |
| AWS CLI errors | Ensure AWS credentials are correctly configured (`aws configure`). |

---

## 📝 **License**

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 🙌 **Acknowledgments**

- Inspired by the **Cloud Resume Challenge** by Forrest Brazeal.
- Built using **AWS Serverless Technologies** for hands-on cloud experience.

---

## 👨‍💻 **Author**

**Leonardo Georgeto**  
[LinkedIn](https://linkedin.com/in/georgetol) | [GitHub](https://github.com/LeoGeorgeto) | [Resume](https://leogeo-cloudresume.com/) | [Portfolio](https://leogeorgeto.com/)
