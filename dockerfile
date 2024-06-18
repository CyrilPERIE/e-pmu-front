FROM node:20-alpine3.17

# Définit le répertoire de travail dans le conteneur
WORKDIR /app

run npm install --global http-server

# Copie le fichier package.json et package-lock.json dans le répertoire de travail
COPY package*.json ./

# Installe les dépendances
run npm install

# Copie le reste de l'application dans le répertoire de travail
COPY . .

# Compile l'application React pour la production
run npm run build

cmd http-server ./build