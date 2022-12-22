FROM --platform=linux/amd64 node:18-alpine3.17
WORKDIR /usr/src/app

RUN apk update
RUN apk add libc6-compat
RUN npm install -g pnpm@7.18.2

# COPY --from=api-builder /usr/src/app/out/pnpm*.yaml ./
# COPY --from=api-builder /usr/src/app/out/json .
COPY . .
RUN pnpm install

# COPY --from=api-builder /usr/src/app/out/full .
# RUN pnpm api db:generate
# RUN pnpm turbo run build --filter=@ispect/api...

# RUN ln -s \
#   /usr/src/app/node_modules/.pnpm/@prisma+client@4.8.0_prisma@4.8.0/node_modules/@prisma/engines/libquery_engine-linux-musl-openssl-3.0.x.so.node \
#   /usr/src/app/apps/api/build/libquery_engine-linux-musl-openssl-3.0.x.so.node
# RUN npkill
# RUN pnpm install --offline --prod

# RUN addgroup --system --gid 1001 nodejs
# RUN adduser --system --uid 1001 runner
# RUN chown -R runner:nodejs ./apps/api/build
# USER runner

# RUN pnpm api db:generate

EXPOSE 3500
ENTRYPOINT [ "pnpm", "start" ]
