from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session

import model
import schemas
from database import engine, get_db

model.Base.metadata.create_all(bind=engine)

app = FastAPI()


@app.get("/")
def home():
    return {
        "message": "Welcome to FastAPI!"
    }


@app.post("/students")
def create_student(student: schemas.Student, db: Session = Depends(get_db)):
    new_student = model.Student(
        name=student.name,
        age=student.age,
        email=student.email
    )

    db.add(new_student)
    db.commit()
    db.refresh(new_student)

    return {
        "message": "Student Added Successfully",
        "data": new_student
    }