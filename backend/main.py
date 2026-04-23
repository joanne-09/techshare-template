from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import random

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class FortuneResponse(BaseModel):
    fortune: str

FORTUNES = [
    "The code you write today will be legendary.",
    "A major merge conflict is avoided by your wisdom.",
    "Your Pull Request will be approved without comments.",
    "System architecture is the poetry of logic.",
    "Complexity is the enemy of execution.",
    "Stay hungry, stay foolish, stay coding.",
    "Your CI pipeline will run like silk today."
]

@app.get("/draw", response_model=FortuneResponse)
def draw():
    return {"fortune": random.choice(FORTUNES)}