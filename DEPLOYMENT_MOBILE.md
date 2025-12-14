# Complete Deployment Guide - Mobile to VPS via GitHub

**Perfect for beginners working from mobile phone!**

This guide will help you deploy WeLoveAI.cloud to your Hostinger VPS using GitHub, all from your mobile device.

---

## 📱 Part 1: Setting Up GitHub (From Your Phone)

### Step 1: Create GitHub Account

1. Open your mobile browser
2. Go to: **https://github.com**
3. Tap **"Sign up"**
4. Enter your email, password, and username
5. Verify your email

### Step 2: Create a New Repository

1. After logging in, tap the **"+"** icon (top right)
2. Tap **"New repository"**
3. Fill in:
   - **Repository name**: `weloveai-cloud` (or any name you like)
   - **Description**: "AI Tools Platform"
   - **Visibility**: Choose **Public** (free) or **Private**
4. **DO NOT** check "Initialize with README" (we already have files)
5. Tap **"Create repository"**

### Step 3: Upload Files to GitHub (Using Mobile Browser)

**Option A: Using GitHub Mobile App (Easier)**

1. Download **GitHub** app from App Store/Play Store
2. Open the app and log in
3. Tap your repository
4. Tap **"Add file"** → **"Upload files"**
5. Select all files from your project folder
6. Tap **"Commit changes"**

**Option B: Using Mobile Browser (Alternative)**

Since uploading many files via browser is difficult, we'll use a different approach:

1. Install **Termux** app (Android) or **iSH** app (iOS) - these are terminal apps
2. Or use **GitHub Desktop** on a computer if available
3. Or use the GitHub mobile app method above

**Option C: Using GitHub Codespaces (Easiest for Mobile)**

1. Go to your repository on GitHub
2. Tap **"Code"** → **"Codespaces"** → **"Create codespace"**
3. Upload files using the web interface
4. Commit and push

---

## 💻 Part 2: Setting Up Your VPS (From Mobile)

### Step 1: Connect to Your VPS

You'll need an SSH app on your phone:

**For Android:**
- Install **Termux** (free) from Play Store
- Or install **JuiceSSH** (free) from Play Store

**For iOS:**
- Install **Termius** (free) from App Store
- Or install **iSH** (free) from App Store

### Step 2: Connect via SSH

**Using Termux (Android):**

1. Open Termux app
2. Type these commands one by one:

```bash
pkg update
pkg install openssh git
ssh root@62.72.12.45
```

3. Enter your VPS password when prompted
4. You're now connected!

**Using Termius (iOS/Android):**

1. Open Termius app
2. Tap **"+"** to add new host
3. Fill in:
   - **Label**: My VPS
   - **Address**: `62.72.12.45`
   - **Username**: `root`
   - **Password**: Your VPS password
4. Tap **"Save"** then **"Connect"**

---

## 🚀 Part 3: Installing Required Software on VPS

Once connected to your VPS, run these commands **one by one**:

### Step 1: Update System

```bash
sudo apt update
sudo apt upgrade -y
```

Wait for it to finish (may take 2-5 minutes)

### Step 2: Install Node.js

```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
```

Wait for it to finish, then:

```bash
sudo apt install -y nodejs
```

Verify it worked:

```bash
node --version
npm --version
```

You should see version numbers like `v18.x.x` and `9.x.x`

### Step 3: Install Nginx

```bash
sudo apt install -y nginx
```

Start Nginx:

```bash
sudo systemctl start nginx
sudo systemctl enable nginx
```

### Step 4: Install Git

```bash
sudo apt install -y git
```

---

## 📥 Part 4: Downloading Your Code from GitHub

### Step 1: Create Website Directory

```bash
sudo mkdir -p /var/www/weloveai.cloud
cd /var/www/weloveai.cloud
```

### Step 2: Clone Your Repository

Replace `YOUR_USERNAME` with your actual GitHub username:

```bash
sudo git clone https://github.com/YOUR_USERNAME/weloveai-cloud.git .
```

**Example:**
If your GitHub username is `john123`, the command would be:
```bash
sudo git clone https://github.com/john123/weloveai-cloud.git .
```

**Note:** If your repository is private, you'll need to:
1. Generate a Personal Access Token on GitHub
2. Use: `git clone https://YOUR_TOKEN@github.com/YOUR_USERNAME/weloveai-cloud.git .`

### Step 3: Set Permissions

```bash
sudo chown -R $USER:$USER /var/www/weloveai.cloud
cd /var/www/weloveai.cloud
```

---

## 🔨 Part 5: Building Your Website

### Step 1: Install Dependencies

```bash
npm install
```

This will take 1-3 minutes. Wait for it to finish.

### Step 2: Build the Website

```bash
npm run build
```

This creates the production files. Wait 30-60 seconds.

### Step 3: Verify Build

```bash
ls -la dist
```

You should see files like `index.html`, `assets` folder, etc.

---

## ⚙️ Part 6: Configuring Nginx

### Step 1: Copy Nginx Configuration

```bash
sudo cp /var/www/weloveai.cloud/nginx.conf /etc/nginx/sites-available/weloveai.cloud
```

### Step 2: Enable the Site

```bash
sudo ln -s /etc/nginx/sites-available/weloveai.cloud /etc/nginx/sites-enabled/
```

### Step 3: Remove Default Site

```bash
sudo rm /etc/nginx/sites-enabled/default
```

### Step 4: Test Configuration

```bash
sudo nginx -t
```

You should see: **"test is successful"**

### Step 5: Reload Nginx

