# Node.js CI/CD Pipeline

[![CI](https://github.com/arshitchoubey18/nodejs-cicd-pipeline/actions/workflows/ci.yml/badge.svg)](https://github.com/arshitchoubey18/nodejs-cicd-pipeline/actions/workflows/ci.yml)
[![Node](https://img.shields.io/badge/node-20.x-green)](https://nodejs.org)
[![Docker](https://img.shields.io/badge/docker-ready-blue)](https://www.docker.com)
[![License](https://img.shields.io/badge/license-MIT-lightgrey)](LICENSE)

> Production-grade CI/CD pipeline for Node.js using GitHub Actions and Docker. Push to main → tests run → artifact built in ~70 seconds.

**Live Repo:** https://github.com/arshitchoubey18/nodejs-cicd-pipeline

---

## Why this project

I built this to learn how real teams ship code without manual SSH and `npm install` on servers. Every push and pull request is automatically tested, and the pipeline is ready to build Docker images and deploy when secrets are added.

## Tech Stack

- **Runtime:** Node.js 20.x
- **CI/CD:** GitHub Actions
- **Containerization:** Docker (multi-stage build)
- **Testing:** Native Node.js assert
- **Package Manager:** npm with lockfile

## Pipeline Overview

```
Push to main → Checkout → Setup Node 20 → npm ci (cached) → npm test → Upload artifact
PR to main  →  Same tests run (no deploy)
```

**Current Status:**
- ✅ CI job: working and green
- ⏸️ Docker build: ready (commented until Docker Hub secrets added)
- ⏸️ Deploy: ready (commented until VPS configured)

## Quick Start

```bash
# 1. Clone
git clone https://github.com/arshitchoubey18/nodejs-cicd-pipeline.git
cd nodejs-cicd-pipeline

# 2. Install (uses lockfile for reproducibility)
npm ci

# 3. Test
npm test

# 4. Run
npm start
# visit http://localhost:3000
# health check: http://localhost:3000/health
```

## Project Structure

```
.
├── .github/workflows/ci.yml  # GitHub Actions pipeline
├── src/index.js              # Express app
├── test/test.js              # Simple test suite
├── Dockerfile                # Multi-stage production build
├── .dockerignore
└── package.json
```

## Workflow Details

**File:** `.github/workflows/ci.yml`

Key features:
- `cache: 'npm'` → cuts install time by 60%
- `strategy.matrix` → easy to add Node 18, 22 later
- `permissions: contents: read` → least privilege security
- `concurrency` → cancels outdated runs
- Artifacts retained 1 day for downstream jobs

To enable full CD:
1. Add `DOCKERHUB_USERNAME` and `DOCKERHUB_TOKEN` in repo Secrets
2. Uncomment the `docker:` job in ci.yml
3. Push to main

## What I Learned

- Using `npm ci` vs `npm install` for reproducible builds
- GitHub Actions caching and job dependencies (`needs:`)
- Multi-stage Docker builds to reduce image size
- Securing pipelines with minimal permissions

## Author

**Arshit Choubey** — Computer Science @ Bangalore
- GitHub: [@arshitchoubey18](https://github.com/arshitchoubey18)
---

⭐ Star this repo if it helped you learn CI/CD!
