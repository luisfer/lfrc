# 🚀 Deployment Guide - Get lfrc.me Live!

## Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Click "New repository"
3. Name it `lfrc-portfolio`
4. Make it **Public** (required for free Vercel)
5. Click "Create repository"

## Step 2: Push Your Code

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your portfolio
git commit -m "Initial portfolio setup - Luis Fernando Romero Calero"

# Connect to GitHub (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/lfrc-portfolio.git

# Push to GitHub
git push -u origin main
```

## Step 3: Deploy to Vercel

1. Go to [Vercel.com](https://vercel.com)
2. Click "Sign up" and use your GitHub account
3. Click "New Project"
4. Import your `lfrc-portfolio` repository
5. Keep all default settings
6. Click "Deploy"

**Your portfolio is now live at a temporary URL!** 🎉

## Step 4: Connect lfrc.me Domain

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add custom domain: `lfrc.me`
4. Copy the DNS records provided by Vercel

## Step 5: Configure DNS at Namecheap

1. Login to [Namecheap.com](https://namecheap.com)
2. Go to "Domain List" → Manage `lfrc.me`
3. Go to "Advanced DNS" tab
4. Add the DNS records from Vercel:
   - **Type**: CNAME
   - **Host**: www
   - **Value**: `cname.vercel-dns.com`
   - **TTL**: Automatic
   
   - **Type**: A
   - **Host**: @
   - **Value**: `76.76.19.19`
   - **TTL**: Automatic

5. Delete any existing records that conflict
6. Save changes

## Step 6: Wait for Propagation

- DNS changes take 5-60 minutes to propagate
- Check if it's working: visit `lfrc.me`
- You should see your beautiful portfolio! 🌟

## Step 7: SSL Certificate (Automatic)

- Vercel automatically provides HTTPS
- Your site will be secure with SSL
- No additional setup needed

## 🎯 Final Checklist

- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] Vercel deployment successful
- [ ] Custom domain `lfrc.me` added
- [ ] DNS records configured at Namecheap
- [ ] Portfolio accessible at `lfrc.me`
- [ ] HTTPS working (green lock icon)

## 🔧 Troubleshooting

### Domain not working after 1 hour?
- Check DNS propagation: [whatsmydns.net](https://whatsmydns.net)
- Enter `lfrc.me` and check if it resolves globally

### Still showing Vercel URL?
- Clear your browser cache
- Try incognito/private browsing mode
- Check DNS settings in Namecheap

### Build errors?
- Check the build logs in Vercel dashboard
- Make sure all dependencies are in `package.json`
- Contact me if you need help!

## 🌟 You Did It!

Your portfolio is now live at `lfrc.me` - a professional showcase of your incredible journey from blindness recovery to Bangkok success!

## 📞 Need Help?

If you run into any issues:
- Check Vercel build logs
- Verify DNS settings
- Feel free to ask for help!

---

**Welcome to your new professional home on the internet!** 🎉 