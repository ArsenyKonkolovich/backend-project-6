FROM node:18-slim@sha256:74620fb9a38ebac6f61fc4a4b72eff49abe121e1fbbdb84b44c83003e408fee9

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
