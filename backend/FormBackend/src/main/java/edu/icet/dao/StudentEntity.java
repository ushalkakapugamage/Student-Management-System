package edu.icet.dao;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="studentData")

public class StudentEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String studentFirstName;

    private String studentLastName;

    private LocalDate dateOfBirth;

    private int age;

    private String email;

    private  String studentContact;

    private String address;

    private String guardianFirstName;

    private String guardianLastName;

    private  String guardianContact;


}
