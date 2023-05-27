#!/bin/sh
set -e

# Executa o arquivo com o export que o vault injetou no pod
source /vault/secrets/bu-env
source /vault/secrets/global-env

exec $@