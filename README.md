# Node.js Kubernetes CI/CD Project

This project is a simple Node.js web application that has been containerized with Docker and deployed to a local Kubernetes cluster using Rancher Desktop. It also features a Continuous Integration (CI) pipeline built with GitHub Actions to automate testing, building, and deployment.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Running Locally](#running-locally)
- [Kubernetes Deployment](#kubernetes-deployment)
- [CI/CD Pipeline](#cicd-pipeline)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## Overview

This project demonstrates how to:

- Develop a Node.js application.
- Containerize the application using Docker.
- Deploy the containerized application to Kubernetes.
- Automate testing, building, and deployment using a CI/CD pipeline with GitHub Actions.

## Features

- **Node.js Web Application:** A simple app serving a "Hello, World!" message.
- **Docker Containerization:** The app is built into a Docker image for consistency across environments.
- **Kubernetes Deployment:** Deployed to a local Kubernetes cluster managed by Rancher Desktop.
- **CI/CD Pipeline:** Automated workflows to run tests, build the Docker image, and deploy to Kubernetes.

## Prerequisites

- **Node.js** (v18 or later)
- **Docker** (Docker Engine/Moby)
- **Kubernetes Cluster:** Set up locally via Rancher Desktop.
- **Git:** To manage source code.
- **GitHub Account:** For repository hosting and CI/CD using GitHub Actions.
- **act (Optional):** To run GitHub Actions workflows locally.

## Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/nodejs-k8s-app.git
   cd nodejs-k8s-app
   ```
