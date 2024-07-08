import SummernoteEditor from "@/Components/SummernoteEditor";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";

export default function Edit(props) {
    const {about_me} = usePage().props;
    const {data, setData, errors, put} = useForm({
        title: about_me.title || " ",
        description: about_me.description || " ",
    });

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("description", data.description);
        formData.append("_method", "PUT");

        put(route("about_me.update", about_me.id), formData, {
            'headers': {
                "Content-Type": "multipart/form-data",
            }
        });
    }

    return (
        <Authenticated user={props.auth.user}>
            <Head title="Tambah Data About Me" />
            <div className="pt-12 mt-12">
                <div className="max-w-5xl mx-auto sm:px-auto lg:px-auto space-y-6">
                    <div className="row my-3">
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Edit Data About Me</h5>
                                    <div className="flex items-center justify-between mb-6">
                                        <Link
                                            className="px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none"
                                            href={ route("about_me.index") }
                                        >
                                            Kembali
                                        </Link>
                                    </div>
                                    <form name="createForm" onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label htmlFor="title" className="form-label">Title</label>
                                            <input
                                            type="text"
                                            name="title"
                                            className="form-control text-black"
                                            value={data.title}
                                            onChange={(e) =>
                                                setData("title", e.target.value)
                                            }
                                            />
                                            <span className="text-red-600">
                                                {errors.title}
                                            </span>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="description" className="form-label">Description</label>
                                            <SummernoteEditor name="description" className="form-control text-black" value={data.description} onChange={(e) => setData('description', e.target.value)} />
                                            <span className="text-red-600">
                                                {errors.description}
                                            </span>
                                        </div>
                                        <button type="submit" class="btn btn-primary">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    )
}
