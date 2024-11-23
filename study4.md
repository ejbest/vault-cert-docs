
40 Your team uses the Transit secrets engine to encrypt all data before being written to a MySQL database server. During testing, you manually pull ciphertext from the database and decrypt it to ensure the data can be read. After decrypting the data, you are worried something is wrong since the plaintext data isn't legible. Why can you not read the original plaintext data after decrypting the ciphertext?

- The plaintext is Base64 encoded. Decode the plaintext to see the original data.
https://developer.hashicorp.com/vault/docs/secrets/transit

41 Requirement: All data be encrypted before being written to a backend database and application server must not store any of the encryption keys locally for additional security.
- Transit secrets engine

  The Transit secrets engine allows you to send cleartext data to Vault to be encrypted. Vault will encrypt the data with the referenced encryption key, which is stored locally, and returns the ciphertext to the application. The application can then store the encrypted data wherever it needs, such as a database or cloud-based storage.

  Although the encryption keys in the Transit secrets engine are exportable, they are generally kept in Vault. This strategy ensures that even if an application is compromised, the encryption keys are NOT stored locally, therefore increasing the organization's security posture.

  Video as well<br>
  https://developer.hashicorp.com/vault/tutorials/encryption-as-a-service/eaas-transit
  https://developer.hashicorp.com/vault/docs/secrets/transit

42 Google Cloud Platform (GCP) MYSQL: generate dynamic credentials against this MySQL server rather than use static credentials
- Regardless of where a database server is deployed, you can use the database secrets engine to generate dynamic credentials against it. It doesn't matter what platform that server is deployed on, you would still use the database secrets engine. You are NOT restricted to the platform-specific secrets engine (AWS, Azure, GCP, Kubernetes, etc).
https://developer.hashicorp.com/vault/docs/secrets

43 When you rotate the transit encryption key, future encryptions will use this new key.
- Old data can still be decrypted due to the use of a key ring.
- When you look at ciphertext, it will begin with vault:v#, where v# is the version. For example, the ciphertext shown below was encrypted with v2 of the encryption key.

    Key           Value
    ---           -----
    ciphertext    vault:v2:0VHTTBb2EyyNYHsa3XiXsvXOQSLKulH+NqS4eRZdtc2TwQCxqJ7PUipvqQ==

  You can also limit what encryption keys can be used with Vault. If you have rotated the encryption key 7 times, you can configure Vault to limit what encryption keys can be used to decrypt data. For example, you can configure the min_decryption_version parameter to tell Vault to "archive" any key prior to the specified version and not permit a decrypt action using a key older than specified with this parameter. Note that Vault does NOT delete this key, it just archives it. You can update this parameter to an earlier version and older data could then be decrypted.

https://developer.hashicorp.com/vault/docs/secrets/transit#usage
https://developer.hashicorp.com/vault/docs/secrets/transit#working-set-management


44 Vault Clusters; one for test and one for prod.   Using CLI to to to a selected one; you must update VAULT_ADDR 

$ env | grep VAULT <br>
VAULT_ADDR=https://vault.mydomain.com
VAULT_TOKEN=hvs.12345678abcdefghijklmnov

https://developer.hashicorp.com/vault/docs/commands#environment-variables

45 Auth methods on the Google Cloud Platform (GCP).

 GPC auth MIGHT be the best option, but it's NOT the ONLY option that you can use.

https://developer.hashicorp.com/vault/docs/concepts/auth

46 Using the CLI how can you see what policies are attached to the current token

https://developer.hashicorp.com/vault/docs/commands/token/lookup

##### vault token lookup
![IntegratedStorage](img/policies-current-token.png)


47 Authentication Methods as Vault 1.8
  - AppRole
  - AliCloud
  - AWS
  - Azure
  - Cloud Foundry
  - GitHub
  - Google Cloud
  - JWT/OIDC
  - Kerberos
  - Kubernetes
  - LDAP
  - Oracle Cloud Infrastructure
  - Okta
  - RADIUS
  - TLS Certificates
  - Tokens
  - Username and Password

https://developer.hashicorp.com/vault/docs/auth

48 Batch Tokens in Vault - 2 key facts  
1. batch tokens are not persisted (written) to storage
2. batch tokens are not valid accross all clusters using Vault Enterprise Replications 
https://developer.hashicorp.com/vault/docs/concepts/tokens#batch-tokens

49 Vault supports a wide variety of storage backends. You need high availability and can you choose any of the available storage backends?  Not all backends are equal; consul & raft/integrated are the best:
##### Storage Backeneds"
![IntegratedStorage](img/storageBackends.png)

50 Vault instances, or clusters, include two built-in policies that are created automatically. What are they?
1. The default policy is created automatically. This policy can be modified but not deleted.
2. The root policy is created automatically. This policy provides superuser privileges and cannot be deleted.

51 CI/CD in Terraform to AWS and currently uses privileged credentials that were manually created in AWS and are valid 24/7. Improve using Vault and limit the access to AWS only when it's needed.

- enable the AWS secrets engine and instruct Terraform to dynamically generate a short-lived AWS credential on each terraform apply.
https://developer.hashicorp.com/vault/docs/secrets/aws

52 Your organization has enabled the LDAP auth method on the path of corp-auth/. When you access the Vault UI, you cannot log in despite providing the correct credentials. Based on the screenshot below, what action should you take to log in?

Select More Options and enter the Mount path that LDAP was enabled on (corp-auth/)

##### See "Mount path"
![IntegratedStorage](img/loginMountPath.png)

53 Select the benefits the organization would see by using Integrated Storage over other storage backends 
1. simplified troubleshooting since Integrated Storage is a built-in solution
2. eliminates the requirement to deploy and manage a separate platform for storing encrypted data
3. immediate access to storage since the data is stored locally on disk
4. reduces operational overhead since all configuration is within Vault itself

https://developer.hashicorp.com/vault/docs/configuration/storage/raft
https://developer.hashicorp.com/vault/tutorials/raft
![IntegratedStorage](img/integratedStorage.png)

54 It is TRUE a rekey operation using the vault operator rekey command creates new unseal/recovery keys as well as a new master key.

The operator rekey command generates a new set of unseal keys. This can optionally change the total number of key shares or the required threshold of those key shares to reconstruct the master key. This operation is zero downtime, but it requires that Vault is unsealed and a quorum of existing unseal keys are provided.

https://developer.hashicorp.com/vault/tutorials/operations/rekeying-and-rotating


55 Vault can use a root token. Select the valid methods from below
1. running the command vault token create when using a valid root token
2. generating a root token using a quorum of recovery keys when using Vault auto unseal
3. initializing Vault when first creating the cluster by using vault operator init
https://developer.hashicorp.com/vault/docs/concepts/tokens#root-tokens

56 Human based auth methods are better suited for human-based access?
1. OIDC
2. GitHub 
3. Userpass
4. LDAP
5. Okta
https://developer.hashicorp.com/vault/tutorials/getting-started/getting-started-authentication#github-authentication

57 Which of the following are considered benefits of using policies in Vault? (select three)
1. policies have an implicit deny, meaning that policies are deny by default
2. policies provide Vault operators with role-based access control
3. provides granular access control to paths within Vault
https://developer.hashicorp.com/vault/tutorials/policies/policies
<pre>
There are many benefits to using Vault policies, including:

  - provides granular access control to paths within Vault to control who can access certain paths inside Vault

  - policies have an implicit deny, meaning that policies are deny by default - no policy means no authorization

  - policies provide Vault operators with role-based access control so you can ensure users only have access to the paths required
</pre>