package com.platmoi.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "profiles")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Profile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fullName;
    private String title;
    private String email;
    private String phone;
    private String location;

    @Column(columnDefinition = "TEXT")
    private String bio;

    private String avatarUrl;
    private String githubUrl;
    private String linkedinUrl;
    private String cvUrl;
}
