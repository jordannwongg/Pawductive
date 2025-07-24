from pydantic import BaseModel
from datetime import datetime

# Base class for shared fields
class GoalBase(BaseModel):
    title: str  # All goals must have a title (required for create & read)

# Used when a client sends data to create a new goal (POST)
class GoalCreate(GoalBase):
    pass  # Inherits title from GoalBase

# Used when sending data back to client (GET)
class GoalRead(GoalBase):
    id: int
    complete: bool
    created_at: datetime

    # Tells Pydantic to work with SQLAlchemy models
    model_config = {
        "from_attributes": True
    }
