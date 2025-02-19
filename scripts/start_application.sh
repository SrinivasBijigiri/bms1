#!/bin/bash
cd /var/www/html

# Start the application
npm run preview > /dev/null 2>&1 &

# Save the process ID
echo $! > /var/www/html/application.pid