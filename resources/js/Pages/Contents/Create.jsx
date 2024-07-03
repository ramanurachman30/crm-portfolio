import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create(props){
    const {data, setData, errors, post} = useForm({
        name: '',
        title: '',
        description: '',
        img: '',
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route("contents.store"));
    }

    return (
        <Authenticated user={props.auth.user}>
            <Head title="Tambah Data Content" />
            <div className="pt-12 mt-12">
                <div className="max-w-5xl mx-auto sm:px-auto lg:px-auto space-y-6">
                    <div className="row my-3">
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Tambah Data Contents</h5>
                                    <div className="flex items-center justify-between mb-6">
                                        <Link
                                            className="px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none"
                                            href={ route("contents.index") }
                                        >
                                            Back
                                        </Link>
                                    </div>
                                    <form name="createForm" onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label">Name</label>
                                            <input
                                            type="text"
                                            name="name"
                                            className="form-control text-black"
                                            value={data.name}
                                            onChange={(e) =>
                                                setData("name", e.target.value)
                                            }
                                            />
                                            <span className="text-red-600">
                                                {errors.title}
                                            </span>
                                        </div>
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
                                            <input
                                            type="text"
                                            name="description"
                                            className="form-control text-black"
                                            value={data.description}
                                            onChange={(e) =>
                                                setData("description", e.target.value)
                                            }
                                            />
                                            <span className="text-red-600">
                                                {errors.title}
                                            </span>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="img" className="form-label">Image</label>
                                            <input
                                            type="file"
                                            name="img"
                                            className="form-control text-black"
                                            onChange={(e) =>
                                                setData("img", e.target.files[0])
                                            }
                                            />
                                            <span className="text-red-600">
                                                {errors.title}
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
