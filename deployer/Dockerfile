FROM openfaas/faas-cli
ENV OPENFAAS_URL=https://dfd-openfaas.iits.tech
ARG LANGUAGE=node12
ARG OPENFAAS_ADMIN_PASSWORD
ENV PASSWORD=$OPENFAAS_ADMIN_PASSWORD
RUN echo $PASSWORD | faas-cli login -u admin --password-stdin
RUN faas-cli new --lang $LANGUAGE javascript-fn
