# openfaas-code-deployer
OpenFAAS Docker Function which will be able to deploy other OpenFAAS Function 
```bash
faas-cli new --lang dockerfile faas-deployer
```
- Create a PAT https://github.com/settings/tokens/new?scopes=write:packages
```bash
export FAAS_API=http://20.52.205.67:8080
export CR_PAT=<>
export USERNAME=rowi1de
echo $CR_PAT | docker login ghcr.io -u USERNAME --password-stdin
echo $CR_PAT | faas-cli secret create ghcr-token -g $FAAS_API
faas-cli build --yaml faas-deployer.yml
faas-cli push --yaml faas-deployer.yml
faas-cli deploy --yaml faas-deployer.yml
```