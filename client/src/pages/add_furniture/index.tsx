import { useAddFurniturePresenter } from "@/entities/case/furniture/add/presenter"
import { AddFurnitureForm } from "@/features/forms/add_furniture"

const AddFurniture = () => {
    const {handleSubmit, form, isPending} = useAddFurniturePresenter();

    return(
        <div>
            <h1 className="text-h1 mb-3">Добавление мебели</h1>
            <AddFurnitureForm handleSubmit={handleSubmit} form={form} isPending={isPending}/>
        </div>
    )
}

export default AddFurniture;