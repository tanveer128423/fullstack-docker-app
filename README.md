Fullstack Docker App
===================

A full-stack app with React (frontend), Express (backend), and PostgreSQL (database) running in Docker.

---

Project Structure
-----------------
frontend/     - React app
backend/      - Express app
db/           - Postgres database (Docker volume)
docker-compose.yml
nginx.conf    - Nginx config for frontend

---

Setup & Run
-----------
1. Clone repo and go to folder
2. Run: docker-compose up --build -d
3. Check containers: docker ps

Example docker ps output:
CONTAINER ID   IMAGE                           PORTS
0cf4d1766c23   fullstack-docker-app-frontend   0.0.0.0:5173->5173/tcp
7749c1a29767   fullstack-docker-app-backend    0.0.0.0:3000->3000/tcp
430b70d71989   postgres:13                     0.0.0.0:5432->5432/tcp

---

Access
------
Frontend: http://localhost:5173
Backend: http://localhost:3000
Database: localhost:5432

---

Docker Commands
---------------
Check logs:
docker logs mini-project-setup-frontend
docker logs mini-project-setup-backend
docker logs mini-project-setup-db

Access container shell:
docker exec -it mini-project-setup-backend sh

Stop containers:
docker-compose down

Remove containers & images:
docker-compose down --rmi all

---

Examples (Text)
---------------
1. Frontend logs:
> frontend@0.0.0 dev
> vite --host 0.0.0.0
VITE ready in 447 ms
Local: http://localhost:5173/

2. Backend logs:
Server is listening on http://localhost:3000

3. Postgres logs:
PostgreSQL database ready, listening on port 5432

4. Backend container shell:
$ docker exec -it mini-project-setup-backend sh
/app # ls
Dockerfile app.js node_modules package.json
