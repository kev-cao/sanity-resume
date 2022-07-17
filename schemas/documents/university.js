export default {
  title: "University",
  name: "university",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Location",
      name: "location",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Graduation Date",
      name: "graduationDate",
      type: "date",
      options: {
        dateFormat: "MM-YYYY",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Degree Level",
      name: "degree",
      type: "string",
      options: {
        list: [
          { title: "A.A.", value: "A.A." },
          { title: "A.S.", value: "A.S." },
          { title: "B.A.", value: "B.A." },
          { title: "B.S.", value: "B.S." },
          { title: "M.S.", value: "M.S." },
          { title: "MBA", value: "MBA" },
          { title: "PhD", value: "PhD" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Major",
      name: "major",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Minor",
      name: "minor",
      type: "string",
    },
    {
      title: "GPA",
      name: "gpa",
      type: "number",
      validation: (Rule) => Rule.positive().max(4).precision(3),
    },
    {
      title: "Relevant Courses",
      name: "courses",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
