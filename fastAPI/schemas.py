from pydantic import BaseModel


class Student(BaseModel):
    name: str
    age: int
    email: str


class StudentResponse(Student):
    id: int

    class Config:
        from_attributes = True