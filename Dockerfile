FROM mcr.microsoft.com/playwright:v1.10.0-focal

USER root
RUN mkdir -p /home/tests && cd /home/tests
WORKDIR /home/tests
RUN apt-get update && \
	apt-get install -y default-jre git wget

ENV JAVA_HOME /usr/lib/jvm/java-8-openjdk-amd64/
RUN export JAVA_HOME
 
COPY . .

RUN npm ci

CMD ["/bin/bash", "npm run test-chrome"]