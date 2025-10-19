# Docker MySQL Setup Cheatsheet

## Overview
This cheatsheet provides commands and steps to set up and manage a MySQL server using Docker, tailored to your `buy_and_sell` project setup.

## Prerequisites
- Docker installed (check with `docker --version`)

## Setup Commands

1. **Pull MySQL Image**
   - `docker pull mysql:latest`
     - (Use `mysql:8.0` for a specific version)

2. **Run MySQL Container**
   - `docker run -d -p 3306:3306 --name mysql-container -e MYSQL_ROOT_PASSWORD=my-secret-pw -v mysql-data:/var/lib/mysql mysql:latest`
     - `-d`: Detached mode
     - `-p 3306:3306`: Maps port 3306
     - `--name mysql-container`: Container name
     - `-e MYSQL_ROOT_PASSWORD=my-secret-pw`: Sets root password
     - `-v mysql-data:/var/lib/mysql`: Persists data

3. **Verify Container**
   - `docker ps`
     - (Look for `mysql-container`)

4. **Access MySQL Shell**
   - `docker exec -it mysql-container mysql -uroot -p`
     - (Enter `my-secret-pw` when prompted)

5. **Create Database and Table**
   - Inside MySQL shell, run: