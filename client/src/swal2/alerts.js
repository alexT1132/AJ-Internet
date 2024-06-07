import Swal from "sweetalert2";

export const RegisterDone = () => {
    Swal.fire({
        icon: 'success',
        title: 'Usuario registrado'
    })
}