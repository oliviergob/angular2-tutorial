#!/bin/bash

cp -r * /var/www/html
cp .htaccess /var/www/html
sudo systemctl restart apache2.service
