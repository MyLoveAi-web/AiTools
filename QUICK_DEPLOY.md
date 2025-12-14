# Quick Deployment Guide

## 🚀 Quick Start - Deploy to Hostinger VPS

### Prerequisites Checklist
- [ ] VPS IP: `62.72.12.45`
- [ ] Domain: `weloveai.cloud` DNS pointing to VPS IP
- [ ] SSH access to VPS

### Step-by-Step Deployment

#### 1. Connect to VPS
```bash
ssh root@62.72.12.45
```

#### 2. Install Node.js & Nginx
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs nginx git
```

#### 3. Upload Files to VPS

**Option A: Using SCP (from your local machine)**
```bash
scp -r /path/to/weloveai-cloud root@62.72.12.45:/var/www/weloveai.cloud
```

**Option B: Using Git**
```bash
cd /var/www
sudo git clone <your-repo-url> weloveai.cloud
cd weloveai.cloud
```

#### 4. Install Dependencies & Build
```bash
cd /var/www/weloveai.cloud
npm install
npm run build
```

#### 5. Configure Nginx
```bash
sudo cp nginx.conf /etc/nginx/sites-available/weloveai.cloud
sudo ln -s /etc/nginx/sites-available/weloveai.cloud /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx
```

#### 6. Set Permissions
```bash
sudo chown -R www-data:www-data /var/www/weloveai.cloud/dist
sudo chmod -R 755 /var/www/weloveai.cloud/dist
```

#### 7. Setup SSL (HTTPS)
```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d weloveai.cloud -d www.weloveai.cloud
```

#### 8. Update Nginx for HTTPS
Edit `/etc/nginx/sites-available/weloveai.cloud`:
- Uncomment HTTPS server block
- Comment out HTTP redirect
- Reload: `sudo systemctl reload nginx`

### ✅ Done!
Visit: **https://weloveai.cloud**

### Updating Later
```bash
cd /var/www/weloveai.cloud
./deploy.sh
```

### Troubleshooting
- Check logs: `sudo tail -f /var/log/nginx/error.log`
- Test nginx: `sudo nginx -t`
- Check status: `sudo systemctl status nginx`
