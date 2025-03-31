package org.devlearn.lvshopserver.services;

import org.devlearn.lvshopserver.dto.CategoryDTO;
import org.devlearn.lvshopserver.dto.CategoryTypeDTO;
import org.devlearn.lvshopserver.entities.Category;
import org.devlearn.lvshopserver.entities.CategoryType;
import org.devlearn.lvshopserver.exceptions.ResourceNotFoundEx;
import org.devlearn.lvshopserver.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

/**
 * @author tippy091
 * @created 31/03/2025
 * @project server
 **/


@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;
    public Category getCategory(UUID categoryID) {
        Optional<Category> category = categoryRepository.findById(categoryID);
        return category.orElse(null);
    }


    public Category createCategory(CategoryDTO categoryDTO){
        Category category = mapToEntity(categoryDTO);
        return categoryRepository.save(category);
    }


    private Category mapToEntity(CategoryDTO categoryDTO) {
        Category category = Category.builder()
                .code(categoryDTO.getCode())
                .name(categoryDTO.getName())
                .description(categoryDTO.getDescription())
                .build();

        if(null != categoryDTO.getCategoryTypeList()) {
            List<CategoryType> categoryTypes = mapToCategoryTypesList(categoryDTO.getCategoryTypeList(), category);
            category.setCategoryTypes(categoryTypes);
        }

        return category;
    }

    private List<CategoryType> mapToCategoryTypesList(List<CategoryTypeDTO> categoryTypeList, Category category) {
       return categoryTypeList.stream().map(categoryTypeDTO -> {

           CategoryType categoryType = new CategoryType();
           categoryType.setCode(categoryTypeDTO.getCode());
           categoryType.setName(categoryTypeDTO.getName());
           categoryType.setDescription(categoryTypeDTO.getDescription());
           categoryType.setCategory(category);
           return categoryType;
       }).collect(Collectors.toList());
    }

    public List<Category> getAllCategory() {

        return categoryRepository.findAll();
    }

    public Category updateCategory(CategoryDTO categoryDTO, UUID categoryID) {

        Category category = categoryRepository.findById(categoryID)
                .orElseThrow(() -> new ResourceNotFoundEx("Category not found with ID " +categoryDTO.getId()));

        if(null != categoryDTO.getName()) {
            category.setName(categoryDTO.getName());
        }
        if(null != categoryDTO.getName()) {
            category.setCode(categoryDTO.getCode());
        }
        if(null != categoryDTO.getName()) {
            category.setDescription(categoryDTO.getDescription());
        }

        List<CategoryType> existing = category.getCategoryTypes();
        List<CategoryType> list = new ArrayList<>();

        if(categoryDTO.getCategoryTypeList() != null) {
            categoryDTO.getCategoryTypeList().forEach(categoryTypeDTO -> {
                if(categoryTypeDTO.getId() != null) {
                    Optional<CategoryType> categoryType = existing.stream().filter(t -> t.getId().equals(categoryTypeDTO.getId())).findFirst();
                    CategoryType categoryType1 = categoryType.get();
                    categoryType1.setCode(categoryTypeDTO.getCode());
                    categoryType1.setName(categoryTypeDTO.getName());
                    categoryType1.setDescription(categoryTypeDTO.getDescription());
                    list.add(categoryType1);
                } else {
                    CategoryType categoryType = new CategoryType();
                    categoryType.setCode(categoryTypeDTO.getCode());
                    categoryType.setName(categoryTypeDTO.getName());
                    categoryType.setDescription(categoryTypeDTO.getDescription());
                    categoryType.setCategory(category);
                    list.add(categoryType);
                }
            });
        }
        category.setCategoryTypes(list);
        return categoryRepository.save(category);
    }

    public void deleteCategory(UUID categoryID) {
        categoryRepository.deleteById(categoryID);
    }
}
