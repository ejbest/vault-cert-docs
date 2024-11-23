
#### Storage Backends
- main vault configuration file
- all data encrypted in TLS at-rest using AES256
- storage backend specified in the main config file
- only one storage backend per cluster
- integrated (raft) and console are Hashicorp supported
- Not all storage backends are equal
    * snap shots 
    * cost considerations 
#### Secrets Engines
- like a plugin or a provider 
- responsible for managing the Secrets
- kv stores and can be mulitiples 
#### Authentication Methods
- perform Authentication and Manage Identities
- once authenticated will issue a token
- each token has a policy and TTL (time to live)
- tokens are the "default authentication method"
- aka root token
#### Audit Devices
- keeps tracks of requests and responses to Vault
- sensitive information is hashed before logging
- should not have more than 1 audit device per cluster 
- no write to log; then the request can not be completed 