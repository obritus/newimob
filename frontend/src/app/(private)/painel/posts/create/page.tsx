'use client'

import Form from "@/app/(private)/painel/posts/create/Form"
import { Formik, useFormik } from "formik"

const Create = async () => {
    const { submitForm } = useFormik({
        onSubmit(values, formikHelpers) {
            console.log(values)
        },
        initialValues: {
            title: '',
            price: '',
            type: 1
        }
    })

    return <>
        <form onSubmit={submitForm}>
            <div>
                <label htmlFor="title">
                    <input type="text" id="title" name="title" placeholder="Título do anúncio." />
                </label>
            </div>
             <div>
                <label htmlFor="title">
                    <input type="text" id="title" name="title" placeholder="Título do anúncio." />
                </label>
            </div>
             <div>
                <label htmlFor="title">
                    <input type="text" id="title" name="title" placeholder="Título do anúncio." />
                </label>
            </div>
             <div>
                <label htmlFor="describ">
                    <input type="text" id="describ" name="describ" placeholder="Título do anúncio." />
                </label>
            </div>
             <div>
                <label htmlFor="price">
                    <input type="text" id="price" name="price" placeholder="Título do anúncio." />
                </label>
            </div>
        </form>
        <Form />
    </>
}

export default Create