import { useAddDirectorPresenter } from "@/entities/case/director/add/presenter";
import { AddDirectorForm } from "@/features/forms/add_director";

const AddDirector = () => {
  const {isPending, form, handleSubmit} = useAddDirectorPresenter();
  return (
    <div>
      <h1 className="text-h1 mb-3">Добавление начальника</h1>
      <AddDirectorForm isPending={isPending} form={form} handleSubmit={handleSubmit}/>
    </div>
  );
};

export default AddDirector;
