import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import { Head, Link, usePage } from "@inertiajs/react";
import Swal from "sweetalert2";

export default function Index(props){
    const {portfolio_projects} = usePage().props;

    function destroy(id){
        Inertia.delete(route("portfolio-projects.destroy", id));
    }

    function deleteSwal(id){
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if(result.isConfirmed) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    timer: 3000,
                    timerProgressBar: true
                });
                Toast.fire({
                    icon: "success",
                    title: "Data Berhasil Dihapus",
                }).then(() => {
                    destroy(id);
                    location.reload();
                });
            }
        })
    }

    return(
        <Authenticated user={props.auth.user}>
            <Head title="Portfolio Projects"/>
            <div className="pt-12 mt-12">
                <div className="max-w-5xl mx-auto sm:px-auto lg:px-auto space-y-6">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Media Sosial</h5>
                                    <Link href={ route("portfolio-projects.create") } className="btn btn-primary my-4">Tambah Data</Link>
                                    <table id="zero-conf" className="display" style={{ width: "100%", overflowX: "scroll" }}>
                                        <thead>
                                            <tr>
                                                <th>Title</th>
                                                <th>SubTitle</th>
                                                <th>Nama Project</th>
                                                <th>Deskripsi Project</th>
                                                <th>IMG</th>
                                                <th>Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {portfolio_projects.map(({id, title, sub_title, project_name, project_description, img}) => (
                                            <tr key={id}>
                                                <td>{ title }</td>
                                                <td>{ sub_title }</td>
                                                <td>{ project_name }</td>
                                                <td>{ project_description }</td>
                                                <td>
                                                    <img src={`/storage/${img}`} alt="Media Sosial Image" style={{ maxWidth: "100px",maxHeight: "100px", }} />

                                                </td>
                                                <td>
                                                    <Link href={route("portfolio-projects.edit", id)} className="btn btn-primary">
                                                        Edit
                                                    </Link>
                                                    <button onClick={() => deleteSwal(id)} type="submit" className="btn btn-danger">Hapus</button>
                                                </td>
                                            </tr>
                                            ))}
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th>Title</th>
                                                <th>SubTitle</th>
                                                <th>Nama Project</th>
                                                <th>Deskripsi Project</th>
                                                <th>IMG</th>
                                                <th>Aksi</th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    )
}
