sudo chown -R ${USER} .

sudo docker system prune -f
sudo docker-compose --env-file .env -f app/deploy/docker-compose.yaml up -d --build
sudo docker-compose --env-file .env -f app/deploy/docker-compose.yaml restart lexact_postgres
sudo rm -R app