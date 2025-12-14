# ✅ Deployment Checklist - Mobile Edition

Print this or keep it open while deploying!

---

## 📋 BEFORE YOU START

- [ ] GitHub account created
- [ ] VPS IP address: `62.72.12.45`
- [ ] Domain name: `weloveai.cloud`
- [ ] Domain DNS pointing to VPS IP
- [ ] SSH app installed (Termux/Termius)
- [ ] All project files ready

---

## 📱 PART 1: GITHUB SETUP

- [ ] Repository created on GitHub
- [ ] Repository name: `weloveai-cloud`
- [ ] All files uploaded to GitHub
- [ ] Files visible in repository
- [ ] Repository URL saved

**Time needed:** 5-10 minutes

---

## 💻 PART 2: VPS CONNECTION

- [ ] SSH app installed
- [ ] Connected to VPS: `ssh root@62.72.12.45`
- [ ] Password entered successfully
- [ ] Can see command prompt

**Time needed:** 2 minutes

---

## 🔧 PART 3: SOFTWARE INSTALLATION

- [ ] System updated: `sudo apt update && sudo apt upgrade -y`
- [ ] Node.js installed: `curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -`
- [ ] Node.js verified: `node --version` shows v18+
- [ ] Nginx installed: `sudo apt install -y nginx`
- [ ] Nginx started: `sudo systemctl start nginx`
- [ ] Git installed: `sudo apt install -y git`

**Time needed:** 5-10 minutes

---

## 📥 PART 4: CODE DOWNLOAD

- [ ] Directory created: `sudo mkdir -p /var/www/weloveai.cloud`
- [ ] Navigated to directory: `cd /var/www/weloveai.cloud`
- [ ] Code cloned: `git clone https://github.com/YOUR_USERNAME/weloveai-cloud.git .`
- [ ] Permissions set: `sudo chown -R $USER:$USER /var/www/weloveai.cloud`
- [ ] Files visible: `ls -la`

**Time needed:** 2 minutes

---

## 🏗️ PART 5: BUILD WEBSITE

- [ ] Dependencies installed: `npm install`
- [ ] Build completed: `npm run build`
- [ ] Build folder exists: `ls -la dist`
- [ ] Files in dist folder visible

**Time needed:** 2-5 minutes

---

## ⚙️ PART 6: NGINX CONFIGURATION

- [ ] Config copied: `sudo cp nginx.conf /etc/nginx/sites-available/weloveai.cloud`
- [ ] Site enabled: `sudo ln -s /etc/nginx/sites-available/weloveai.cloud /etc/nginx/sites-enabled/`
- [ ] Default site removed: `sudo rm /etc/nginx/sites-enabled/default`
- [ ] Config tested: `sudo nginx -t` shows "successful"
- [ ] Nginx reloaded: `sudo systemctl reload nginx`

**Time needed:** 2 minutes

---

## 🔒 PART 7: SSL CERTIFICATE

- [ ] Domain DNS verified (points to 62.72.12.45)
- [ ] Certbot installed: `sudo apt install -y certbot python3-certbot-nginx`
- [ ] Certificate obtained: `sudo certbot --nginx -d weloveai.cloud -d www.weloveai.cloud`
- [ ] Email entered
- [ ] Terms agreed
- [ ] Certificate installed successfully

**Time needed:** 3-5 minutes

---

## ✅ PART 8: FINAL SETUP

- [ ] Permissions set: `sudo chown -R www-data:www-data /var/www/weloveai.cloud/dist`
- [ ] Permissions verified: `sudo chmod -R 755 /var/www/weloveai.cloud/dist`
- [ ] Firewall configured: `sudo ufw allow 'Nginx Full'`
- [ ] SSH allowed: `sudo ufw allow OpenSSH`
- [ ] Firewall enabled: `sudo ufw enable`

**Time needed:** 1 minute

---

## 🧪 PART 9: TESTING

- [ ] Website loads: `http://weloveai.cloud`
- [ ] HTTPS works: `https://weloveai.cloud`
- [ ] All pages load correctly
- [ ] No errors in browser console
- [ ] Mobile view works

**Time needed:** 2 minutes

---

## 🎉 DEPLOYMENT COMPLETE!

- [ ] Website is live
- [ ] HTTPS working
- [ ] All tools accessible
- [ ] No errors

---

## 📝 NOTES SECTION

**Repository URL:**
```
https://github.com/_________________/weloveai-cloud
```

**VPS IP:**
```
62.72.12.45
```

**Domain:**
```
weloveai.cloud
```

**Important Commands:**
```bash
# Connect to VPS
ssh root@62.72.12.45

# Navigate to website
cd /var/www/weloveai.cloud

# Update website
git pull origin main
npm install
npm run build
sudo systemctl reload nginx
```

---

## 🆘 TROUBLESHOOTING NOTES

**Problem:** _____________________________
**Solution:** _____________________________

**Problem:** _____________________________
**Solution:** _____________________________

---

**Total Deployment Time:** ~20-30 minutes ⏱️

**Date Completed:** ________________

**Status:** ⬜ Not Started | ⬜ In Progress | ⬜ Completed
