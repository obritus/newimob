
import { ChangeEvent, useState } from "react";

export default function ImovelForm() {
    const [form, setForm] = useState({
        _id: "",
        title: "",
        price: 0,
        type: 0,
        categoria: 0,
        quartos: 0,
        suites: 0,
        banheiros: 0,
        vagas_garagem: 0,
        details: "",
        active: true,
        cidade: { _id: "", name: "" },
        bairro: { _id: "", name: "" },
        google_maps: {
            formatted_address: "",
            full_address: "",
            lat: 0,
            lng: 0,
        },
        tags: [''],
    })

    const handleChange = (e:any) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    return (
        <form>

            {/* ID */}
            <input
                type="text"
                name="_id"
                value={form._id}
                onChange={handleChange}
                placeholder="ID"
                className=""
            />

            {/* Título */}
            <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Título"
                className=""
            />

            {/* Preço */}
            <input
                type="number"
                name="price"
                value={form.price}
                onChange={handleChange}
                placeholder="Preço"
                className=""
            />

            {/* Tipo */}
            <input
                type="number"
                name="type"
                value={form.type}
                onChange={handleChange}
                placeholder="Tipo"
                className=""
            />

            {/* Categoria */}
            <input
                type="number"
                name="categoria"
                value={form.categoria}
                onChange={handleChange}
                placeholder="Categoria"
                className=""
            />

            {/* Quartos */}
            <input
                type="number"
                name="quartos"
                value={form.quartos}
                onChange={handleChange}
                placeholder="Quartos"
                className=""
            />

            {/* Suítes */}
            <input
                type="number"
                name="suites"
                value={form.suites}
                onChange={handleChange}
                placeholder="Suítes"
                className=""
            />

            {/* Banheiros */}
            <input
                type="number"
                name="banheiros"
                value={form.banheiros}
                onChange={handleChange}
                placeholder="Banheiros"
                className=""
            />

            {/* Vagas de garagem */}
            <input
                type="number"
                name="vagas_garagem"
                value={form.vagas_garagem}
                onChange={handleChange}
                placeholder="Vagas de garagem"
                className=""
            />

            {/* Detalhes */}
            <textarea
                name="details"
                value={form.details}
                onChange={handleChange}
                placeholder="Detalhes"
                className=""
            />

            {/* Ativo */}
            <label>
                <input
                    type="checkbox"
                    name="active"
                    checked={form.active}
                    onChange={handleChange}
                    className=""
                />
                Ativo
            </label>

            {/* Cidade */}
            <input
                type="text"
                value={form.cidade._id}
                onChange={(e) =>
                    setForm({
                        ...form,
                        cidade: { ...form.cidade, _id: e.target.value },
                    })
                }
                placeholder="ID da cidade"
                className=""
            />

            <input
                type="text"
                value={form.cidade.name}
                onChange={(e) =>
                    setForm({
                        ...form,
                        cidade: { ...form.cidade, name: e.target.value },
                    })
                }
                placeholder="Nome da cidade"
                className=""
            />

            {/* Bairro */}
            <input
                type="text"
                value={form.bairro._id}
                onChange={(e) =>
                    setForm({
                        ...form,
                        bairro: { ...form.bairro, _id: e.target.value },
                    })
                }
                placeholder="ID do bairro"
                className=""
            />

            <input
                type="text"
                value={form.bairro.name}
                onChange={(e) =>
                    setForm({
                        ...form,
                        bairro: { ...form.bairro, name: e.target.value },
                    })
                }
                placeholder="Nome do bairro"
                className=""
            />

            {/* Google Maps */}
            <input
                type="text"
                value={form.google_maps.formatted_address}
                onChange={(e) =>
                    setForm({
                        ...form,
                        google_maps: {
                            ...form.google_maps,
                            formatted_address: e.target.value,
                        },
                    })
                }
                placeholder="Endereço formatado"
                className=""
            />

            <input
                type="text"
                value={form.google_maps.full_address}
                onChange={(e) =>
                    setForm({
                        ...form,
                        google_maps: {
                            ...form.google_maps,
                            full_address: e.target.value,
                        },
                    })
                }
                placeholder="Endereço completo"
                className=""
            />

            <input
                type="number"
                value={form.google_maps.lat}
                onChange={(e) =>
                    setForm({
                        ...form,
                        google_maps: {
                            ...form.google_maps,
                            lat: Number(e.target.value),
                        },
                    })
                }
                placeholder="Latitude"
                className=""
            />

            <input
                type="number"
                value={form.google_maps.lng}
                onChange={(e) =>
                    setForm({
                        ...form,
                        google_maps: {
                            ...form.google_maps,
                            lng: Number(e.target.value),
                        },
                    })
                }
                placeholder="Longitude"
                className=""
            />

            {/* Tags */}
            <input
                type="text"
                placeholder="Tags separadas por vírgula"
                onChange={(e:ChangeEvent<HTMLInputElement>) =>
                    setForm({
                        ...form,
                        tags: e.target.value.split(",").map(tag => tag.trim()),
                    })
                }
                className=""
            />

            <button type="submit" className="">
                Salvar
            </button>

        </form>
    );
}
