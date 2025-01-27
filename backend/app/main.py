from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Bem-vindo ao jogo da memória!"}

@app.get("/cards")
def get_cards():
    return {"cards": ["🍎", "🍌", "🍇", "🍓", "🍒"]}
