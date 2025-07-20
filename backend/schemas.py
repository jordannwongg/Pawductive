from pydantic import BaseModel
from datetime import datetime

# Input: when creating a new goal
class GoalCreate(BaseModel):
    title: str

# Output: when returning a goal
class GoalRead(BaseModel):
    id: int
    title: str
    complete: bool
    created_at: datetime

    class Config:
        orm_mode = True
