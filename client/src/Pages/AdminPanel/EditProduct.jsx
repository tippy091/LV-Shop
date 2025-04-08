import React from "react";
import {
  ArrayInput,
  BooleanInput,
  Edit,
  ImageField,
  ImageInput,
  NumberInput,
  required,
  SelectInput,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
} from "react-admin";
import { sizeSelector } from "./CreateProduct";

const EditProduct = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Description" source="description" />
        <TextInput label="Price" source="price" type="number" />

        <TextInput
          source="thumbnail"
          label="Image URL"
          validate={[required()]}
        />
        <ImageField source="thumbnail" src="url" title="Image preview" />

        <ArrayInput source="variants" label={"Edit Variants"}>
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
      </SimpleForm>
    </Edit>
  );
};

export default EditProduct;
