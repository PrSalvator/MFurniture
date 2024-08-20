import { useAddShopPresenter } from "@/entities/case/shop/add/presenter";
import { AddShopForm } from "@/features/forms/add_shop";

const AddShop = () => {
  const {form, handleSubmit, isPending} = useAddShopPresenter();
  return (
    <div>
      <h1>Добавление цеха</h1>
      <AddShopForm form={form} handleSubmit={handleSubmit} isPending={isPending}/>
    </div>
  );
};

export default AddShop;
