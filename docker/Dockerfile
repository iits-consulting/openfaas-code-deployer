FROM openfaas/faas-cli
ENV OPENFAAS_API=https://dfd-openfaas.iits.tech
ARG LANGUAGE=node12
ARG USER=admin
ARG CREDENTIALS=deadlyfree4life
RUN faas-cli login --gateway $OPENFAAS_API -u $USER --password $CREDENTIALS
RUN faas-cli new --lang $LANGUAGE javascript-fn

