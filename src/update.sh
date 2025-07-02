#!/bin/bash

cd react-my-page
echo -e "📥 Updating git...\n"
git pull

echo -e "\n🔨 Running build...\n"
npm run build

echo -e "\n🗑️  Deleting old files...\n"
cd /var/www/html
sudo rm -fr ./*

echo -e "\n📤 Updating files...\n"
cd /home/ubuntu/react-my-page/build
sudo cp -r . /var/www/html

echo -e "\n✅ Deployment complete!\n"