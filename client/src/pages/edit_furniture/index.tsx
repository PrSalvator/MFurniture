import { useEditFurniturePresenter } from "@/entities/case/furniture/edit/presenter";
import { EditFurnitureForm } from "@/features/forms/edit_furniture";

const EditFurniture = () => {
  const { form, handleSubmit, isPending } = useEditFurniturePresenter();

  return (
    <div>
      <h1>Редактирование мебели</h1>
      <EditFurnitureForm
        form={form}
        handleSubmit={handleSubmit}
        isPending={isPending}
      />
    </div>
  );
};

export default EditFurniture;
