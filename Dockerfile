FROM node:18-slim@sha256:e2fbe082615911b184e192b05c55e7e38460a2c24c88d92e8c122ea0175fbe56

RUN apt-get update && apt-get install -yq \
  build-essential \
  python3

RUN ln -s /usr/bin/python3 /usr/bin/python

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY . .

ENV NODE_ENV=production
RUN make build

CMD ["bash", "-c", "make db-migrate && npm start"]
