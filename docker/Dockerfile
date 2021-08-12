FROM openfaas/faas-cli
ENV OPENFAAS_API=https://dfd-openfaas.iits.tech
ARG LANGUAGE=node12
ARG OPENFAAS_ADMIN_PASSWORD
RUN echo $OPENFAAS_ADMIN_PASSWORD | faas-cli login -u admin --password-stdin
RUN faas-cli new --lang $LANGUAGE javascript-fn

