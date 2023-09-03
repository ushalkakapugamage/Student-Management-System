package edu.icet.service;

import edu.icet.dao.StudentEntity;
import edu.icet.dto.Student;


public interface StudentService {
     StudentEntity addStudent(Student student);

     Iterable<StudentEntity> getStudent();


     Iterable<StudentEntity> findById(int id);
}
