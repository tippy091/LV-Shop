import React from "react";
import {
  ArrayInput,
  Create,
  NumberInput,
  required,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
} from "react-admin";

const CreateCategory = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="name" validate={[required()]} />
        <TextInput source="code" validate={[required()]} />
        <TextInput source="description" validate={[required()]} />
        {/* Refer category fields */}
        <ArrayInput source="categoryTypes">
          <SimpleFormIterator inline>
            <TextInput source="name" />
            <TextInput source="code" />
            <TextInput source="description" />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Create>
  );
};

export default CreateCategory;
