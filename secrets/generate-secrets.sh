#!/bin/bash
# Based on the https://stackoverflow.com/a/23877974
echo "Generating private key";
2>/dev/null openssl genrsa 2048 | openssl pkcs8 -topk8 -nocrypt -out private-key.pem
echo "Generating public key";
2>/dev/null openssl rsa -in private-key.pem -pubout > public-key.pem