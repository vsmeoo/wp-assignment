# GitHub Pages Deployment Guide

## Step-by-Step Instructions to Deploy Your Learnsphere Website

### 1. Create a GitHub Account
If you don't have one:
- Go to https://github.com
- Click "Sign up"
- Follow the registration steps
- Verify your email

### 2. Create a New Repository

1. Go to https://github.com/new
2. Repository name: `Learnsphere` (or your preferred name)
3. Description: "Online Learning Platform - Static Website"
4. Choose "Public" (required for GitHub Pages free tier)
5. DO NOT initialize with README, .gitignore, or license
6. Click "Create repository"

### 3. Upload Your Project Files

You have two options:

#### Option A: Using GitHub Web Interface (Easiest)

1. In your new repository, click "Add file" → "Upload files"
2. Select all files from your assignment folder:
   - index.html
   - courses.html
   - course-details.html
   - register.html
   - contact.html
   - styles.css
   - script.js
   - courses.xml
   - courses.xsd
   - README.md
3. Click "Commit changes"

#### Option B: Using Git Command Line (Advanced)

```bash
# Navigate to your project directory
cd c:\Users\bolis\OneDrive\Desktop\assignment

# Initialize git repository
git init

# Add remote repository (replace USERNAME and REPO with your values)
git remote add origin https://github.com/USERNAME/Learnsphere.git

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Learnsphere website"

# Push to GitHub
git branch -M main
git push -u origin main
```

### 4. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" (gear icon)
3. Scroll down to "Pages" section (on left sidebar)
4. Under "Source", select:
   - Branch: `main` (or `master`)
   - Folder: `/ (root)`
5. Click "Save"
6. Wait 1-2 minutes for deployment

### 5. Access Your Website

After GitHub Pages is enabled, your site will be available at:
```
https://USERNAME.github.io/Learnsphere/
```

Replace `USERNAME` with your GitHub username.

Example: If your GitHub username is "johnsmith", your site URL would be:
```
https://johnsmith.github.io/Learnsphere/
```

### 6. Verify Deployment

1. Visit your GitHub Pages URL
2. Check all pages load correctly:
   - Home page
   - Courses listing
   - Course details
   - Registration/Login
   - Contact page
3. Test functionality:
   - Search and filter courses
   - Form validation
   - Navigation links

## Updating Your Website

After deployment, if you make changes:

### Option A: Using GitHub Web Interface
1. Click on a file
2. Click the pencil icon (Edit)
3. Make changes
4. Click "Commit changes"
5. Site updates automatically

### Option B: Using Git Command Line
```bash
# Make your changes locally
# Then:
git add .
git commit -m "Description of changes"
git push origin main
```

## Troubleshooting

### Site not loading
- Wait 2-3 minutes after enabling Pages
- Check repository is public
- Verify files were uploaded correctly

### Styles not loading
- Ensure `styles.css` is in the root directory
- Check that CSS file links are correct in HTML

### Forms not working
- Forms are client-side only (no backend)
- Validation works but doesn't submit to server
- This is expected for a static site

### JavaScript not running
- Check browser console for errors
- Ensure `script.js` is in the root directory
- Try clearing browser cache

## Sharing Your Project

Your deployment URL to share:
```
https://USERNAME.github.io/Learnsphere/
```

You can also share the repository link:
```
https://github.com/USERNAME/Learnsphere/
```

## Additional Resources

- GitHub Pages Documentation: https://pages.github.com/
- GitHub Help: https://docs.github.com/
- HTML Basics: https://developer.mozilla.org/en-US/docs/Web/HTML
- CSS Guide: https://developer.mozilla.org/en-US/docs/Web/CSS
- JavaScript Basics: https://developer.mozilla.org/en-US/docs/Web/JavaScript

---

**Need Help?**
- Check GitHub Status: https://www.githubstatus.com/
- Contact GitHub Support: https://support.github.com/
