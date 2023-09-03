package edu.icet.service;

import edu.icet.dao.StudentEntity;
import edu.icet.dto.Student;
import edu.icet.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.Optional;

@Service
public class StudentServiceImpl implements StudentService{

    @Autowired
    StudentRepository studentRepository;
    public StudentEntity addStudent(Student student){       //creating student entity using the properties of the student dto and passing to the database
        StudentEntity entityModel = new StudentEntity();
        entityModel.setStudentFirstName(student.getStudentFirstName());
        entityModel.setStudentLastName(student.getStudentLastName());
        entityModel.setDateOfBirth(student.getDateOfBirth());
        entityModel.setAge(student.getAge());
        entityModel.setEmail(student.getEmail());
        entityModel.setStudentContact(student.getStudentContact());
        entityModel.setAddress(student.getAddress());
        entityModel.setGuardianFirstName(student.getGuardianFirstName());
        entityModel.setGuardianLastName(student.getGuardianLastName());
        entityModel.setGuardianContact(student.getGuardianContact());
        return studentRepository.save(entityModel);
    }

    public Iterable<StudentEntity> getStudent(){
        return studentRepository.findAll();
    }

    @Override
    public Iterable<StudentEntity> findById(int id) {
        return studentRepository.findById(id);
    }

}
