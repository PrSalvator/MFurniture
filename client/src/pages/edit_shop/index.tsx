import { useEditShopPresenter } from "@/entities/case/shop/edit/presenter";
import { EditShopForm } from "@/features/forms/edit_shop";

const EditShop = () => {
  const {form, handleSubmit, isPending} = useEditShopPresenter();
  return (
    <div>
      <h1>Редактирование информации о цехе</h1>
      <EditShopForm form={form} handleSubmit={handleSubmit} isPending={isPending}/>
    </div>
  );
};

export default EditShop;
