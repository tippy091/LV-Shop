package org.devlearn.lvshopserver.controllers;

import org.devlearn.lvshopserver.dto.CategoryDTO;
import org.devlearn.lvshopserver.entities.Category;
import org.devlearn.lvshopserver.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

/**
 * @author tippy091
 * @created 31/03/2025
 * @project server
 **/

@RestController
@RequestMapping("/api/category")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;


    @GetMapping("/{id}")
    public ResponseEntity<Category> getCategoryById(@PathVariable(value = "id", required = true) UUID categoryId) {
        Category category = categoryService.getCategory(categoryId);
        return new ResponseEntity<>(category, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Category>> getAllCategories() {
        List<Category> categoryList = categoryService.getAllCategory();
        return new ResponseEntity<>(categoryList, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Category> createCategory(@RequestBody CategoryDTO categoryDTO) {
        Category category = categoryService.createCategory(categoryDTO);
        return new ResponseEntity<>(category, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Category> updateCategory(@RequestBody CategoryDTO categoryDTO, @PathVariable(value = "id", required = true) UUID categoryID) {
       Category updatedCategory = categoryService.updateCategory(categoryDTO, categoryID);
        return new ResponseEntity<>(updatedCategory, HttpStatus.OK);

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Category> deleteCategory(@PathVariable(value = "id", required = true) UUID categoryID) {
        categoryService.deleteCategory(categoryID);
        return ResponseEntity.ok().build();
    }
}
