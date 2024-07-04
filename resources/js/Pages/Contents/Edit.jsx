import SummernoteEditor from "@/Components/SummernoteEditor";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";

export default function Edit(props) {
    const { contents } = usePage().props;
    const { data, setData, post, errors } = useForm({
        name: contents.name || "",
        title: contents.title || "",
        description: contents.description || "",
        img: contents.img, // Set initial value to null
    });

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("title", data.title);
        formData.append("description", data.description);
        if (data.img) {
            formData.append("img", data.img);
        }
        formData.append("_method", "PUT"); // If you still want to use PUT method

        post(route("contents.updateContents", contents.id), formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }

    function previewImage(input) {
        var preview = document.getElementById('img-preview');
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function(e) {
                preview.src = e.target.result;
                preview.style.display = 'block';
            }

            reader.readAsDataURL(input.files[0]); // convert to base64 string
        } else {
            preview.src = '#';
            preview.style.display = 'none';
        }
    }


    return (
        <Authenticated user={props.auth.user}>
            <Head title="Edit Contents" />
            <div className="pt-12 mt-12">
                <div className="max-w-5xl mx-auto sm:px-auto lg:px-auto space-y-6">
                    <div className="row my-3">
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Edit Data Contents</h5>
                                    <div className="flex items-center justify-between mb-6">
                                        <Link
                                            className="px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none"
                                            href={route("contents.index")}
                                        >
                                            Back
                                        </Link>
                                    </div>
                                    <form name="createForm" onSubmit={handleSubmit} encType="multipart/form-data">
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
                                                {errors.name}
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
                                            {/* <input
                                                type="text"
                                                name="description"
                                                className="form-control text-black"
                                                value={data.description}
                                                onChange={(e) =>
                                                    setData("description", e.target.value)
                                                }
                                            /> */}
                                            <SummernoteEditor name="description" className="form-control text-black" value={data.description} onChange={(e) => setData('description', e.target.value)} />
                                            <span className="text-red-600">
                                                {errors.description}
                                            </span>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="img" className="form-label">Image</label>
                                            <input
                                                type="file"
                                                name="img"
                                                className="form-control text-black"
                                                onChange={(e) => {
                                                    setData("img", e.target.files[0]);
                                                    previewImage(e.target);
                                                }}
                                            />
                                            <span className="text-red-600">
                                                {errors.img}
                                            </span>
                                            <img id="img-preview" class="img-preview" src={`/storage/${data.img}`} alt="Preview Image" style={{ maxWidth: "300px", maxHeight: "300px" }} />
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
    );
}
