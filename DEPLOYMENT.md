# Deployment Guide for WeLoveAI.cloud

This guide will help you deploy the WeLoveAI.cloud application to your Hostinger VPS.

## Prerequisites

- VPS with Ubuntu/Debian Linux
- Root or sudo access
- Domain name `weloveai.cloud` pointing to your VPS IP: `62.72.12.45`
- SSH access to your VPS

## Step 1: Connect to Your VPS

```bash
ssh root@62.72.12.45
# or
ssh your-username@62.72.12.45
```

## Step 2: Update System Packages

```bash
sudo apt update
sudo apt upgrade -y
```

## Step 3: Install Required Software

### Install Node.js (v18 or higher)

```bash
# Install Node.js using NodeSource repository
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Verify installation
node --version
npm --version
```

### Install Nginx

```bash
sudo apt install -y nginx

# Start and enable nginx
sudo systemctl start nginx
sudo systemctl enable nginx
```

### Install Git (if using version control)

```bash
sudo apt install -y git
```

## Step 4: Upload Your Project Files

You have several options to get your files on the VPS:

### Option A: Using SCP (from your local machine)

```bash
# From your local machine, navigate to the project directory
cd /path/to/weloveai-cloud

# Upload files to VPS
scp -r . root@62.72.12.45:/var/www/weloveai.cloud
```

### Option B: Using Git (Recommended)

```bash
# On your VPS
sudo mkdir -p /var/www/weloveai.cloud
cd /var/www/weloveai.cloud

# Clone your repository (if you have one)
git clone <your-repo-url> .

# Or initialize git and push from local
```

### Option C: Using SFTP/FTP Client

Use FileZilla, WinSCP, or any SFTP client to upload files to `/var/www/weloveai.cloud`

## Step 5: Install Project Dependencies

```bash
cd /var/www/weloveai.cloud
npm install
```

## Step 6: Build the Application

```bash
npm run build
```

This will create a `dist` folder with the production build.

## Step 7: Configure Nginx

### Copy the nginx configuration

```bash
sudo cp /var/www/weloveai.cloud/nginx.conf /etc/nginx/sites-available/weloveai.cloud
```

### Create symbolic link to enable the site

```bash
sudo ln -s /etc/nginx/sites-available/weloveai.cloud /etc/nginx/sites-enabled/
```

### Remove default nginx site (optional)

```bash
sudo rm /etc/nginx/sites-enabled/default
```

### Update the nginx config with correct paths

Edit the nginx config if needed:

```bash
sudo nano /etc/nginx/sites-available/weloveai.cloud
```

Make sure the `root` path points to `/var/www/weloveai.cloud/dist`

### Test and reload nginx

```bash
# Test configuration
sudo nginx -t

# If test passes, reload nginx
sudo systemctl reload nginx
```

## Step 8: Set Proper Permissions

```bash
sudo chown -R www-data:www-data /var/www/weloveai.cloud/dist
sudo chmod -R 755 /var/www/weloveai.cloud/dist
```

## Step 9: Configure Firewall (if needed)

```bash
# Allow HTTP and HTTPS
sudo ufw allow 'Nginx Full'
sudo ufw allow OpenSSH
sudo ufw enable
```

## Step 10: Set Up SSL Certificate (HTTPS)

### Install Certbot

```bash
sudo apt install -y certbot python3-certbot-nginx
```

### Obtain SSL Certificate

```bash
sudo certbot --nginx -d weloveai.cloud -d www.weloveai.cloud
```

Follow the prompts. Certbot will automatically configure nginx for HTTPS.

### Auto-renewal (already set up by certbot)

Certbot creates a cron job for auto-renewal. Test it:

```bash
sudo certbot renew --dry-run
```

## Step 11: Update Nginx Config for HTTPS

After SSL setup, uncomment the HTTPS server block in `/etc/nginx/sites-available/weloveai.cloud` and comment out the HTTP redirect.

## Step 12: Test Your Deployment

1. Visit `http://weloveai.cloud` (should redirect to HTTPS)
2. Visit `https://weloveai.cloud`
3. Test all pages and tools

## Step 13: Set Up Auto-Deployment (Optional)

### Using the deployment script

Make the script executable:

```bash
chmod +x /var/www/weloveai.cloud/deploy.sh
```

Run it:

```bash
cd /var/www/weloveai.cloud
./deploy.sh
```

### Using PM2 for process management (if running Node.js server)

```bash
# Install PM2
sudo npm install -g pm2

# Start application with PM2
pm2 start npm --name "weloveai-cloud" -- start

# Save PM2 configuration
pm2 save

# Set up PM2 to start on boot
pm2 startup
```

## Updating Your Application

### Manual Update

```bash
cd /var/www/weloveai.cloud

# Pull latest changes (if using git)
git pull origin main

# Install dependencies
npm install

# Build
npm run build

# Reload nginx
sudo systemctl reload nginx
```

### Using Deployment Script

```bash
cd /var/www/weloveai.cloud
./deploy.sh
```

## Troubleshooting

### Check Nginx Status

```bash
sudo systemctl status nginx
```

### Check Nginx Error Logs

```bash
sudo tail -f /var/log/nginx/error.log
```

### Check Nginx Access Logs

```bash
sudo tail -f /var/log/nginx/access.log
```

### Verify Domain DNS

```bash
# Check if domain points to your IP
dig weloveai.cloud +short
# Should return: 62.72.12.45
```

### Check File Permissions

```bash
ls -la /var/www/weloveai.cloud/dist
```

### Test Build Locally

```bash
cd /var/www/weloveai.cloud
npm run build
npm run preview
```

## Domain Configuration

Make sure your domain DNS records are set up correctly:

### A Record
- **Type**: A
- **Name**: @ (or weloveai.cloud)
- **Value**: 62.72.12.45
- **TTL**: 3600

### CNAME Record (for www)
- **Type**: CNAME
- **Name**: www
- **Value**: weloveai.cloud
- **TTL**: 3600

## Security Recommendations

1. **Keep system updated**: `sudo apt update && sudo apt upgrade`
2. **Use SSH keys** instead of passwords
3. **Configure firewall** properly
4. **Regular backups** of your application
5. **Monitor logs** regularly
6. **Use HTTPS** (SSL certificate)

## Backup Strategy

Create regular backups:

```bash
# Backup script
sudo tar -czf /var/backups/weloveai-cloud-$(date +%Y%m%d).tar.gz /var/www/weloveai.cloud
```

## Performance Optimization

1. Enable gzip compression (already in nginx config)
2. Set up CDN for static assets (optional)
3. Enable browser caching (already configured)
4. Monitor server resources

## Support

If you encounter issues:
1. Check nginx logs: `/var/log/nginx/error.log`
2. Check system logs: `journalctl -xe`
3. Verify DNS settings
4. Check firewall rules

---

**Your site should now be live at https://weloveai.cloud! 🎉**
