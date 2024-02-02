---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Kubernetes Application Lifecycle Management'
pubDate: 2024-02-01
description: 'The first post on Application Lifecycle Management on Kubernetes'
author: 'Aaron Imbrock'
image:
    url: 'https://kubernetes.io/images/wheel.svg'
    alt: 'The Kubernetes logo.'
tags: ["kubernetes", "learning in public", "CKA"]
---

# Rollouts and Versioning

Let's discuss rollouts and versioning in a deployment. 

When you first create a deployment it triggers a rollout. A new rollout creates a new deployment revision. Let's call this revision one.

In the future when the application is upgraded, meaning the container version is updated to a new one, a rollout is triggered and a new deployment revision is created.

This allows for easy rollback and revision tracking across deployments.

## Deployment Strategy

There's two types of deployment strategies. Say for example you have 5 instances of your application deployed.

One way to upgrade these to a new version is to first destroy all the existing instances and then deploy new instances running your new code.
As you can imagine, while the old version is down and the new instances haven't come up yet your application is not accessible to users.

This strategy is called the `recreate strategy` and thankfully this is not the default strategy employed by Kubernetes.

The second strategy is where we take down an old instance and bring up a new instance one-by-one. This way the application never goes down and the upgrade is seamless.
If you don't specify a deployment strategy Kubernetes will default to `rolling update`. In otherwords, `rolling update` is the default deployment strategy.

## Rollout Commands and YAML

How exactly do you upgrade your deployment?

```text


```

```text
> kubectl rollout status deployment/myapp-deployment
Waiting for rollout to finish: 0 of 10 updated replicas are available...
Waiting for rollout to finish: 1 of 10 updated replicas are available...
Waiting for rollout to finish: 2 of 10 updated replicas are available...
Waiting for rollout to finish: 3 of 10 updated replicas are available...
Waiting for rollout to finish: 4 of 10 updated replicas are available...
Waiting for rollout to finish: 5 of 10 updated replicas are available...
Waiting for rollout to finish: 6 of 10 updated replicas are available...
Waiting for rollout to finish: 7 of 10 updated replicas are available...
Waiting for rollout to finish: 8 of 10 updated replicas are available...
Waiting for rollout to finish: 9 of 10 updated replicas are available...
deployment "myapp-deployment" successfully rolled out
```

```text
> kubectl rollout history deployment/myapp-deployment
deployments "myapp-deployment"
REVISION CHANGE-CAUSE
1 <none>
2 kubectl apply --filename=deployment-definition.yml --record=tru
```


### Apply

```text
> kubectl apply –f deployment-definition.yml
deployment "myapp-deployment" configured
```

```text
> kubectl set image deployment/myapp-deployment \
nginx=nginx:1.9.1
deployment "myapp-deployment" image is updated
```

```yaml

```

### Recreate and Rolling Updates

```text
> kubectl get replicasets
NAME DESIRED CURRENT READY AGE
myapp-deployment-67c749c58c 0 0 0 22m
myapp-deployment-7d57dbdb8d 5 5 5 20m
```


### Upgrades and Rollbacks


### Kubectl run


### Command Summary

