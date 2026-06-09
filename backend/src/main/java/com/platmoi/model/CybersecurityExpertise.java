package com.platmoi.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "cybersecurity_expertise")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CybersecurityExpertise {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String category;

    @Column(columnDefinition = "TEXT")
    private String description;

    private String color;
    private String icon;
    private int level;
    private boolean featured;

    @ElementCollection
    @CollectionTable(name = "cybersecurity_tools", joinColumns = @JoinColumn(name = "expertise_id"))
    @Column(name = "tool")
    @Builder.Default
    private List<String> tools = new ArrayList<>();

    @ElementCollection
    @CollectionTable(name = "cybersecurity_skills", joinColumns = @JoinColumn(name = "expertise_id"))
    @Column(name = "skill")
    @Builder.Default
    private List<String> skills = new ArrayList<>();
}
