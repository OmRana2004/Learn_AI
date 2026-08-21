import os 
from pathlib import Path
from dotenv import load_dotenv
from groq import Groq   

load_dotenv()
my_api_key=os.getenv("GROQ_API_KEY")

if not my_api_key:
    raise ValueError("API key kaha hai bhai")

client=Groq(api_key=my_api_key)

model="openai/gpt-oss-120b"
role="user"
prompt="I Love You baby!"
#  SYSTEM
message_system={
    "role": "system",
    "content": "You are my strict Office colleague who is also my mannager"
}
#  mesage me role and content
message={
    "role": role,
    "content": prompt
}

messages=[message_system, message]

response=client.chat.completions.create(model=model, messages=messages)
print(response.choices[0].message.content)
