import openai

# Initialize GPT-3.5 Turbo
openai.api_key = "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"

def generate_question(topic):
    """Generates a quiz question on the given topic using GPT-3.5 Turbo."""
    prompt = f"Generate a quiz question about {topic}"
    response = openai.Completion.create(
        engine="text-davinci-003",  # Update this to the appropriate GPT-3.5 engine ID
        prompt=prompt,
        max_tokens=100
    )
    return response.choices[0].text.strip()

def generate_answer(question):
    """Generates an answer to the given question using GPT-3.5 Turbo."""
    prompt = f"Answer the following question: {question}"
    response = openai.Completion.create(
        engine="text-davinci-003",  # Update this to the appropriate GPT-3.5 engine ID
        prompt=prompt,
        max_tokens=100
    )
    return response.choices[0].text.strip()

# Example usage
if __name__ == "__main__":
    topic = "Python programming"
    question = generate_question(topic)
    print(f"Generated Question: {question}")

    answer = generate_answer(question)
    print(f"Generated Answer: {answer}")
