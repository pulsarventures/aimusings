# Langflow-powered chat for aimusings.space website
## Install and Setup

1. The server is running on an Azure VM (2 vCPUs; 2GB RAM) that can be accessed via `ssh ubuntu@20.81.130.70` with the password `FinciplesAI@123`.
2. The server is running on port `7860` and can be accessed via `http://20.81.130.70:7860` or `https://weekly-known-moray.ngrok-free.app`.
3. The server is running on `ngrok` for secure `https` access, which is a requirement with a GitHub Pages website running `https` to interact with a chatbot and the ngrok tunnel is set up to forward traffic from port `7860` to the public URL. Doc reference [here](https://ngrok.com/docs/getting-started/#4-always-use-the-same-domain) for further reading about the setup.
    - `ngrok` is set up using pulsarventures.subscriptions@gmail.com as Google login.
    - The ngrok configuration is the same as the steps mentioned here in the [Langflow docs](https://docs.langflow.org/mcp-server#deploy-your-server-externally).
    - I've additionally set up the ngrok tunnel to run using [a static domain](https://ngrok.com/blog-post/free-static-domains-ngrok-users) name `weekly-known-moray.ngrok-free.app` for easy access.
4. The server is running on `screen` to keep it alive even if the SSH session is closed. Run `screen -S <session_name>`, e.g., `screen -S langflow`, to create a new screen session.
   - `Ctrl + A; D` to detach from the screen session.
   - `screen -r <session_name>` to reattach to the screen session.
   - `screen -ls` to list all screen sessions.
5. Langflow is already installed. The command to start up Langflow is `uv run langflow run --host 0.0.0.0 --port 7860 --env-file .env`.
6. The `.env` file contains the OpenAI API key and other environment variables required for Langflow to run.

## Flow file

The [**Langflow** flow file](https://docs.langflow.org/concepts-flows) is codified and stored [here in this repository](./AImusings.space%20website%20Q%26A.json) for iterative development and version control.


## User interactions capture

Today, all user questions are now captured in the [**DataStax Astra DB**](https://db.new) database cluster's `aimusings_chat_q` collection. The data is automatically vectorized using [**Astra DB**'s built-in vectorization capability](https://docs.datastax.com/en/astra-db-serverless/databases/embedding-generation.html) by leveraging the OpenAI `text-embedding-3-small` model for later use which is not fully hashed out yet. For accessing this cluster, navigate to [**Astra DB**](https://db.new) and use the `finciples.ai@gmail.com` Google login and find a database named `finciples`.

---