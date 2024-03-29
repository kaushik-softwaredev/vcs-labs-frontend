import React, { FormEvent, useEffect, useState } from 'react';
import styles from "./workshop-reg-form.module.scss"
import { fetchExpertises } from '../../service/vcs-service/vcs-service';
import { useParams } from 'react-router-dom';
const WorkshopRegForm = () => {
    const params = useParams()
    console.log({ params })
    const [formData, setFormData] = useState({});
    const submitHandler = (e: FormEvent) => {
        e.preventDefault();
        console.log({ formData });
    }
    const genderOptions = [{
        key: 'male',
        label: "Male"
    },
    {
        key: 'female',
        label: "Female"
    }]
    const fields = [{ key: "name", label: "Full Name" },
    { key: 'dob', label: "Date of birth", type: 'date' },
    { key: 'gender', label: 'Gender', type: 'dropdown', options: genderOptions },
    { key: "address", label: "Address" },
    { key: "city", label: "City" },
    { key: "state", label: "State/Province" },
    { key: "country", label: "Country" },
    { key: "phone", label: "Mobile number" },

    { key: "email", label: "Student E-Mail address" },
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
        <div className={styles.workshopPageContainer}>
            <div className={styles.workshopBannerImage}>
                <img src="https://picsum.photos/seed/picsum/200/300" />
            </div>
            <div className={styles.workshopSection2Container}>
                <div className={styles.workshopFormTitleContainer}>
                    <label>Excel workshop</label>
                </div>
                <form
                    onSubmit={submitHandler}
                    className={styles.workshopFormContainer}
                    onChange={(e: React.FormEvent<HTMLFormElement>) => {
                        const val = (e.target as any).value
                        const name = (e.target as any).name
                        setFormData(formDat => ({ ...formDat, [name]: val }))
                    }}
                >
                    {fields.map((fieldVal) => {
                        if (fieldVal.type === "dropdown") {
                            return <label className={styles.workshopFormFields} key={fieldVal.key}>
                                {fieldVal.label}
                                <select name={fieldVal.key}>
                                    {fieldVal.options?.map(option => <option value={option.key}>{option.label}</option>)}
                                </select>
                            </label>
                        }
                        return (
                            <label className={styles.workshopFormFields} key={fieldVal.key}>
                                {fieldVal.label}
                                <input type={fieldVal.type || "text"} name={fieldVal.key} />
                            </label>
                        )
                    })}
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default WorkshopRegForm