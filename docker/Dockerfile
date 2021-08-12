FROM openfaas/faas-cli
ENV OPENFAAS_API=http://20.52.205.67:8080
ARG LANGUAGE=node12
ARG USER=admin
ARG CREDENTIALS=deadlyfree4life
RUN faas-cli login --gateway $OPENFAAS_API -u $USER --password $CREDENTIALS
RUN faas-cli new --lang $LANGUAGE javascript-fn

