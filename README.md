# E-Commerce Microservices Application

This project is an E-Commerce application built using a microservices architecture.  
The application demonstrates the design and implementation of scalable, production-ready microservices using modern technologies.

## Features

- **Microservices Architecture**: The application is divided into multiple services, each responsible for a specific domain:
  - **Authentication Service**: Manages user registration and login.
  - **Ticketing Service**: Allows users to create and manage tickets for events.
  - **Order Service**: Handles user orders and tracks their status.
  - **Payment Service**: Processes payments for orders.
  - **Expiration Service**: Manages order expiration times to ensure timely processing.

- **Technologies Used**:
  - **Backend**:
    - Node.js with Express.js
    - TypeScript for type safety
    - MongoDB for data storage
    - NATS Streaming Server for event-based communication
  - **Frontend**:
    - React with Next.js for server-side rendering
  - **Infrastructure**:
    - Docker for containerization
    - Kubernetes for orchestration and deployment
    - Skaffold for streamlined development workflow

## Getting Started

### Prerequisites

- [Docker](https://www.docker.com/get-started)
- [Kubernetes](https://kubernetes.io/docs/setup/)
- [Skaffold](https://skaffold.dev/docs/install/)

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/bar1996/ticketing.git
   cd ticketing
   ```

2. **Set Up Kubernetes Cluster**:
   - Ensure your Kubernetes cluster is running.
   - Install Ingress-NGINX for routing:
     ```bash
     kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.43.0/deploy/static/provider/cloud/deploy.yaml
     ```

3. **Configure Environment Variables**:
   - Create a Kubernetes secret for JWT authentication:
     ```bash
     kubectl create secret generic jwt-secret --from-literal=JWT_KEY=your_jwt_secret
     ```

4. **Start the Application**:
   - Use Skaffold to build and deploy the application:
     ```bash
     skaffold dev
     ```

## Usage

- Access the application via the Ingress controller's IP or configured domain.
- Register as a new user, create tickets, place orders, and process payments through the web interface.

## Project Structure

```
ticketing/
├── auth/           # Authentication service
├── tickets/        # Ticketing service
├── orders/         # Order service
├── payments/       # Payment service
├── expiration/     # Expiration service
├── client/         # Frontend application
├── common/         # Shared code and utilities
├── infra/          # Infrastructure configurations
└── README.md       # Project documentation

```


