'use client'

import { Formik, useFormik } from "formik"

// _id: string
// title: string
// price: number
// type: number
// categoria: number
// quartos: number
// suites: number
// banheiros: number
// vagas_garagem: number
// details: string
// active: boolean
// cidade: { _id: string; name: string }
// bairro: { _id: string; name: string }
// google_maps: {
	// formatted_address: string
	// full_address: string
	// lat: number
	// lng: number
// }
// tags: [string]

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
                <label for="title">
                    <input type="text" id="title" name="title" placeholder="Título do anúncio." />
                </label>
            </div>
             <div>
                <label for="title" class>
                    <input type="text" id="title" name="title" placeholder="Título do anúncio." />
                </label>
            </div>
             <div>
                <label for="title">
                    <input type="text" id="title" name="title" placeholder="Título do anúncio." />
                </label>
            </div>
             <div>
                <label for="describ">
                    <input type="text" id="describ" name="describ" placeholder="Título do anúncio." />
                </label>
            </div>
             <div>
                <label for="price">
                    <input type="text" id="price" name="price" placeholder="Título do anúncio." />
                </label>
            </div>
        </form>
    </>
}

export default Create