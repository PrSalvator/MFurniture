import { useEditDirectorPresenter } from "@/entities/case/director/edit/presenter"
import { EditDirectorForm } from "@/features/forms/edit_director"

const EditDirector = () => {
    const {handleSubmit, form, isPending} = useEditDirectorPresenter();
    return (
        <div>
            <h1 className="text-h1 mb-3">Редактирование начальника цеха</h1>
            <EditDirectorForm handleSubmit={handleSubmit} form={form} isPending={isPending}/>
        </div>
    )
}

export default EditDirector;