#!/bin/bash
############## STEP-1 UPDATE UBUNTU ###############
yes | sudo apt update
############## STEP-2 INSTALL NGINX ###############
yes | sudo apt install nginx
############## STEP-3 START  NGINX  ###############
sudo systemctl start nginx
############## STEP-4 ENABLE NGINX ################
sudo systemctl enable nginx

yes | sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
sudo docker run hello-world 
