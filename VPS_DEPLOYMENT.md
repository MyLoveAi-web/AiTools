# 🚀 VPS Deployment Instructions

**Your code is already on GitHub!**  
**Repository:** `https://github.com/MyLoveAi-web/AiTools`  
**Branch:** `cursor/weloveai-cloud-website-668a`

---

## ✅ Step 1: Connect to Your VPS

**From your mobile phone:**

### Install SSH App:
- **Android:** Install **Termux** from Play Store
- **iOS:** Install **Termius** from App Store

### Connect:
```bash
ssh root@62.72.12.45
```
Enter your VPS password when asked.

---

## ✅ Step 2: Install Required Software

**Copy and paste these commands ONE BY ONE:**

```bash
# Update system
sudo apt update
sudo apt upgrade -y
```

Wait for it to finish (2-5 minutes), then:

```bash
# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs
```

Verify Node.js installed:
```bash
node --version
npm --version
```

Install Nginx and Git:
```bash
sudo apt install -y nginx git
sudo systemctl start nginx
sudo systemctl enable nginx
```

---

## ✅ Step 3: Download Code from GitHub

```bash
# Create website directory
sudo mkdir -p /var/www/weloveai.cloud
cd /var/www/weloveai.cloud

# Clone repository
sudo git clone https://github.com/MyLoveAi-web/AiTools.git .

# Switch to correct branch
sudo git checkout cursor/weloveai-cloud-website-668a

# Set permissions
sudo chown -R $USER:$USER /var/www/weloveai.cloud
cd /var/www/weloveai.cloud
```

---

## ✅ Step 4: Build the Website

```bash
# Install dependencies
npm install
```

Wait 1-3 minutes, then:

```bash
# Build website
npm run build
```

Wait 30-60 seconds. You should see "dist" folder created.

---

## ✅ Step 5: Configure Nginx

```bash
# Copy nginx config
sudo cp nginx.conf /etc/nginx/sites-available/weloveai.cloud

# Enable site
sudo ln -s /etc/nginx/sites-available/weloveai.cloud /etc/nginx/sites-enabled/

# Remove default site
sudo rm /etc/nginx/sites-enabled/default

# Test configuration
sudo nginx -t
```

If you see "test is successful", continue:

```bash
# Reload nginx
sudo systemctl reload nginx
```

---

## ✅ Step 6: Set Permissions

```bash
sudo chown -R www-data:www-data /var/www/weloveai.cloud/dist
sudo chmod -R 755 /var/www/weloveai.cloud/dist
```

---

## ✅ Step 7: Setup SSL (HTTPS)

**IMPORTANT:** Make sure `weloveai.cloud` DNS points to `62.72.12.45` first!

```bash
# Install Certbot
sudo apt install -y certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d weloveai.cloud -d www.weloveai.cloud
```

Follow the prompts:
- Enter your email address
- Type `A` and press Enter to agree
- Type `Y` or `N` for email sharing
- Certbot will automatically configure SSL!

---

## ✅ Step 8: Update Nginx for HTTPS

Edit the config file:

```bash
sudo nano /etc/nginx/sites-available/weloveai.cloud
```

**In the editor:**
1. Find the HTTPS server block (starts with `server { listen 443`)
2. Remove all `#` symbols from the HTTPS section
3. Find the HTTP redirect line: `# return 301 https://...`
4. Remove the `#` from that line
5. Press `Ctrl + X` to exit
6. Press `Y` to save
7. Press `Enter` to confirm

Then reload:
```bash
sudo nginx -t
sudo systemctl reload nginx
```

---

## ✅ Step 9: Configure Firewall

```bash
sudo ufw allow 'Nginx Full'
sudo ufw allow OpenSSH
sudo ufw enable
```

Type `y` when asked.

---

## 🎉 DONE!

**Your website is now live!**

Visit: **https://weloveai.cloud**

---

## 🔄 How to Update Website Later

When you make changes to code:

```bash
cd /var/www/weloveai.cloud
git pull origin cursor/weloveai-cloud-website-668a
npm install
npm run build
sudo systemctl reload nginx
```

---

## 🆘 Troubleshooting

### Website not loading?
```bash
sudo tail -f /var/log/nginx/error.log
```

### Check if nginx is running:
```bash
sudo systemctl status nginx
```

### Check if build was successful:
```bash
ls -la /var/www/weloveai.cloud/dist
```

### Test nginx config:
```bash
sudo nginx -t
```

---

## 📋 Quick Command Reference

```bash
# Connect to VPS
ssh root@62.72.12.45

# Navigate to website
cd /var/www/weloveai.cloud

# Update website
git pull origin cursor/weloveai-cloud-website-668a
npm install
npm run build
sudo systemctl reload nginx

# Check logs
sudo tail -f /var/log/nginx/error.log
```

---

**That's it! Your website should be live now.** 🚀
