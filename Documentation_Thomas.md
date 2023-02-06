Google Cloud - Kubernetes 

` https://cloud.google.com/learn/what-is-kubernetes?hl=fr `

How To Use a Dockerfile to Launch a Kubernetes Pod with a Custom NGINX Page

` https://www.youtube.com/watch?v=SpLOFr53csI   `

How to install Kubectl and Minikube

` https://www.youtube.com/watch?v=5-LHcpkRA58 `

*** Mise en place d'un conteneur avec un Dockerfile ***

docker build -t thoomaas123/pokemonapi:1.0

docker push thoomaas123/pokemonapi:1.0

*** Installation de minikube ***

minikube start 

*** Mise en place de kubernetes ***

kubectl create deployment pokemonapi --image=docker.io/thoomaas123/pokemonapi:1.0

kubectl expose deployment pokemonapi --type=NodePort --port=80 --name=pokemonapi

kubectl get pods

minikube service pokemonapi
