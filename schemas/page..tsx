import { ReferenceInput } from "sanity";

const page = {
    name: "page",
    title: "Pages",
    type: "document",
    fields: [

      {
        name: "category",
        title: "Category",
        type: "reference",
        to: [{ type: "project" }] //
      },
      {
        name: "title",
        title: "Title",
        type: "string"
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: { source: "title", maxLength: 96 }
      },
      {
        name: "content",
        title: "Content",
        type: "array",
        of: [
          { type: "block" }
        ]
      },
      {
        name: "relatedPage", // Change "relatedPage" to a suitable name
        title: "Related Page",
        type: "reference",
        to: [{ type: "page" }] // Reference the "page" type
      },
    ]
  }
  
  export default page;

  