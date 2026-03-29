// Firebase SEO Headers Configuration
// Add this to your firebase.json hosting section for proper SEO headers

{
  "hosting": {
    "public": "dist/cvweb-front/browser",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "redirects": [
      {
        "source": "/cv",
        "destination": "/assets/CV/CV_Sergio_Martin_2026.pdf",
        "type": 301
      },
      {
        "source": "/linkedin",
        "destination": "https://www.linkedin.com/in/sergio93ma/",
        "type": 301
      },
      {
        "source": "/github",
        "destination": "https://github.com/sergio93ma",
        "type": 301
      }
    ],
    "headers": [
      {
        "source": "**/*.@(js|css|woff|woff2|ttf|svg|eot)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "max-age=31536000, immutable"
          }
        ]
      },
      {
        "source": "**/*.@(jpg|jpeg|gif|png|webp|ico|svg)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "max-age=86400, public"
          }
        ]
      },
      {
        "source": "/index.html",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "max-age=3600, must-revalidate"
          },
          {
            "key": "X-Content-Type-Options",
            "value": "nosniff"
          },
          {
            "key": "X-Frame-Options",
            "value": "SAMEORIGIN"
          },
          {
            "key": "X-XSS-Protection",
            "value": "1; mode=block"
          },
          {
            "key": "Referrer-Policy",
            "value": "strict-origin-when-cross-origin"
          }
        ]
      },
      {
        "source": "**",
        "headers": [
          {
            "key": "X-Content-Type-Options",
            "value": "nosniff"
          },
          {
            "key": "X-Frame-Options",
            "value": "SAMEORIGIN"
          },
          {
            "key": "X-XSS-Protection",
            "value": "1; mode=block"
          }
        ]
      }
    ]
  }
}
