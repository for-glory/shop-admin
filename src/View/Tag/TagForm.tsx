import { RichTextInput } from "ra-input-rich-text"
import {
    ChipField,
    NumberInput,
    ReferenceInput,
    SelectInput,
    SimpleForm,
    TextField,
    TextInput,
} from "react-admin"

export default function TagForm() {
    return (
        <SimpleForm>
            <ChipField source="id" variant="outlined" />

            <TextInput source="name" required />
        </SimpleForm>
    )
}
