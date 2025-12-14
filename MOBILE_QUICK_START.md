# 🚀 Quick Start - Mobile to VPS Deployment

**Super simple guide for beginners on mobile phone**

---

## ✅ What You Need

- [ ] GitHub account
- [ ] VPS IP: `62.72.12.45`
- [ ] Domain: `weloveai.cloud`
- [ ] SSH app on phone (Termux for Android, Termius for iOS)

---

## 📱 STEP 1: Upload Code to GitHub (5 minutes)

### Option A: GitHub Mobile App

1. **Install GitHub app** from App Store/Play Store
2. **Create repository:**
   - Open GitHub website in browser
   - Tap "+" → "New repository"
   - Name: `weloveai-cloud`
   - Tap "Create repository"
3. **Upload files:**
   - Open GitHub app
   - Go to your repository
   - Tap "Add file" → "Upload files"
   - Select all project files
   - Tap "Commit changes"

### Option B: GitHub Codespaces (Easier)

1. Create repository on GitHub website
2. Tap "Code" → "Codespaces" → "Create codespace"
3. Upload files using web interface
4. In terminal: `git add . && git commit -m "Initial" && git push`

**📖 Full guide:** See `GITHUB_SETUP_MOBILE.md`

---

## 💻 STEP 2: Connect to VPS (2 minutes)

### Install SSH App

**Android:** Install **Termux** from Play Store  
**iOS:** Install **Termius** from App Store

### Connect

**Using Termux:**
```bash
pkg install openssh
ssh root@62.72.12.45
# Enter password when asked
```

**Using Termius:**
- Add new host
- Address: `62.72.12.45`
- Username: `root`
- Password: Your VPS password
- Tap "Connect"

---

## 🔧 STEP 3: Install Software (5 minutes)

Copy and paste these commands **one by one**:

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install Nginx
sudo apt install -y nginx
sudo systemctl start nginx

# Install Git
sudo apt install -y git
```

**Wait for each command to finish before running the next one!**

---

## 📥 STEP 4: Download Code from GitHub (2 minutes)

```bash
# Create folder
sudo mkdir -p /var/www/weloveai.cloud
cd /var/www/weloveai.cloud

# Download code (replace YOUR_USERNAME)
sudo git clone https://github.com/YOUR_USERNAME/weloveai-cloud.git .

# Set permissions
sudo chown -R $USER:$USER /var/www/weloveai.cloud
cd /var/www/weloveai.cloud
```

---

## 🏗️ STEP 5: Build Website (3 minutes)

```bash
# Install dependencies
npm install

# Build website
npm run build
```

Wait for it to finish (1-3 minutes)

---

## ⚙️ STEP 6: Configure Nginx (2 minutes)

```bash
# Copy config
sudo cp nginx.conf /etc/nginx/sites-available/weloveai.cloud

# Enable site
sudo ln -s /etc/nginx/sites-available/weloveai.cloud /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default

# Test and reload
sudo nginx -t
sudo systemctl reload nginx
```

---

## 🔒 STEP 7: Setup HTTPS (3 minutes)

**Make sure domain DNS points to `62.72.12.45` first!**

```bash
# Install Certbot
sudo apt install -y certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d weloveai.cloud -d www.weloveai.cloud
```

Follow prompts (enter email, agree to terms)

---

## ✅ STEP 8: Final Setup (1 minute)

```bash
# Set permissions
sudo chown -R www-data:www-data /var/www/weloveai.cloud/dist
sudo chmod -R 755 /var/www/weloveai.cloud/dist

# Setup firewall
sudo ufw allow 'Nginx Full'
sudo ufw allow OpenSSH
sudo ufw enable
```

---

## 🎉 DONE!

Open your browser and visit:
- **https://weloveai.cloud**

Your website is live! 🚀

---

## 🔄 Update Website Later

When you make changes:

```bash
cd /var/www/weloveai.cloud
git pull origin main
npm install
npm run build
sudo systemctl reload nginx
```

---

## 🆘 Problems?

**Website not loading?**
```bash
sudo tail -f /var/log/nginx/error.log
```

**Can't connect to VPS?**
- Check IP: `62.72.12.45`
- Check password is correct
- Contact Hostinger support

**Domain not working?**
- Check DNS settings
- Wait 5-10 minutes for DNS propagation

**Need more help?**
- See `DEPLOYMENT_MOBILE.md` for detailed guide
- Check error logs: `/var/log/nginx/error.log`

---

**Total time: ~20 minutes** ⏱️
