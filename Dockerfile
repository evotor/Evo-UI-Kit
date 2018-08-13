FROM node:9.11.1 as builder
LABEL company="evotor"
RUN useradd --user-group --create-home --shell /bin/false app
ENV HOME=/home/app
COPY package.json $HOME/
COPY yarn.lock $HOME/
WORKDIR $HOME/
RUN yarn install
COPY ./ $HOME/
RUN yarn run build
RUN yarn run build:storybook

FROM nginx:1.13.1
LABEL company="evotor"
ENV HOME=/home/app
COPY --from=builder $HOME/dist/storybook /usr/share/nginx/html
