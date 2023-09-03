package edu.icet.controller;

import edu.icet.dao.StudentEntity;
import edu.icet.dto.Student;
import edu.icet.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/student")
public class StudentController {
    @Autowired
    StudentService service;
    @PostMapping
    public ResponseEntity<Map<String, String>> addStudent(@Valid @RequestBody Student student) {
        student.calculateAge();
        service.addStudent(student);

        // Construct a success response JSON object
        String successMessage = "Student added successfully";
        Map<String, String> response = new HashMap<>();
        response.put("message", successMessage);

        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @GetMapping
    public Iterable<StudentEntity> getStudent(){
        return service.getStudent();
    }

    @GetMapping("/{id}")
    public Iterable<StudentEntity> getStudentById(@PathVariable int id){
        return service.findById(id);
    }



}

