package com.example.kakeibo.repository;

import jakarta.persistence.*;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.kakeibo.entoty.Category;

public interface CategoryRepository extends JpaRepository<Category, Long>{
    
}
