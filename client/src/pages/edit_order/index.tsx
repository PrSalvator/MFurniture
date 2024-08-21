import { useEditOrderPresenter } from "@/entities/case/order/edit_order/presenter";
import { EditOrderForm } from "@/features/forms/edit_order";

const EditOrder = () => {
  const {form, handleSubmit, isPending} = useEditOrderPresenter();

  return <div>
    <h1 className="text-h1 mb-3">Редактирование заказа</h1>
    <EditOrderForm form={form} handleSubmit={handleSubmit} isPending={isPending}/>
  </div>;
};

export default EditOrder;
