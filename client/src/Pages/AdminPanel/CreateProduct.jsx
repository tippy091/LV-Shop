import React from "react";
import {
  ArrayInput,
  BooleanInput,
  Create,
  ImageField,
  ImageInput,
  NumberInput,
  ReferenceInput,
  required,
  SelectField,
  SelectInput,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
} from "react-admin";
import CategoryTypeInput from "./Category/CategoryTypeInput";

export const sizeSelector = ["S", "M", "L", "XL", "XXL"];

const CreateProduct = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="name" validate={[required()]} />
        <TextInput source="slug" validate={[required()]} />
        <TextInput source="description" validate={[required()]} />
        <NumberInput source="price" validate={[required()]} />
        {/* Refer category fields */}
        <ReferenceInput source="categoryId" reference="category" />
        <CategoryTypeInput />

        <TextInput
          source="thumbnail"
          label="Image URL"
          validate={[required()]}
        />
        <ImageField source="thumbnail" src="url" title="Image preview" />

        <ArrayInput source="variants">
          <SimpleFormIterator inline>
            <SelectInput source="size" choices={sizeSelector} />
            <NumberInput source="stockQuantity" />
          </SimpleFormIterator>
        </ArrayInput>

        <ArrayInput source="productResources">
          <SimpleFormIterator inline>
            <TextInput source="name" validate={[required()]} />
            <TextInput source="url" validate={[required()]} />
            <SelectInput source="type" choices={["image"]} />
            <BooleanInput source="isPrimary" />
          </SimpleFormIterator>
        </ArrayInput>

        <BooleanInput source="newArrival" />
      </SimpleForm>
    </Create>
  );
};

export default CreateProduct;
