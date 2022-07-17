import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Resume")
    .items([
      S.listItem()
        .title("Education")
        .id("education")
        .child(
          S.documentTypeList("university")
            .title("Education")
            .defaultOrdering([{ field: "graduationDate", direction: "desc" }])
        ),
      S.listItem()
        .title("Skills")
        .id("skills")
        .child(
          S.documentTypeList("skills")
            .title("Skills")
            .defaultOrdering([{ field: "priority", direction: "asc" }])
        ),
      S.listItem()
        .title("Work Experience")
        .id("workExperience")
        .child(
          S.documentTypeList("job")
            .title("Work Experience")
            .defaultOrdering([
              { field: "endDate", direction: "desc" },
              { field: "startDate", direction: "desc" },
            ])
        ),
      S.listItem()
        .title("Projects")
        .id("projects")
        .child(
          S.documentTypeList("project")
            .title("Projects")
            .defaultOrdering([{ field: "date", direction: "desc" }])
        ),
    ]);
