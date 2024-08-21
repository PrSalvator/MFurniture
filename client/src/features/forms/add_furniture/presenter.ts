import { useState } from "react"

export const useAddFurnitureFormPresenter = () => {
    const [file, setFile] = useState<File>();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFile(e.target.files?.item(0) ?? undefined)
    }

    return {file, handleChange}
}