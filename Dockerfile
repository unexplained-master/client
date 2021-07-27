FROM node:lts-alpine3.14 as dependencies
WORKDIR /app
COPY package.json package-lock.json ./
RUN yarn install --frozen-lockfile

FROM node:lts-alpine3.14 as builder

ARG GHOST_CONTENT_API_URL
ARG GHOST_CONTENT_API_KEY
ARG GHOST_CONTENT_API_VERSION

WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules

ENV GHOST_CONTENT_API_URL=$GHOST_CONTENT_API_URL
ENV GHOST_CONTENT_API_KEY=$GHOST_CONTENT_API_KEY
ENV GHOST_CONTENT_API_VERSION=$GHOST_CONTENT_API_VERSION

RUN yarn next build

FROM node:lts-alpine3.14 as runner
WORKDIR /app
ENV NODE_ENV production

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]