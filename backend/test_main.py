from fastapi.testclient import TestClient
from main import app

def test_draw_api():
    client = TestClient(app)
    resp = client.get("/draw")
    assert resp.status_code == 200
    data = resp.json()
    assert "fortune" in data
    assert isinstance(data["fortune"], str)

def test_draw_and_history_integration():
    client = TestClient(app)
    response_1 = client.get("/draw")
    assert response_1.status_code == 200
    fortune_1 = response_1.json()["fortune"]

    history_res = client.get("/history")
    assert history_res.status_code == 200
    current_history = history_res.json()["history"]
    
    assert fortune_1 in current_history
    assert len(current_history) >= 1

def test_history_limit():
    client = TestClient(app)
    for _ in range(4):
        client.get("/draw")
    
    history_res = client.get("/history")
    current_history = history_res.json()["history"]
    
    assert len(current_history) == 3
