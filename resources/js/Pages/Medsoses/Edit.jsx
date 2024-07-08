import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";

export default function Edit(props) {
    const {medsoses} = usePage().props;
    const {data, setData, errors, post} = useForm({
        title: medsoses.title || " ",
        img: medsoses.img,
    });

    // console.log("data :", medsoses);

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", medsoses.title);
        if(data.img) {
            formData.append("img", medsoses.img);
        }
        formData.append("_method", "PUT");

        post(route("medsoses.updateMedsoses", medsoses.id), formData, {
            headers: {
                "content-type": "application/json",
            }
        })
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
            <Head title="Edit Data Medsos"/>
            <div className="pt-12 mt-12">
                <div className="max-w-5xl mx-auto sm:px-auto lg:px-auto space-y-6">
                    <div className="row my-3">
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Edit Data Media Sosial</h5>
                                    <div className="flex items-center justify-between mb-6">
                                        <Link
                                            className="px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none"
                                            href={route("medsoses.index")}
                                        >
                                            Back
                                        </Link>
                                    </div>
                                    <form name="createForm" onSubmit={handleSubmit} encType="multipart/form-data">
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
    )
}
