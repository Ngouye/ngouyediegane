package com.platmoi.repository;

import com.platmoi.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProjectRepository extends JpaRepository<Project, Long> {
    List<Project> findByFeaturedTrue();
    List<Project> findByCategory(String category);
}
