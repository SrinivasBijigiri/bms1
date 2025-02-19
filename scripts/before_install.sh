#!/bin/bash
# Install Node.js if not already installed
if ! command -v node &> /dev/null; then
    curl -sL https://rpm.nodesource.com/setup_18.x | bash -
    yum install -y nodejs
fi

# Create application directory if it doesn't exist
mkdir -p /var/www/html
cd /var/www/html

# Clean up existing files
rm -rf *