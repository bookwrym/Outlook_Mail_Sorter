import requests

OLLAMA_URL = "http://localhost:11434/api/generate"
MODEL = "llama3"


def classify_email(email_text: str, categories: list[str], Directory: list[str]) -> str:
    prompt = (
        "You are an email classification assistant.\n"
        "Choose EXACTLY ONE category from the following list:\n"\
        # Add string containing the position and department variables from the directory code 
        f"{', '.join(categories)}.\n\n"
        "Respond ONLY with the category name.\n\n"
        f"Email:\n{email_text}"
        f"Infromation about sender: {','.join(Directory)}."
    )

    response = requests.post(
        OLLAMA_URL,
        json={
            "model": MODEL,
            "prompt": prompt
        }
    ).json()

    # Ollama streams tokens unless instructed otherwise
    # If .json() returns dict with "response", it's complete text
    return response["response"].strip()


