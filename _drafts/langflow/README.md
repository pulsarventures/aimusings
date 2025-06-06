# Langflow-powered chat for aimusings.space website
## Install and Setup

1. The server is running on an Azure VM (2 vCPUs; 2GB RAM) that can be accessed via `ssh ubuntu@20.81.130.70` with the password `FinciplesAI@123`.
2. The server is running on port `7860` and can be accessed via `http://20.81.130.70:7860` or `https://weekly-known-moray.ngrok-free.app`.
3. The server is running on `ngrok` for secure `https` access, which is a requirement with a GitHub Pages website running `https` to interact with a chatbot and the ngrok tunnel is set up to forward traffic from port `7860` to the public URL. Doc reference [here](https://ngrok.com/docs/getting-started/#4-always-use-the-same-domain) for further reading about the setup.
    - `ngrok` is set up using pulsarventures.subscriptions@gmail.com as Google login.
    - The ngrok configuration is the same as the steps mentioned here in the [Langflow docs](https://docs.langflow.org/mcp-server#deploy-your-server-externally).
    - I've additionally set up the ngrok tunnel to run using [a static domain](https://ngrok.com/blog-post/free-static-domains-ngrok-users) name `weekly-known-moray.ngrok-free.app` for easy access.
    <details>
    <summary>ngrok config file at `/home/ubuntu/.config/ngrok/ngrok.yml`</summary>

    ```yaml
    version: "3"
    agent:
        authtoken: 2wL0IjU78owrjR3ZwUFQZYZrO7n_2DPCKUPgQkEc1R39eyQ5m
    endpoints:
    - name: aimusings_langflow_tunnel
        url: weekly-known-moray.ngrok-free.app
        upstream:
        url: 7860
    ```
    - Start `ngrok` with `ngrok start aimusings_langflow_tunnel` to start the tunnel.
    </details>
4. The server is running on `screen` to keep it alive even if the SSH session is closed. Run `screen -S <session_name>`, e.g., `screen -S langflow`, to create a new screen session.
   - `Ctrl + A; D` to detach from the screen session.
   - `screen -r <session_name>` to reattach to the screen session.
   - `screen -ls` to list all screen sessions.
5. Langflow is already installed. The command to start up Langflow is `uv run langflow run --host 0.0.0.0 --port 7860 --env-file .env`. The command to install newer version of Langlfow is `uv pip install langflow langflow[postgresql] -U`.
6. The `.env` file contains the OpenAI API key and other environment variables required for Langflow to run.

<details>
<summary>/home/ubuntu/.env file contents</summary>

```yaml
LANGFLOW_LOG_LEVEL="info"
LANGFLOW_LOG_FILE="langflow.log"
LANGFLOW_CONFIG_DIR="./data"
LANGFLOW_SAVE_DB_IN_CONFIG_DIR="true"
DO_NOT_TRACK="true"
# Later we can set auth to the URL, https://docs.langflow.org/configuration-authentication
#LANGFLOW_AUTO_LOGIN="False"
#LANGFLOW_SUPERUSER="admin"
#LANGFLOW_SUPERUSER_PASSWORD="FinciplesAI@123"
#LANGFLOW_NEW_USER_IS_ACTIVE="True"
OPENAI_API_KEY="CHANAGE_ME"
SUPABASE_DEV="postgresql://postgres.bpdzwmmwdmfypoxoyahy:Supa%40ssandra2024@aws-0-us-east-2.pooler.supabase.com:6543/postgres"
SUPABASE_MAIN="postgresql://postgres.viiflkpgditgovtpizbj:Supa%40ssandra2024@aws-0-us-east-1.pooler.supabase.com:6543/postgres"
NGROK_AUTH_TOKEN=2wL0IjU78owrjR3ZwUFQZYZrO7n_2DPCKUPgQkEc1R39eyQ5m
```
</details>

## Flow file

The [**Langflow** flow file](https://docs.langflow.org/concepts-flows) is codified and stored [here in this repository](./AImusings.space%20website%20Q%26A.json) for iterative development and version control.


## User interactions capture

Today, all user questions are now captured in the [**DataStax Astra DB**](https://db.new) database cluster's `aimusings_chat_q` collection. The data is automatically vectorized using [**Astra DB**'s built-in vectorization capability](https://docs.datastax.com/en/astra-db-serverless/databases/embedding-generation.html) by leveraging the OpenAI `text-embedding-3-small` model for later use which is not fully hashed out yet. For accessing this cluster, navigate to [**Astra DB**](https://db.new) and use the `finciples.ai@gmail.com` Google login and find a database named `finciples`.

---