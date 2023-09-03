package edu.icet.dto;

import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Student {

//--------------student details------------//

    @NotBlank(message = "enter valid first name")       //annotations to validate
    private String studentFirstName;

    @NotBlank(message = "enter valid last name")        //annotations to validate
    private String studentLastName;

    @NotNull(message = "Enter valid birthdate")        //annotations to validate
    @Past(message = "Birth date must be in the past")
    private LocalDate dateOfBirth;


    private int age;

    @Email      //annotations to validate
    private String email;

    @Pattern(regexp = "0[0-9]{9}", message = "Enter a valid 10-digit mobile number starting with zero")     //annotations to validate
    private String studentContact;

    @NotBlank       //annotations to validate
    private String address;


//---------------guardian details---------------//

    @NotBlank(message = "enter valid guardian first name")      //annotations to validate
    private String guardianFirstName;

    @NotBlank(message = "enter valid guardian last name")       //annotations to validate
    private String guardianLastName;

    @Pattern(regexp = "0[0-9]{9}", message = "Enter a valid 10-digit mobile number starting with zero")         //annotations to validate
    private String guardianContact;

    public void calculateAge() {        // calculating age of the student based on the given birthdate
        LocalDate currentDate = LocalDate.now(); // Get the current date
         int calculatedAge = currentDate.getYear() - dateOfBirth.getYear();
         if (calculatedAge>=10 && calculatedAge<=25){
              age=calculatedAge;
        }else{
             throw new IllegalArgumentException("Age is not within the valid range (10-20)");
         }
    }

}
