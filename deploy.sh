#!/bin/bash

# Deployment script for WeLoveAI.cloud
# Run this script on your VPS after initial setup

set -e

echo "🚀 Starting deployment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
DOMAIN="weloveai.cloud"
APP_DIR="/var/www/weloveai.cloud"
REPO_URL="" # Add your git repo URL here if using git
BACKUP_DIR="/var/backups/weloveai.cloud"

# Create directories if they don't exist
echo -e "${YELLOW}Creating directories...${NC}"
sudo mkdir -p $APP_DIR
sudo mkdir -p $BACKUP_DIR
sudo chown -R $USER:$USER $APP_DIR

# Navigate to app directory
cd $APP_DIR

# Backup existing build (if exists)
if [ -d "dist" ]; then
    echo -e "${YELLOW}Backing up existing build...${NC}"
    sudo tar -czf "$BACKUP_DIR/backup-$(date +%Y%m%d-%H%M%S).tar.gz" dist/
fi

# If using git, pull latest changes
# Uncomment if you're using git:
# echo -e "${YELLOW}Pulling latest changes from git...${NC}"
# git pull origin main

# Install/update dependencies
echo -e "${YELLOW}Installing dependencies...${NC}"
npm install --production=false

# Build the application
echo -e "${YELLOW}Building application...${NC}"
npm run build

# Set proper permissions
echo -e "${YELLOW}Setting permissions...${NC}"
sudo chown -R www-data:www-data $APP_DIR/dist
sudo chmod -R 755 $APP_DIR/dist

# Test nginx configuration
echo -e "${YELLOW}Testing nginx configuration...${NC}"
sudo nginx -t

# Reload nginx
echo -e "${YELLOW}Reloading nginx...${NC}"
sudo systemctl reload nginx

echo -e "${GREEN}✅ Deployment completed successfully!${NC}"
echo -e "${GREEN}Your site should be live at http://$DOMAIN${NC}"
