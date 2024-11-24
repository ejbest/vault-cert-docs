

#### Just some misc examples to keep handy

curl --header "X-Vault-Token: <token>" --request GET  https://vault.<domain>.com/v1/auth/token/lookup-self | jq

<pre>
curl --header "X-Vault-Token: 1234567890" --request GET  https://vault.mydomain.com/v1/auth/token/lookup-self | jq
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   463  100   463    0     0   6172      0 --:--:-- --:--:-- --:--:--  6256
{
  "request_id": "17da5a83-824b-d378-d186-bc39cbb73dde",
  "lease_id": "",
  "renewable": false,
  "lease_duration": 0,
  "data": {
    "accessor": "abcdefg",
    "creation_time": 1731955698,
    "creation_ttl": 0,
    "display_name": "root",
    "entity_id": "",
    "expire_time": null,
    "explicit_max_ttl": 0,
    "id": "1234567890",
    "meta": null,
    "num_uses": 0,
    "orphan": true,
    "path": "auth/token/root",
    "policies": [
      "root"
    ],
    "ttl": 0,
    "type": "service"
  },
  "wrap_info": null,
  "warnings": null,
  "auth": null
}
</pre>