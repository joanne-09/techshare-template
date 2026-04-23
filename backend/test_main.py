from fastapi.testclient import TestClient
from main import app

def test_draw_api():
    client = TestClient(app)
    resp = client.get("/draw")
    assert resp.status_code == 200
    data = resp.json()
    assert "fortune" in data
    assert isinstance(data["fortune"], str)
