import SummernoteEditor from "@/Components/SummernoteEditor";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create(props) {
    const {data, setData, post, errors} = useForm({
        title: '',
        sub_title: '',
        project_name: '',
        project_description: '',
        img: '',
    });

    function handleSubmit(e){
        e.preventDefault();
        post(route("portfolio-projects.store"));
    }

    return (
        <Authenticated user={props.auth.user}>
            <Head title="Tambah Portfolio Projects"/>
            <div className="pt-12 mt-12">
                <div className="max-w-5xl mx-auto sm:px-auto lg:px-auto space-y-6">
                    <div className="row my-3">
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Tambah Data Portfolio Projects</h5>
                                    <div className="flex items-center justify-between mb-6">
                                        <Link
                                            className="px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none"
                                            href={ route("portfolio-projects.index") }
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
                                            <label htmlFor="sub_title" className="form-label">Sub Title</label>
                                            <input
                                            type="text"
                                            name="sub_title"
                                            className="form-control text-black"
                                            value={data.sub_title}
                                            onChange={(e) =>
                                                setData("sub_title", e.target.value)
                                            }
                                            />
                                            <span className="text-red-600">
                                                {errors.sub_title}
                                            </span>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="project_name" className="form-label">Nama Projects</label>
                                            <input
                                            type="text"
                                            name="project_name"
                                            className="form-control text-black"
                                            value={data.project_name}
                                            onChange={(e) =>
                                                setData("project_name", e.target.value)
                                            }
                                            />
                                            <span className="text-red-600">
                                                {errors.project_name}
                                            </span>
                                        </div>
                                        {/* <div className="mb-3">
                                            <label htmlFor="sub_title" className="form-label">Sub Title</label>
                                            <SummernoteEditor name="sub_title" className="form-control text-black" value={data.sub_title} onChange={(e) => setData("sub_title", e.target.value)} />
                                            <span className="text-red-600">
                                                {errors.sub_title}
                                            </span>
                                        </div> */}
                                        <div className="mb-3">
                                            <label htmlFor="project_description" className="form-label">Deskripsi Project</label>
                                            <SummernoteEditor name="project_description" className="form-control text-black" value={data.project_description} onChange={(e) => setData('project_description', e.target.value)} />
                                            <span className="text-red-600">
                                                {errors.project_description}
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
                                                {errors.img}
                                            </span>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Submit</button>
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
