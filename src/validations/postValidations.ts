import * as yup from "yup";

const postSchema = yup.object({
    body: yup.object({
      title: yup.string().required("Başlık boş bırakılamaz"),
      subtitle: yup.string().required("Alt başlık boş bırakılamaz"),
      content: yup.string().required("İçerik boş bırakılamaz"),
      tag: yup.string().required("Etiketler boş bırakılamaz"),
      image: yup.string(),
      createdAt: yup.date().default(function () {
          return new Date();
        }),
    })
});

export default  postSchema;