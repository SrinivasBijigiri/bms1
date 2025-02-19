#!/bin/bash
cd /var/www/html

# Install dependencies
npm install

# Build the application
npm run build

# Set permissions
chown -R ec2-user:ec2-user /var/www/html