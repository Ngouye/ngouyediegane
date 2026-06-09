package com.platmoi.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "experiences")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Experience {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String company;
    private String role;
    private String location;

    @Column(columnDefinition = "TEXT")
    private String description;

    private LocalDate startDate;
    private LocalDate endDate;
    private boolean current;

    @ElementCollection
    @CollectionTable(name = "experience_achievements", joinColumns = @JoinColumn(name = "experience_id"))
    @Column(name = "achievement")
    @Builder.Default
    private List<String> achievements = new ArrayList<>();
}
