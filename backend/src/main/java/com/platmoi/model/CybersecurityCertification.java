package com.platmoi.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name = "cybersecurity_certifications")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CybersecurityCertification {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String issuer;
    private String credentialId;
    private String credentialUrl;

    @Column(columnDefinition = "TEXT")
    private String description;

    private LocalDate issuedDate;
    private LocalDate expiryDate;
    private String icon;
    private boolean active;
}
