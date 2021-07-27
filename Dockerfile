FROM mcr.microsoft.com/playwright:v1.10.0-focal
USER root
RUN mkdir -p /home/tests
WORKDIR /home/tests

COPY . .

RUN npm ci
CMD ["/bin/bash", "npm run test-chrome"]