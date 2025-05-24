CREATE TABLE Users ( 
user_id NUMBER PRIMARY KEY, 
first_name VARCHAR2(50), 
last_name VARCHAR2(50), 
email VARCHAR2(100) UNIQUE, 
role VARCHAR2(20) CHECK (role IN ('student', 'instructor')), 
registered_on DATE DEFAULT SYSDATE 
); 


CREATE TABLE Courses (
    course_id NUMBER PRIMARY KEY,
    cost DECIMAL (6, 2), 
    user_id Number(10),
    CONSTRAINT user_id_fk FOREIGN KEY (user_id) REFERENCES users(user_id),
	submission_date DATE,
	grade DECIMAL(5,2)
);


CREATE TABLE Enrolment (
    enrolment_id NUMBER PRIMARY KEY,
	user_id  NUMBER(10),
    CONSTRAINT user_id_fk FOREIGN KEY (user_id) REFERENCES users(user_id),
	course_id NUMBER(10),
    CONSTRAINT course_id_fk FOREIGN KEY (course_id) REFERENCES courses(course_id),
	enrolment_date DATE
);


CREATE TABLE Payment (
	course NUMBER PRIMARY KEY,
	user_id NUMBER(10),
    CONSTRAINT user_id_fk FOREIGN KEY (user_id) REFERENCES users(user_id),
	payment DECIMAL (9, 2)
);