```bash
sudo systemctl reload nginx
```

---

## 🔒 Part 7: Setting Up SSL (HTTPS)

### Step 1: Install Certbot

```bash
sudo apt install -y certbot python3-certbot-nginx
```

### Step 2: Get SSL Certificate

**IMPORTANT:** Make sure your domain `weloveai.cloud` is pointing to `62.72.12.45` first!

Check DNS:
```bash
ping weloveai.cloud
```

If it shows `62.72.12.45`, proceed:

```bash
sudo certbot --nginx -d weloveai.cloud -d www.weloveai.cloud
```

Follow the prompts:
- Enter your email
- Agree to terms (type `A` and press Enter)
- Choose whether to share email (type `Y` or `N`)
- Certbot will automatically configure SSL!

### Step 3: Update Nginx Config for HTTPS

Edit the config file:

```bash
sudo nano /etc/nginx/sites-available/weloveai.cloud
```

**In nano editor:**
- Use arrow keys to navigate
- Find the HTTPS server block (starts with `server { listen 443`)
- Remove the `#` symbols at the beginning of lines in the HTTPS section
- Find the HTTP redirect line and remove `#` from `return 301 https://...`
- Press `Ctrl + X` to exit
- Press `Y` to save
- Press `Enter` to confirm

### Step 4: Reload Nginx

```bash
sudo nginx -t
sudo systemctl reload nginx
```

---

## ✅ Part 8: Final Steps

### Step 1: Set Proper Permissions

```bash
sudo chown -R www-data:www-data /var/www/weloveai.cloud/dist
sudo chmod -R 755 /var/www/weloveai.cloud/dist
```

### Step 2: Configure Firewall

```bash
sudo ufw allow 'Nginx Full'
sudo ufw allow OpenSSH
sudo ufw enable
```

When asked, type `y` and press Enter.

### Step 3: Test Your Website

Open your mobile browser and visit:
- **http://weloveai.cloud** (should redirect to HTTPS)
- **https://weloveai.cloud**

🎉 **Your website should now be live!**

---

## 🔄 Part 9: Updating Your Website (When You Make Changes)

### Step 1: Update Files on GitHub

1. Make changes to your code
2. Upload/commit changes to GitHub (using GitHub app or web)

### Step 2: Pull Changes on VPS

Connect to your VPS, then:

```bash
cd /var/www/weloveai.cloud
git pull origin main
```

(Replace `main` with your branch name if different)

### Step 3: Rebuild

```bash
npm install
npm run build
sudo systemctl reload nginx
```

**Or use the deployment script:**

```bash
chmod +x deploy.sh
./deploy.sh
```

---

## 🆘 Troubleshooting

### Problem: "Permission denied" errors

**Solution:**
```bash
sudo chown -R $USER:$USER /var/www/weloveai.cloud
```

### Problem: Nginx won't start

**Solution:**
```bash
sudo nginx -t
```
Check the error message and fix the issue in the config file.

### Problem: Website shows "404 Not Found"

**Solution:**
1. Check if build was successful: `ls -la /var/www/weloveai.cloud/dist`
2. Check nginx config: `sudo nginx -t`
3. Check nginx error logs: `sudo tail -f /var/log/nginx/error.log`

### Problem: Can't connect via SSH

**Solution:**
1. Check if you're using correct IP: `62.72.12.45`
2. Check if SSH is enabled on VPS (contact Hostinger support)
3. Try using password authentication

### Problem: Git clone fails

**Solution:**
1. Check repository URL is correct
2. If private repo, use Personal Access Token
3. Make sure repository exists on GitHub

### Problem: Domain not working

**Solution:**
1. Check DNS settings - A record should point to `62.72.12.45`
2. Wait 5-10 minutes for DNS propagation
3. Check: `ping weloveai.cloud` should show your IP

### Problem: SSL certificate fails

**Solution:**
1. Make sure domain DNS is correct
2. Make sure port 80 and 443 are open
3. Try: `sudo certbot renew --dry-run`

---

## 📝 Quick Command Reference

**Connect to VPS:**
```bash
ssh root@62.72.12.45
```

**Navigate to website:**
```bash
cd /var/www/weloveai.cloud
```

**Pull latest code:**
```bash
git pull origin main
```

**Rebuild website:**
```bash
npm install && npm run build
```

**Reload Nginx:**
```bash
sudo systemctl reload nginx
```

**Check Nginx status:**
```bash
sudo systemctl status nginx
```

**View error logs:**
```bash
sudo tail -f /var/log/nginx/error.log
```

---

## 🎓 Beginner Tips

1. **Copy-paste carefully:** Make sure you copy entire commands
2. **Wait for commands:** Don't interrupt commands while they're running
3. **Read error messages:** They usually tell you what's wrong
4. **Take screenshots:** Save important outputs for reference
5. **One step at a time:** Don't rush, follow steps in order
6. **Ask for help:** If stuck, check error logs or ask for support

---

## 📱 Mobile Apps You'll Need

1. **GitHub** - For managing your code
2. **Termux** (Android) or **Termius** (iOS) - For SSH access
3. **Mobile Browser** - For testing your website

---

## ✅ Checklist

Before starting, make sure you have:
- [ ] GitHub account created
- [ ] Code uploaded to GitHub
- [ ] VPS IP address: `62.72.12.45`
- [ ] Domain name: `weloveai.cloud`
- [ ] Domain DNS pointing to VPS IP
- [ ] SSH access to VPS
- [ ] SSH app installed on phone

---

**Need help?** Check the error logs or contact support. Good luck! 🚀
