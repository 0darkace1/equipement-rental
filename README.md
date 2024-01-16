<div align="center">
  <kbd>
    <img src="https://github.com/0darkace1/thiriot-location/blob/main/fiche-techniques/Entreprise/logo.png" width="350" height="150" />
  </kbd>
</div>

# Gestion et Localisation d'engins de chantier

Ce projet a pour but de simplifier et sécuriser la gestion locative d'engins de chantier pour l'entreprise THIRIOT-LOCATIONS

## Description:

Un boîtier embarqué sera dissimulé dans chaque engin de chantier mis en location.

Une base de données SQL permettra de stocker les données envoyées par les boîtiers embarqués.

### Fonctionnalités:

- Software:
  - S’authentifier (responsable des locations).
  - Créer une fiche client.
  - Créer une fiche engin de location (à compléter à chaque opération de maintenance).
  - Créer/compléter une fiche de location/retour d'engin.
  - Visualiser sur une carte la position GPS des engins et les éventuels trajets réalisés par ces derniers.
  - Visualiser une liste des engins disponibles à la location.
  - Visualiser deux historiques des locations : par client ou par engins de chantier.
  - Visualiser la liste des engins à livrer/récupérer chez un client.
  - Être averti quand une opération de maintenance systématique doit être réalisée sur un engin.
  - Gérer la maintenance des engins.
- Hardware:
  - Déterminer régulièrement la position GPS de l’engin.
  - Horodater les mises en marche et d’arrêt de l’engin.
  - Envoyer par un réseau à LPWAN ces données vers un broker MQTT.
  - Envoyer un message d’alarme en cas de tentative d’ouverture ou de débranchement du boîtier
    embarqué.

### Développée avec:

- [NextJS (React)](https://nextjs.org)
- [TailwindCSS](https://tailwindcss.com)
- [Prisma ORM](https://www.prisma.io)

- [Arduino](https://www.arduino.cc)
- [LoraWAN](https://docs.arduino.cc/learn/communication/lorawan-101)

- [Docker](https://www.docker.com)
- [Mosquitto MQTT](https://mosquitto.org)
- [MySQL](https://www.mysql.com/fr/)

## Mise en route

### Prérequis

- Raspberry Pi (Serveur Linux)
  - Docker & Docker Compose
- Arduino
  - [Module GPS](https://www.gotronic.fr/art-shield-mkr-gps-asx00017-30758.htm)
  - [Module Lora](https://www.gotronic.fr/art-carte-arduino-mkr-wan-1310-abx00029-30753.htm)
  - [Module RTC](https://www.gotronic.fr/art-module-rtc-i2c-ds1307-mr514-25748.htm)
  - Capteur de Tension,
  - Capteur d'ouverture,
- Boitier 3D pour le dispositif de traçage

### Installation

1. [Configurez votre serveur Linux et votre utilisateur](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-debian-11)

2. [Installer Docker et Docker Compose](https://docs.docker.com/engine/install/debian/)

3. [Étapes de post-installation pour Linux](https://docs.docker.com/engine/install/linux-postinstall/)

4.

5.

### Configuration

Edit .env file to configure the project

### Utilisation

GIFs are useful here to see the project in action.

### Dépannage

Or FAQs, if that's more appropriate.

## Annexes

- CRUD: CREATE READ UPDATE DELETE

### Mentions légales

Usage of this tool for attacking targets without prior mutual consent is illegal. It is the end user's responsibility to obey all applicable local, state, and federal laws. Developers assume no liability and are not responsible for any misuse or damage caused by this program.

### Remerciements

Thanks to all who helped inspire this template.

### Voir aussi

- [A simple README.md template](https://gist.github.com/DomPizzie/7a5ff55ffa9081f2de27c315f5018afc)
- [A template to make good README.md](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
- [A sample README for all your GitHub projects](https://gist.github.com/fvcproductions/1bfc2d4aecb01a834b46)
- [A simple README.md template to kickstart projects](https://github.com/me-and-company/readme-template)

### A Faire

- [ ] Conception - 💡

  - [ ] Modéliser les diagrammes UML
  - [ ] Modéliser la Base de données MySQL
  - [ ] Définir les Routes de l'API
  - [ ] Concevoir la maquette de l'interface utilisateur
  - [ ] Modéliser les Protocoles de communication entre les different périphériques
  - [ ] Déterminer les moyens de détection des allumages/extinction de l'engin
  - [ ] Déterminer les moyens de détection des tentatives de sabotage du traceur GPS

- [ ] Hardware - 🕹️

  - [x] Choisir le Microcontrôleur (Carte Arduino MKR WAN 1310)
  - [x] Choisir le Module LORA (Carte Arduino MKR WAN 1310)
  - [x] Choisir le Module GPS (Shield MKR GPS)
  - [ ] Choisir le Capteur de tension
  - [ ] Test Unitaire du module GPS
  - [ ] Test Unitaire du module LORA
  - [ ] Test Unitaire de connexion MQTT
  - [ ] Conception du schéma électrique (~~Fritzing~~, EasyEDA)
  - [ ] Conception CAO du Boitier Embarquée (Fusion 360)
  - [ ] Fabrication du Boitier Embarquée (Impression 3D)

- [ ] API - 🚧

  - [ ] Authentification

  - [ ] CRUD Utilisateurs
  - [ ] CRUD Client
  - [ ] CRUD Engins
  - [ ] CRUD Maintenance
  - [ ] CRUD Location
  - [ ] CRUD Retour de Location

  - [ ] Notifications
  - [ ] Enregistrement des Relevés GPS
  - [ ] Connexion avec le service MQTT

- [ ] Application - 📱

  - [ ] Fiche Utilisateurs
  - [ ] Fiche Client
  - [ ] Fiche Engins
  - [ ] Fiche Maintenance
  - [ ] Fiche Location
  - [ ] Fiche Retour de Location

  - [ ] Page Carte GPS des engins
  - [ ] Page liste des engins disponibles
  - [ ] Page Historique de locations par client
  - [ ] Page Historique de locations par engin
  - [ ] Page Liste des engins à livrer/récupérer
  - [ ] Page Gestion Maintenances

  - [ ] Adaptation pour périphérique Mobile de l'application
  - [ ] Centre de Notifications
  - [ ] Avertissement de maintenance systématique

- [ ] Mise en production - 🚀

  - [ ] Acheter le VPS & Nom de domaine
  - [ ] Installer et mettre a jour le serveur linux
  - [ ] Installer Docker
  - [ ] Configurer le Reverse Proxy & SSL

- [ ] Fin du projet - 🎉

- [ ] ~~Page Export de rapports (PDF, EXCEL)~~

### License

This project is licensed under the [MIT License](LICENSE.md).
