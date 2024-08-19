import { useAddOrderPresenter } from "@/entities/case/order/add_order/presenter";
import { AddOrderForm } from "@/features/forms/add_order";

const AddOrder = () => {
  const { form, isPending, handleSubmit } = useAddOrderPresenter();

  return (
    <div>
      <h1>Новый заказ</h1>
      <AddOrderForm form={form} isPending={isPending} handleSubmit={handleSubmit}/>
    </div>
  );
};

export default AddOrder;
