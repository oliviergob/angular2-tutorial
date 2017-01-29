#!/bin/bash

cp -r * /var/www/html
sudo systemctl restart apache2.service
