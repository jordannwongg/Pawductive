from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal
import models
import schemas

router = APIRouter()

# Dependency for DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/goals", response_model=list[schemas.GoalRead])
def get_goals(db: Session = Depends(get_db)):
    return db.query(models.Goal).all()

@router.post("/goals", response_model=schemas.GoalRead)
def create_goal(goal: schemas.GoalCreate, db: Session = Depends(get_db)):
    db_goal = models.Goal(title=goal.title)
    db.add(db_goal)
    db.commit()
    db.refresh(db_goal)
    return db_goal

@router.patch("/goals/{goal_id}", response_model=schemas.GoalRead)
def update_goal_complete(goal_id: int, db: Session = Depends(get_db)):
    goal = db.query(models.Goal).filter(models.Goal.id == goal_id).first()
    if not goal:
        raise HTTPException(status_code=404, detail="Goal not found")

    goal.complete = not goal.complete
    db.commit()
    db.refresh(goal)
    return goal 

@router.delete("/goals/{goal_id}", status_code=204)
def delete_goal(goal_id: int, db: Session = Depends(get_db)):
    goal = db.query(models.Goal).filter(models.Goal.id == goal_id).first()
    if not goal:
        raise HTTPException(status_code=404, detail="Goal not found")

    db.delete(goal)
    db.commit()
    return

