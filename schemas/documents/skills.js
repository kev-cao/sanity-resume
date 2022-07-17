import client from "part:@sanity/base/client";

export default {
  title: "Skills",
  name: "skills",
  type: "document",
  fields: [
    {
      title: "Category",
      name: "category",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Priority",
      name: "priority",
      type: "number",
      initialValue: async () =>
        (await client.fetch(`*[_type == "skills"]`)).length,
    },
    {
      title: "Skills",
      name: "skills",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.min(1).unique(),
    },
  ],
};
