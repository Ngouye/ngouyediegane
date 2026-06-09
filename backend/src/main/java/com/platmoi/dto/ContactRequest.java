package com.platmoi.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ContactRequest {

    @NotBlank(message = "Le nom est requis")
    private String name;

    @NotBlank(message = "L'email est requis")
    @Email(message = "Email invalide")
    private String email;

    @NotBlank(message = "Le sujet est requis")
    private String subject;

    @NotBlank(message = "Le message est requis")
    @Size(min = 10, message = "Le message doit contenir au moins 10 caractères")
    private String message;
}
