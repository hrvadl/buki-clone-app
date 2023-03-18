import { FormField } from "@/design/forms/types";
import { OppositeSubjectMapping } from "@/models/ad";
import { Subject } from "@/models/category";

export const addAdDefaultValues = {
  description: "",
  subject: 0,
};

export const addAdDefaultFields: FormField<typeof addAdDefaultValues>[] = [
  {
    type: "select",
    name: "subject",
    placeholder: "Subject",
    rules: {
      required: true,
    },
    items: [
      {
        label: Subject.Chemistry,
        value: OppositeSubjectMapping[Subject.Chemistry],
      },
      {
        label: Subject.IT,
        value: OppositeSubjectMapping[Subject.IT],
      },
      {
        label: Subject.Math,
        value: OppositeSubjectMapping[Subject.Math],
      },
      {
        label: Subject.Physics,
        value: OppositeSubjectMapping[Subject.Physics],
      },
    ],
  },
  {
    type: "text",
    name: "description",
    placeholder: "Description",
    rules: {
      required: true,
    },
  },
];
