import React, { EventHandler, FormEvent, FormEventHandler, useEffect, useState } from 'react';
import styles from "./workshop-reg-form.module.scss"
import { fetchExpertises } from '../../service/vcs-service/vcs-service';
const WorkshopRegForm = () => {
    const [formData, setFormData] = useState({});
    const submitHandler = (e: FormEvent) => {
        e.preventDefault();
        console.log({ formData });
    }
    const fields = [{ key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "country", label: "Country" },
    { key: "phone", label: "Phone" },
    { key: "course", label: "Course" },
    { key: "profession", label: "Profession" },
    { key: "designation", label: "Designation" },
    { key: "company", label: "Organization" },
    { key: "payment", label: "Payment" }]


    const fetchData = async () => {
        const expr = await fetchExpertises();
        console.log({ expr })
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <form onSubmit={submitHandler} onChange={(e: React.FormEvent<HTMLFormElement>) => {
            const val = (e.target as any).value
            const name = (e.target as any).name
            setFormData(formDat => ({ ...formDat, [name]: val }))
        }}
            className={styles.workshopFormContainer}>
            {fields.map((fieldVal) => {
                return (
                    <label className={styles.workshopFormFields} key={fieldVal.key}>
                        {fieldVal.label}
                        <input type="text" name={fieldVal.key} />
                    </label>
                )
            })}
            <button>Submit</button>
        </form>
    )
}

export default WorkshopRegForm