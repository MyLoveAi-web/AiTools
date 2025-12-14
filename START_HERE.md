# 🎯 START HERE - Mobile Deployment Guide

**Welcome! This is your starting point.**

---

## 👋 Are you deploying from mobile phone?

**YES** → Follow these guides in order:

### Step 1: Upload Code to GitHub 📱
👉 **[GITHUB_SETUP_MOBILE.md](./GITHUB_SETUP_MOBILE.md)**

Learn how to upload your code to GitHub using your mobile phone.

**Time:** 5-10 minutes

---

### Step 2: Deploy to VPS 🚀
👉 **[MOBILE_QUICK_START.md](./MOBILE_QUICK_START.md)** ⭐ **START HERE**

Complete deployment guide - everything you need to know!

**Time:** 20-30 minutes

---

### Step 3: Track Your Progress ✅
👉 **[CHECKLIST.md](./CHECKLIST.md)**

Use this checklist to make sure you don't miss any steps.

---

### Need More Details? 📖
👉 **[DEPLOYMENT_MOBILE.md](./DEPLOYMENT_MOBILE.md)**

Complete detailed guide with troubleshooting and explanations.

---

## 🖥️ Are you deploying from desktop/computer?

**YES** → Use these guides:

👉 **[QUICK_DEPLOY.md](./QUICK_DEPLOY.md)** - Quick reference  
👉 **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Complete guide

---

## ⚡ Super Quick Version

**Just want the commands? Here you go:**

### 1. Upload to GitHub
- Use GitHub mobile app or Codespaces
- Upload all files

### 2. On VPS, run these commands:

```bash
# Connect
ssh root@62.72.12.45

# Install software
sudo apt update && sudo apt upgrade -y
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs nginx git

# Get code
sudo mkdir -p /var/www/weloveai.cloud
cd /var/www/weloveai.cloud
sudo git clone https://github.com/YOUR_USERNAME/weloveai-cloud.git .
sudo chown -R $USER:$USER /var/www/weloveai.cloud
cd /var/www/weloveai.cloud

# Build
npm install
npm run build

# Configure
sudo cp nginx.conf /etc/nginx/sites-available/weloveai.cloud
sudo ln -s /etc/nginx/sites-available/weloveai.cloud /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx

# SSL
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d weloveai.cloud -d www.weloveai.cloud

# Permissions
sudo chown -R www-data:www-data /var/www/weloveai.cloud/dist
sudo chmod -R 755 /var/www/weloveai.cloud/dist
```

**Done! Visit https://weloveai.cloud**

---

## 🆘 Need Help?

1. Check **[DEPLOYMENT_MOBILE.md](./DEPLOYMENT_MOBILE.md)** troubleshooting section
2. Check error logs: `sudo tail -f /var/log/nginx/error.log`
3. Verify each step completed successfully

---

## 📋 What You Need Before Starting

- [ ] GitHub account
- [ ] VPS IP: `62.72.12.45`
- [ ] Domain: `weloveai.cloud`
- [ ] Domain DNS pointing to VPS IP
- [ ] SSH app (Termux for Android, Termius for iOS)
- [ ] All project files ready

---

**Ready? Start with [MOBILE_QUICK_START.md](./MOBILE_QUICK_START.md)!** 🚀
