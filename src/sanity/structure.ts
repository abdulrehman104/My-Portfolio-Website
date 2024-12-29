import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("ARehman Portfolio")
    .items([
      S.documentTypeListItem("category").title("Categories"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => !["post", "category"].includes(item.getId()!) // Exclude "post" and "category"
      ),
    ]);
